const express = require('express');
const refRoute = require('./ref.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/ref',
    route: refRoute,
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
