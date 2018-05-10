const Router = require('koa-router');
let router = new Router();
const PersonCenterController = require('../controllers/PersonCenterController');
let personCenterController = new PersonCenterController();
router.post('/300003',(ctx, next) => {
	personCenterController.getAssetsInfo(ctx);
});
// 当日成交
router.get('/300011',(ctx, next) => {
	personCenterController.getDayTraded(ctx);
});
// 当日委托
router.get('/300012',(ctx, next) => {
	personCenterController.getDayEntrust(ctx);
});
// 历史成交
router.get('/300013',(ctx, next) => {
	personCenterController.getHistoryTraded(ctx);
});
module.exports = router;