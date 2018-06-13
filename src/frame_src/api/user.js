import request from '@/frame_src/utils/request'
export function fetchUserList(query) { // 查询用户
  return request({
    url: '/user/fetchUserList',
    method: 'get',
    params: query
  })
}
export function updateUserArticle(data) { // 修改用户信息-删除或者激活用户
  return request({
    url: '/user/updateUserArticle',
    method: 'get',
    params: data
  })
}
export function createUserArticle(data) { // 创建用户
  return request({
    url: '/user/createUserArticle',
    method: 'post',
    data
  })
}
export function updateUserData(data) { // 修改用户信息-
  return request({
    url: '/user/updateUserData',
    method: 'post',
    data
  })
}
export function updatePasswordData(data) { // 修改密码
  return request({
    url: '/user/updatePasswordData',
    method: 'get',
    params: data
  })
}
export function fetchUserRoleList(query) { // 根据查询带rolename的 用户信息
  return request({
    url: '/user/fetchUserRoleList',
    method: 'get',
    params: query
  })
}
export function fetchUserOrgList(query) { // 根据查询带orgid的 用户信息
  return request({
    url: '/user/fetchUserOrgList',
    method: 'get',
    params: query
  })
}