

export default (text = "Hello world this is nodemon watch command change webpack.config.js and see me restart") => {
  const element = document.createElement("div"); element.innerHTML = text;
  return element;
};