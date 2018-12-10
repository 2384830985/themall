// 商品的接口
import http from './http'

export function goodsList(res) { // 商品列表
    return http({
        url: '/page',
        method: 'post',
        params: res
    })
}

