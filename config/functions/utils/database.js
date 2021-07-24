async function findUser(username, room) {
  try {
    const userExists = await strapi
      .query("user", "users-permissions")
      .find({ username, room });
    return userExists;
  } catch (err) {
    console.log("error while fetching", err);
  }
}
async function createUser({
  username,
  email,
  room,
  status,
  socketid,
  password,
}) {
  try {
    const user = await strapi.query("user", "users-permissions").create({
      username,
      email,
      password,
      room,
      status,
      socketid,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function userExists(id) {
  try {
    const user = strapi.query("user", "users-permissions").findOne({ id: id });
    return user;
  } catch (err) {
    console.log("Error occured when fetching user", err);
  }
}

async function userUpdateRoom({ username, room, status, socketid }) {
  try {
    const updateUser = await strapi.query("user", "users-permissions").update(
      { username: username },
      {
        room,
        status,
        socketid,
      }
    );
    const user = await strapi
      .query("user", "users-permissions")
      .findOne({ username: username });

    return user;
  } catch (err) {
    console.log("Error occured when fetching user", err);
  }
}

async function userDisconnect({ room, status, socketid }) {
  try {
    const updateUser = await strapi.query("user", "users-permissions").update(
      { socketid: socketid },
      {
        room,
        status,
        socketid,
      }
    );
    const user = await strapi
      .query("user", "users-permissions")
      .findOne({ socketid: socketid });
    return user;
  } catch (err) {
    console.log("Error occured when fetching user", err);
  }
}

async function getUsersInRoom(room) {
  try {
    const usersInRoom = await strapi
      .query("user", "users-permissions")
      .find({ room });
    return usersInRoom;
  } catch (err) {
    console.log("Error.Try again!", err);
  }
}

async function deleteUser(socketid) {
  try {
    const user = await strapi
      .query("user", "users-permissions")
      .delete({ socketid: socketid });
    return user;
  } catch (err) {
    console.log("Error while deleting the User", err);
  }
}

module.exports = {
  findUser,
  createUser,
  userExists,
  getUsersInRoom,
  deleteUser,
  userUpdateRoom,
  userDisconnect,
};
