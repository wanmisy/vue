/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseURL // http库所请求的网站名
let routerMode = 'hash';
let imgURL // 放置图片的路径
if (process.env.NODE_ENV === 'development') { // 开发环境
    baseURL = ''
} else {
    // 生产环境
    baseURL = ''
}

export {
    baseURL,
    routerMode,
    imgURL
}