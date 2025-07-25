const multer = require("multer");
const util = require("util");
const maxSize = 8 * 1024 * 1024;

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }    
  };
  const docfile = (req, file, cb) => {
    if (file.mimetype.startsWith("pdf","doc","docx")) {
      cb(null, true);
    } else {
      cb("Please upload only PDF and Word Format file.", false);
    }    
  };

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/assets/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-userasset-${file.originalname}`);
    },
  });

  var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
  var docFiles = multer({ storage: storage,  limits: { fileSize: maxSize }, fileFilter: docfile });

 
module.exports = uploadFile;
module.exports = docFiles;