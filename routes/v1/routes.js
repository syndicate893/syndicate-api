const express = require('express');
const router = express.Router();


const projectsRouter = require('./projects');
router.use('/projects', projectsRouter);

const usersRouter = require('./users');
router.use('/users', usersRouter);

const mintRouter = require('./mint');
router.use('/mint', mintRouter);

const collectionsRouter = require('./collections');
router.use('/collections', collectionsRouter);

module.exports = router;