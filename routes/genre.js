const express = require('express');
const router = express.Router();


const genreGetCreate = require("../controllers/genre/create-get");
const genrePostCreate = require("../controllers/genre/create-post");
const genreGetDelete = require("../controllers/genre/delete-get");
const genrePostDelete = require("../controllers/genre/delete-post");
const genreGetUpdate = require("../controllers/genre/update-get");
const genrePostUpdate = require("../controllers/genre/update-post");
const genreGetDetail = require("../controllers/genre/detail-get");
const genreGetList = require("../controllers/genre/list-get");


/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/create', genreGetCreate);

// POST request for creating Genre.
router.post('/create', genrePostCreate);

// GET request to delete Genre.
router.get('/:id/delete', genreGetDelete);

// POST request to delete Genre.
router.post('/:id/delete', genrePostDelete);

// GET request to update Genre.
router.get('/:id/update', genreGetUpdate);

// POST request to update Genre.
router.post('/:id/update', genrePostUpdate);

// GET request for one Genre.
router.get('/:id', genreGetDetail);

// GET request for list of all Genre.
router.get('/', genreGetList);

module.exports = router;
