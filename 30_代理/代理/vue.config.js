module.exports = {
    // 开启代理服务器：方式一
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器：方式二
    devServer: {
        proxy: {
            '/yaHu': { // 请求前缀
                target: 'http://localhost:5000',
                pathRewrite: { '^/yaHu': '' }, // 资源服务器接收代理服务器的api中过滤掉前缀
                ws: true, // 用于支持websocket
                changeOrigin: true //用于控制请求头host字段，true改为资源服务器，false改为请求服务器
            },
            '/huoHua': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/huoHua': '' },
                ws: true,
                changeOrigin: true
            }
        }
    }
}