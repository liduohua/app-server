const Router = require('koa-router');
var router = new Router();
router.get('/siftMarketList',(ctx,next) => {
	let siftedList = [1234567890123];
	let siftCode = ctx.query.code;
	for(const {code,name} of marketList){
		if(code.indexOf(siftCode) >= 0){
			siftedList.push({
				code,
				name
			}); 
		}
	}
	ctx.body = siftedList;			
});

/*
 * 获取品牌和分类
 */
router.post('/400001',(ctx,next) => {
	

	const brands = ["全部","六和","圣农","新盛","和盛","一品农佳","中天","宇飞","冠卓","乾信","兴达","海克莱","迪利","中佳","飞佳","创润","亨利","德发","和顺","神润","真诚","高盛","金牧","赛星","其它"];
	const classify = [{
			classifyName: "全部",
			subClassify: ["全部"]
		},
		{
			classifyName : "鸡板块",
			subClassify : [
				"全部","去皮腿肉","单冻鸡大胸","单冻鸡胗","单冻琵琶腿","凤爪","鸡背",
				"鸡边腿","鸡脖架","鸡肠","鸡翅根",
				"鸡翅尖","鸡翅中","鸡排腿","鸡上腿肉",
				"鸡锁骨","鸡心","鸡油","鸡爪","老母鸡","毛胸","三黄土鸡","乇乇正肉",
				"西装鸡","红毛老母鸡","腺胃鸡胗","掌中宝",
			]
		},
		{
			classifyName : "鸭板块",
			subClassify : [
				"全部","白条鸭","半片鸭","带皮鸭胸","袋装鸭腿",
				"去皮鸭胸","西装鸭","鸭边腿","鸭脖","鸭肠","鸭翅根","鸭翅中","鸭二节翅",
				"鸭肝","鸭三节翅","鸭锁骨","鸭头","鸭腿","鸭心",
				"鸭胸肉卷","鸭掌","红茶鸭腿","鸭肫","鸭舌"
			]
		},
		{
			classifyName: "其它",
			subClassify: ["全部"]
	}];
	ctx.body = {
		brands,
		classify
	};
});

/*
 * 根据品牌和分类筛选代码
 */
router.get('/400002',(ctx,next) => {
	ctx.body = marketList
	
});
