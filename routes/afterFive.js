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

module.exports = router;
