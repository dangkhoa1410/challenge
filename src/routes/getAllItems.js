"use strict";
const mockDBCalls = require("../database/index.js");

const getAllItemsHandler = async (request, response) => {
  try {
    const data = await mockDBCalls.getAllItems();
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

module.exports = (app) => {
  app.get("/users/items", getAllItemsHandler);
};
