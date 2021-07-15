"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.vendor.findOne({ id }, [
      {
        path: "order_histories",
        populate: {
          path: "produks pembeli",
          populate: {
            path: "user",
          },
        },
      },
      {
        path: "produks portfolios",
      },
    ]);
    return sanitizeEntity(entity, { model: strapi.models.vendor });
  },
};
