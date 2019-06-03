const express = require("express");
const router = express.Router();
const Business = require("../models/BusinessPlan");
const Todo = require("../models/TodoList");

router.get("/getPlan", (req, res, next) => {
  Business.findById(req.user.businessPlan)
    .then(thePlan => {
      res.status(200).json(thePlan);
    })
    .catch(err => res.status(400).json(err));
});

router.post("/add/businessModel", (req, res, next) => {
  console.log("the req.body for the business plan");
  Business.create(req.body)
    .then(newPlan => {
      req.user.businessPlan = newPlan._id;
      req.user
        .save()
        .then(updatedUser => {
          console.log(
            "updated user after adding business plan ------------ ",
            newPlan
          );
          res.status(200).json(newPlan);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

router.post("/update/businessModel/:planId", (req, res, next) => {
  Business.findByIdAndUpdate(req.params.planId, req.body)
    .then(updatedPlan => {
      res.status(200).json(updatedPlan);
    })
    .catch(err => res.status(400).json(err));
});

router.get("/getLists", (req, res, next) => {
  Todo.find({ _id: { $in: req.user.todoList } })
    .then(theTodoLists => {
      res.status(200).json(theTodoLists);
    })
    .catch(err => res.status(400).json(err));
});

router.post("/remove/todo/:todoId", (req, res, next) => {
  Todo.findByIdAndDelete(req.params.todoId)
    .then(() => {
      res.status(200).send("Successfully removed todo list");
    })
    .catch(err => res.status(400).json(err));
});

// res.json({
//   success: true,
//   newTodo
// });

router.post("/add/todo", (req, res, next) => {
  // router.post("/dashboard", (req, res, next) => {
  console.log("the info for the todo list >>>>>>>> ", req.body);
  Todo.create(req.body)
    .then(newTodo => {
      console.log("newwwwwtodooo", newTodo);
      console.log(" ------ user ------- ", req);
      req.user.todoList.push(newTodo._id);
      req.user
        .save()
        .then(updatedUser => {
          console.log(
            "updated user after adding todo list >>>>>>>>>> ",
            updatedUser
          );
          res.status(200).json(newTodo);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

router.post("/update/todo/:todoId", (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.todoId, req.body)
    .then(updatedTodo => {
      res.status(200).json(updatedTodo);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
