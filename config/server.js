module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://bikinevent.id",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    url: "https://bikinevent.id/dashboard",
  },
  url: "/api",
});
