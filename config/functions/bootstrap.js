"use strict";
const {
  userExists,
  getUsersInRoom,
  userUpdateRoom,
  userDisconnect,
} = require("./utils/database");

module.exports = () => {
  var io = require("socket.io")(strapi.server, {
    cors: {
      origin: "https://bikinevent.id",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });
  let users = [];
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };
  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };
  io.on("connection", function (socket) {
    console.log("Connection established");
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
    });
    socket.on("sendMessage", ({ sender, receiver, text }) => {
      const user = getUser(receiver);
      console.log(user);
      if (user) {
        io.to(user.socketId).emit("getMessage", {
          sender,
          text,
        });
      }
    });
    socket.on("disconnect", () => {
      console.log("user disconnect");
      removeUser(socket.id);
    });
  });
};
