"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services["order-history"].findOne({ id }, [
      {
        path: "produks vendors pembeli",
        populate: {
          path: "vendor user",
        },
      },
    ]);
    return sanitizeEntity(entity, { model: strapi.models["order-history"] });
  },
};
