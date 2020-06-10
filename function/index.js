'use strict';
const _ = require("underscore");

exports.main_handler = async (event, context, callback) => {
    console.log("timestamp: " + _.now());
    return event;
};