"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.pembeli.findOne({ id }, [
      {
        path: "cart",
        populate: {
          path: "vendor",
        },
      },
    ]);
    return sanitizeEntity(entity, { model: strapi.models.pembeli });
  },
};
