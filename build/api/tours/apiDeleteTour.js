"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiDeleteTour = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id == tourID);
    if (tourIndex > -1) {
        data_1.DataStore.tours.splice(tourIndex, 1);
        res.json({
            "status": "succes",
            "message": "Element removed"
        });
    }
    else {
        res.json({
            "status": "error",
            "message": "Element not found"
        });
    }
};
