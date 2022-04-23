const express = require("express");
const router = express.Router();
//For auth
const auth = require("../middleware/auth");

// Require our controllers.
const indexController = require("../controllers/books/index");
const listController = require("../controllers/books/list");
const createGetController = require("../controllers/books/create-get");
const createPostController = require("../controllers/books/create-post");
const deleteGetController = require("../controllers/books/delete-get");
const deletePostController = require("../controllers/books/delete-post");
const updateGetController = require("../controllers/books/update-get");
const updatePostController = require("../controllers/books/update-post");

// GET request for list of all Book.
router.get("/", auth, listController);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/create", auth, createGetController);

// POST request for creating Book.
router.post("/create", auth, createPostController);

// GET request to delete Book.
router.get("/:id/delete", auth, deleteGetController);

// GET request to delete Book List.
router.get("/", auth, deleteGetController);

// POST request to delete Book.
router.post("/:id/delete", auth,  deletePostController);

// POST request to delete Book List.
router.post("/", auth, deletePostController);

// GET request to update Book.
router.get("/:id/update", auth, updateGetController);

// POST request to update Book.
router.post("/:id/update", auth, updatePostController);

// GET request for one Book.
router.get("/:id", indexController);

module.exports = router;
