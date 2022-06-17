const express = require("express");

//
//    We create a router variable we will
//    add all OUR routes to!
//
const router = express.Router();

//
//    Our User model (mongoose) that allows us to
//    easily talk to the database.
//
const User = require("../models/user");

//
//    ALL our routes start with the 'router' variable
//    we created above.
//
//    After the 'router' variable, we have ONLY http verbs,
//    like get/post/delete etc.
//

// ===== GET ROUTES =====

router.get("/", async (req, res) => {
  //
  //    Here we use the mongoose find() function on the User
  //    model to get all the users from the database
  //
  const result = await User.find({});

  //
  //    Here we send back the data on the res(ponse) object.
  //
  res.send(result);
});

router.get("/init", async (req, res) => {
  //
  //    Let's delete any records that might be there first.
  //
  await User.deleteMany({});

  const steve = await User.create({
    name: "Steve",
    age: 21,
    email: "steve@coyotiv.com",
  });

  const armagan = await User.create({
    name: "Armagan",
    email: "armagan@coyotiv.com",
  });

  armagan.age = 30;

  //
  //    Mongoose/mongo give us a save() function!
  //
  await armagan.save();

  //
  //    Send a response back to the user.
  //
  res.sendStatus(200);
});

router.get("/id/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.find({ _id: id });
    res.send(user);
  } catch (e) {
    res.send(`Error: ${e.message}`);
  }
});

//
//    Get by email
//
router.get("/email/:email", async (req, res) => {
  const { email } = req.params;

  res.send(await User.find({ email }));
});

// ===== DELETE ROUTES =====

router.delete("/", async (req, res) => {
  res.send(await User.deleteMany({}));
});

router.delete("/id/:id", async (req, res) => {
  const { id } = req.params;

  res.send(await User.deleteOne({ _id: id }));
});

router.delete("/email/:email", async (req, res) => {
  const { email } = req.params;

  res.send(await User.deleteOne({ email }));
});

//
//    post === create
//
router.post("/", async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const { name, age, email } = req.body;

  const newUser = {
    name,
    age,
    email,
  };

  res.send(await User.create(newUser));
});

module.exports = router;
