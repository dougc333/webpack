import webpack, { WebpackPluginInstance } from 'webpack';
type Attributes = Record<string, any>;
type Context = {
    title?: string;
    htmlAttributes?: Attributes;
    cssAttributes?: Attributes;
    jsAttributes?: Attributes;
};
type TemplateParameters = {
    css?: string[];
    js?: string[];
    body?: string;
    head?: string;
    publicPath: string;
} & Context;
type Options = {
    filename?: string;
    publicPath?: string;
    context?: Context;
    template?: (args: TemplateParameters) => string | Promise<string>;
    chunks?: string[];
};
declare function generateAttributes(attributes?: {}): string;
declare function generateCSSReferences({ files, publicPath, attributes, }: {
    files: string[];
    publicPath: string;
    attributes: (Attributes & {
        rel?: string;
    }) | undefined;
}): string;
declare function generateJSReferences({ files, publicPath, attributes, }: {
    files: string[];
    publicPath: string;
    attributes: Attributes | undefined;
}): string;
declare function defaultTemplate({ css, js, publicPath, title, htmlAttributes, head, body, cssAttributes, jsAttributes, }: TemplateParameters): string;
declare class MiniHtmlWebpackPlugin implements WebpackPluginInstance {
    private options;
    constructor(options: Options);
    private webpack4plugin;
    private webpack5plugin;
    apply(compiler: webpack.Compiler): void;
}
export { MiniHtmlWebpackPlugin, defaultTemplate, generateAttributes, generateCSSReferences, generateJSReferences, };
