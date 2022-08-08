const multer = require("multer");
const path = require("path");

// multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cd) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" &&   ext !== ".jpeg" && ext !== ".png") {
            cd(new Error("File type is not supported"));
            return;
        }
        cd(null, true);
    },
})