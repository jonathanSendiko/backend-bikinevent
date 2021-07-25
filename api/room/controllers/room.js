"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findUserRoom(ctx) {
    const { userId } = ctx.params;
    const entity = await strapi.services.room.find({
      userId: userId,
    });
    return sanitizeEntity(entity, { model: strapi.models.room });
  },
  async findVendorRoom(ctx) {
    const { vendorId } = ctx.params;
    const entity = await strapi.services.room.find({
      vendorId: vendorId,
    });
    return sanitizeEntity(entity, { model: strapi.models.room });
  },
};
