const Router = require('koa-router');
const marketList = require('../socket/marketList');
var router = new Router();
/*
 * 获取轮播图片
 */
router.post('/loopImgs',(ctx,next)=>{
	var loopImgList = [{imgUrl : 'static/loopImg/15202178414401.jpg'},
		{imgUrl : 'static/loopImg/15202177548201.png'}]
	//ctx.set('Content-Type','application/json')
	ctx.body = loopImgList;
});
router.get('/siftMarketList',(ctx,next) => {
	let siftedList = [];
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
 * 获取广告图片
 */
router.get('/getBannerImgs',(ctx,next) => {
	let pageNum = ctx.query.pageNum;
	let pageSize = ctx.query.pageSize;
	let bannerImgList;
	if(pageNum == 1){
		bannerImgList = [
			{imgUrl : 'static/banner/1520217862577.jpg'},
			{imgUrl : 'static/banner/1520217876472.jpg'},
			{imgUrl : 'static/banner/1520217951926.jpg'}
		];			
	}else if(pageNum == 2){
		bannerImgList = [
			{imgUrl : 'static/banner/1520217964093.jpg'},
			{imgUrl : 'static/banner/1520218074940.jpg'},
			{imgUrl : 'static/banner/1520218086072.jpg'},
		];		
	}else{
		bannerImgList = [
			{imgUrl : 'static/banner/1520218116203.jpg'},
			{imgUrl : 'static/banner/1520218130256.jpg'}
		];		
	}
	
	ctx.body = bannerImgList;
});
/*
 * 获取头条新闻
 */
router.post('/getTopNews',(ctx,next) => {
	let topNewsList = [
		{
			title : '大胸200以上A2六合10（AB10002）',id : 1
		},
		{
			title : '大胸200以上A2六合10（AB10003）',id : 2
		},
		{
			title : '大胸200以上A2六合10（AB10004）',id : 3
		},
		{
			title : '大胸200以上A2六合10（AB10005）',id : 4
		},
		{
			title : '大胸200以上A2六合10（AB10001）',id : 5
		}
	];
	
	ctx.body = topNewsList;
});
/*
 * 获取新闻列表
 */
router.get('/getNewsList',(ctx, next) => {
	let pageNum = ctx.query.pageNum;
	let pageSize = ctx.query.pageSize;
	let newsList;
	if(pageNum == 1){
		newsList = [
			{id : '1',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '2',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '3',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
		];
	}else if(pageNum == 2){
		newsList = [
			{id : '4',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '5',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '6',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
		];
	}else if(pageNum == 3){
		newsList = [
			{id : '7',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '8',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '9',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
		];
	}else{
		newsList = [
			{id : '11',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			{id : '12',title : '抓住股票大涨了，赶紧购买吧！抓住机会，大赚一笔机会，大赚一笔！',releaseTime : '12-05 12:43'},
			
		];
	}
	
	ctx.body = newsList;
});
/*
 * 获取新闻详情
 */
router.get('/getNewsDetail',(ctx, next) => {
	let html = `<p>而与此相比，历届中央纪委的二次全会就显得意义更加重大，因为这是新一届党的全国代表大会之后，总书记第一次在全会上发表重要讲话，对新的一年乃至未来五年的纪检监察工作作出重大部署；新任中央纪委书记首次作工作报告，谋划新的一年乃至未来五年的纪检监察工作发力方向。</p>

　　				<p>对比十八届中央纪委二次全会和十九届中央纪委二次全会的公报，会发现有不少不同之处：</p>

　　				<p>首先，出席会议和列席会议的代表人数发生了变化。从出席代表看，十八大选举产生了130名中央纪委委员，因此二次全会应到人数为130人，实到129人，缺席了一人；而十九大选举产生了133名中央纪委委员，此次全会133人全部出席，无一人缺席。从上表可以发现，十八届中央纪委一共八次全会，竟无一次是应到的130人全部出席的；而本届已经召开的两次全会则都是悉数到齐，这从一个方面反映了中央纪委委员更加守纪律、讲规矩。

　　					从列席代表看，十八届二次全会列席人数为295人，而此次全会仅为177人，同比减少了100多人。据分析，这很有可能是因为十八届中央推行纪律检查体制改革后，对中纪委派驻机构进行了整合，派驻机构由原先的52个减少至47个，同时取销了派驻监察局（室）。而在改革前，派驻监察机构的负责人也是要列席中纪委全会的。此外，53家中管国有重要骨干企业和15家中管金融企业的党组（党委）纪检组（纪委）负责人也列席中纪委全会。随着中央企业改革，一些央企进行了重组兼并，如宝钢、武钢重组为宝武钢集团，纪检机构负责人数量相应减少，这也可能是列席人数减少的一个重要原因。

　　					其次，公报中关于总书记发表重要讲话的表述顺序有所调整。十八届中央纪委二次全会先介绍了全会议程和王岐山代表中央纪委常委会所作的工作报告，下一段才讲了总书记出席全会并发表重要讲话。而本次全会则是先介绍了总书记出席全会并发表重要讲话，然后下一段再介绍全会议程及赵乐际代表中纪委常委会会作的工作报告。</p>`;
	
	
	ctx.body = html;
});
router.options('*',(ctx,next) => {
	ctx.status = 200;
	ctx.set('Access-Control-Allow-Methods','POST');
	ctx.set('Access-Control-Allow-Origin','*');
	ctx.set('Access-Control-Allow-Headers','Content-Type');
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
module.exports = router;