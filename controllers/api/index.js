const router = require('express').Router();
const userRoutes = require('./userRoutes');
const PostRoutes = require('./PostRoutes');

router.use('/users', userRoutes);
router.use('/Posts', PostRoutes);

module.exports = router;
