const userActionsRouter = require('./userActions');
const personCenterRouter = require('./personCenterActions');
const newsActionRouter = require('./newsActions');
const advImgActionRouter = require('./advImgActions');
const marketActionRouter = require('./marketActions');
module.exports = [
	userActionsRouter,
	userActionsRouter,
	newsActionRouter,
	advImgActionRouter,
	marketActionRouter
];
