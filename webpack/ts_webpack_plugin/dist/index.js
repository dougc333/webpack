"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJSReferences = exports.generateCSSReferences = exports.generateAttributes = exports.defaultTemplate = exports.MiniHtmlWebpackPlugin = void 0;
var path_1 = __importDefault(require("path"));
var webpack_1 = require("webpack");
function getFiles(entrypoints, chunks) {
    var ret = {};
    entrypoints.forEach(function (entry) {
        if (chunks && !chunks.includes(entry.name)) {
            return;
        }
        entry.getFiles().forEach(function (file) {
            var extension = path_1.default.extname(file).replace(/\./, '');
            if (!ret[extension]) {
                ret[extension] = [];
            }
            ret[extension].push(file);
        });
    });
    return ret;
}
function generateAttributes(attributes) {
    if (attributes === void 0) { attributes = {}; }
    var stringAttributes = Object.entries(attributes);
    if (stringAttributes.length === 0) {
        return '';
    }
    return (' ' +
        stringAttributes
            .map(function (attr) {
            if (attr[1] === true) {
                return attr[0];
            }
            return "".concat(attr[0], "=\"").concat(attr[1], "\"");
        })
            .join(' '));
}
exports.generateAttributes = generateAttributes;
function generateCSSReferences(_a) {
    var _b = _a.files, files = _b === void 0 ? [] : _b, _c = _a.publicPath, publicPath = _c === void 0 ? '' : _c, _d = _a.attributes, attributes = _d === void 0 ? {} : _d;
    if (!attributes) {
        return '';
    }
    var allAttributes = __assign(__assign({}, attributes), { rel: 'rel' in attributes ? attributes.rel : 'stylesheet' });
    return files
        .map(function (file) {
        return "<link href=\"".concat(publicPath).concat(file, "\"").concat(generateAttributes(allAttributes), ">");
    })
        .join('');
}
exports.generateCSSReferences = generateCSSReferences;
function generateJSReferences(_a) {
    var _b = _a.files, files = _b === void 0 ? [] : _b, _c = _a.publicPath, publicPath = _c === void 0 ? '' : _c, _d = _a.attributes, attributes = _d === void 0 ? {} : _d;
    if (!attributes) {
        return '';
    }
    return files
        .map(function (file) {
        return "<script src=\"".concat(publicPath).concat(file, "\"").concat(generateAttributes(attributes), "></script>");
    })
        .join('');
}
exports.generateJSReferences = generateJSReferences;
function defaultTemplate(_a) {
    var _b = _a.css, css = _b === void 0 ? [] : _b, _c = _a.js, js = _c === void 0 ? [] : _c, _d = _a.publicPath, publicPath = _d === void 0 ? '' : _d, _e = _a.title, title = _e === void 0 ? '' : _e, _f = _a.htmlAttributes, htmlAttributes = _f === void 0 ? {
        lang: 'en',
    } : _f, _g = _a.head, head = _g === void 0 ? '' : _g, _h = _a.body, body = _h === void 0 ? '' : _h, _j = _a.cssAttributes, cssAttributes = _j === void 0 ? {} : _j, _k = _a.jsAttributes, jsAttributes = _k === void 0 ? {} : _k;
    var htmlAttrs = generateAttributes(htmlAttributes);
    var cssTags = generateCSSReferences({
        files: css,
        attributes: cssAttributes,
        publicPath: publicPath,
    });
    var jsTags = generateJSReferences({
        files: js,
        attributes: jsAttributes,
        publicPath: publicPath,
    });
    return "<!DOCTYPE html>\n  <html".concat(htmlAttrs, ">\n    <head>\n      <meta charset=\"UTF-8\">\n      <title>").concat(title, "</title>\n      ").concat(head).concat(cssTags, "\n    </head>\n    <body>\n      ").concat(body).concat(jsTags, "\n    </body>\n  </html>");
}
exports.defaultTemplate = defaultTemplate;
var MiniHtmlWebpackPlugin = /** @class */ (function () {
    function MiniHtmlWebpackPlugin(options) {
        this.options = options || {};
        this.webpack4plugin = this.webpack4plugin.bind(this);
        this.webpack5plugin = this.webpack5plugin.bind(this);
    }
    MiniHtmlWebpackPlugin.prototype.webpack4plugin = function (compilation, callback) {
        var _a = this.options, _b = _a.filename, filename = _b === void 0 ? 'index.html' : _b, _c = _a.publicPath, publicPath = _c === void 0 ? '' : _c, template = _a.template, context = _a.context, chunks = _a.chunks;
        var files = getFiles(compilation.entrypoints, chunks);
        var options = Object.assign({}, { publicPath: publicPath }, context, files);
        Promise.resolve((template || defaultTemplate)(options)).then(function (source) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            var sources = require('webpack-sources');
            compilation.assets[filename] = new sources.RawSource(source, true);
            callback();
        });
    };
    MiniHtmlWebpackPlugin.prototype.webpack5plugin = function (compilation) {
        var _a = this.options, _b = _a.filename, filename = _b === void 0 ? 'index.html' : _b, _c = _a.publicPath, publicPath = _c === void 0 ? '' : _c, template = _a.template, context = _a.context, chunks = _a.chunks;
        // TODO: Consider separating getFiles result to a structure as it can override other contents if file extension matches.
        return Promise.resolve((template || defaultTemplate)(__assign(__assign({ publicPath: publicPath }, context), getFiles(compilation.entrypoints, chunks)))).then(function (source) {
            // webpacks 5 exports `webpack-sources` to avoid cache problems
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            var sources = require('webpack').sources;
            compilation.emitAsset(filename, new sources.RawSource(source, true));
        });
    };
    MiniHtmlWebpackPlugin.prototype.apply = function (compiler) {
        var _this = this;
        var pluginName = 'MiniHtmlWebpackPlugin';
        compiler.hooks.thisCompilation.tap(pluginName, function (compilation) {
            compilation.hooks.processAssets.tapPromise({
                name: pluginName,
                // https://github.com/webpack/webpack/blob/master/lib/Compilation.js#L3280
                stage: webpack_1.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            }, function () { return _this.webpack5plugin(compilation); });
        });
    };
    return MiniHtmlWebpackPlugin;
}());
exports.MiniHtmlWebpackPlugin = MiniHtmlWebpackPlugin;
