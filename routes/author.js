const express = require("express");
const router = express.Router();

const authorGetCreate = require("../controllers/author/create-get");
const authorPostCreate = require("../controllers/author/create-post");
const authorGetDelete = require("../controllers/author/delete-get");
const authorPostDelete = require("../controllers/author/delete-post");
const authorGetUpdate = require("../controllers/author/update-get");
const authorPostUpdate = require("../controllers/author/update-post");
const authorGetDetail = require("../controllers/author/detail-get");
const authorGetList = require("../controllers/author/list-get");

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/create", authorGetCreate);

// POST request for creating Author.
router.post("/create", authorPostCreate);

// GET request to delete Author.
router.get("/:id/delete", authorGetDelete);

// POST request to delete Author
router.post("/:id/delete", authorPostDelete);

// GET request to update Author.
router.get("/:id/update", authorGetUpdate);

// POST request to update Author.
router.post("/:id/update", authorPostUpdate);

// GET request for one Author.
router.get("/:id", authorGetDetail);

// GET request for list of all Authors.
router.get("/", authorGetList);

module.exports = router;
