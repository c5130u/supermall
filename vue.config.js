module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: "@/assets",
                common: '@/common',
                components: '@/components',
                network: '@/network',
                views: '@/views',
            }
        }
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,//自动保存
    }
}