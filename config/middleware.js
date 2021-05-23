module.exports = {
  load: {
    before: ["responseTime", "logger", "cors", "responses"],
    order: [
      "Define the middlewares' load order by putting their name in this array in the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    cors: {
      enabled: true,
      headers: "*",
    },
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 1000 * 1024 * 1024,
      },
    },
  },
};
