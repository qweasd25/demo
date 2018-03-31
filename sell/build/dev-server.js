//webpack入口文件
const express = require('express')
const webpack = require('webpack')
const config = require('../webpack.config')
//创建一个express实例
const app = express()
var appData = require('../data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
 apiRoutes = express.Router()

apiRoutes.get('seller',function (req,res) {
    res.json({
        erron: 0,
        data: seller
    })
  })

apiRoutes.get('goods',function (req,res) {
    res.json({
        erron: 0,
        data: goods
    })
  })

apiRoutes.get('ratings',function (req,res) {
    res.json({
        erron: 0,
        data: ratings
    })
  })

  app.use('/api', apiRoutes)

  //调用webpack并把配置传递过去
  var compiler = webpack(config)
  //使用 webpack-dev-middleware中间件
  var devMiddleware =require('webpack-dev-middleware')(compiler,{
      publicPath: config.output.publicPath,
      stats: {
          colors:true,
          chunk: false
      }
  })

  //注册中间件
  app.use(devMiddleware)

  //监听 8000端口，开启服务器
  // serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
})