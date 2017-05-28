var Koa = require('koa');
var KoaRouter = require('koa-router');

// import koa from 'koa'
// import koaRouter from 'koa-router'

let app = new Koa()
let router = new KoaRouter()

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')

router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
});



// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    ctx.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})


//详情页  用户评论

const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function (ctx, next) {
    const params = ctx.params
    const id = params.id

    ctx.body = detailInfo
    console.log(ctx.body)
    
})

// 详情页  用户评论

const detailComent = require('./detail/comment')

router.get('/api/detail/comment/:page/:id', function (ctx, next) {
    ctx.body = detailComent
    console.log(ctx.body)
})


const orderList = require('./orderlist/orderList')
router.get('/api/orderlist/:username',function(ctx,next){
    ctx.body = orderList
    console.log(orderList)
})

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(8080);
console.log('成功')