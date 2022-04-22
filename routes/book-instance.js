const express = require('express');
const router = express.Router();

const bookInstanceGetCreate = require("../controllers/book-instance/create-get");
const bookInstancePostCreate = require("../controllers/book-instance/create-post");
const bookInstanceGetDelete = require("../controllers/book-instance/delete-get");
const bookInstancePostDelete = require("../controllers/book-instance/delete-post");
const bookInstanceGetUpdate = require("../controllers/book-instance/update-get");
const bookInstancePostUpdate = require("../controllers/book-instance/update-post");
const bookInstanceGetDetail = require("../controllers/book-instance/detail-get");
const bookInstanceGetList = require("../controllers/book-instance/list-get");

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/create', bookInstanceGetCreate);

// POST request for creating BookInstance.
router.post('/create', bookInstancePostCreate);

// GET request to delete BookInstance.
router.get('/:id/delete', bookInstanceGetDelete);

// POST request to delete BookInstance.
router.post('/:id/delete', bookInstancePostDelete);

// GET request to update BookInstance.
router.get('/:id/update', bookInstanceGetUpdate);

// POST request to update BookInstance.
router.post('/:id/update', bookInstancePostUpdate);

// GET request for one BookInstance.
router.get('/:id', bookInstanceGetDetail);

// GET request for list of all BookInstance.
router.get('/', bookInstanceGetList);

module.exports = router;
