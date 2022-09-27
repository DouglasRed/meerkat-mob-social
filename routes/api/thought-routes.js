const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userId>
router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

// / api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
