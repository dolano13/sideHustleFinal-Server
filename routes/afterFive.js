const express = require("express");
const router = express.Router();
const Ideas = require("../models/Ideas");

/* GET home page */
router.get("/theIdea", (req, res, next) => {
  Ideas.find().then(allIdeas => {
    res.status(200).json(allIdeas);
  });
});

router.post("/after5", (req, res, next) => {
  console.log(req.body, 243532423453425);
  let { ideas, desc, url } = req.body;
  Ideas.create({ ideas, desc, url })
    .then(newIdea => {
      res.json({
        success: true,
        newIdea
      });
    })
    .catch(err => next(err));
});
router.post("/deleteIdea/:id", (req, res, next) => {
  Ideas.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
});

// router.get("/getPlan", (req, res, next) => {
//   Business.findById(req.user.businessPlan)
//     .then(thePlan => {
//       res.status(200).json(thePlan);
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.post("/add/businessModel", (req, res, next) => {
//   console.log("the req.body for the business plan");
//   Business.create(req.body)
//     .then(newPlan => {
//       req.user.businessPlan = newPlan._id;
//       req.user
//         .save()
//         .then(updatedUser => {
//           console.log(
//             "updated user after adding business plan ------------ ",
//             newPlan
//           );
//           res.status(200).json(newPlan);
//         })
//         .catch(err => res.status(400).json(err));
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.post("/update/businessModel/:planId", (req, res, next) => {
//   Business.findByIdAndUpdate(req.params.planId, req.body)
//     .then(updatedPlan => {
//       res.status(200).json(updatedPlan);
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.get("/getLists", (req, res, next) => {
//   Todo.find({ _id: { $in: req.user.todoList } })
//     .then(theTodoLists => {
//       res.status(200).json(theTodoLists);
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.post("/remove/todo/:todoId", (req, res, next) => {
//   Todo.findByIdAndDelete(req.params.todoId)
//     .then(() => {
//       res.status(200).send("Successfully removed todo list");
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.post("/add/todo", (req, res, next) => {
//   console.log("the info for the todo list >>>>>>>> ", req.body);
//   Todo.create(req.body)
//     .then(newTodo => {
//       req.user.todoList.push(newTodo._id);
//       console.log("newwwwwtodooo", newTodo);
//       req.user
//         .save()
//         .then(updatedUser => {
//           console.log(
//             "updated user after adding todo list >>>>>>>>>> ",
//             updatedUser
//           );
//           res.status(200).json(newTodo);
//         })
//         .catch(err => res.status(400).json(err));
//     })
//     .catch(err => res.status(400).json(err));
// });

// router.post("/update/todo/:todoId", (req, res, next) => {
//   Todo.findByIdAndUpdate(req.params.todoId, req.body)
//     .then(updatedTodo => {
//       res.status(200).json(updatedTodo);
//     })
//     .catch(err => res.status(400).json(err));
// });

module.exports = router;
