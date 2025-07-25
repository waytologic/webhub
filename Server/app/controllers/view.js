const path = require("path");

const view = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};
module.exports = {
    getview: view
  };