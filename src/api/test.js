import request from '@/utils/request'

export function list() {
  return request({
    url: '/itrial/locker/list',
    method: 'get'
  })
}
