"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id == tourID);
    if (tourIndex > -1) {
        const originalTour = data_1.DataStore.tours[tourIndex];
        const newTour = {
            id: tourID,
            location: req.body.location || "",
            tourTitle: req.body.tourTitle || "",
            tourCategory: req.body.tourCategory || "",
            tourDescription: req.body.tourDescription || "",
            price: req.body.price || 0,
            currency: req.body.currency || ""
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json({
            "status": "success",
            "message": "Element updated"
        });
    }
    else {
        res.json({
            "status": "error",
            "message": "Element not found"
        });
    }
};
