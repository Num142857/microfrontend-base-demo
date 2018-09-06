
let getNoticeManagerApi = function (path) {
  return '/bidding/noticeManage/' + path
}

let getBidApi = function (path) {
  return '/bidding/workflowManage/bid/' + path
}

let getSealApi = function (path) {
  return '/bidding/fileSeals/' + path
}

const apiPath = {
  /**
   * 公告管理 NOTICE_MANAGER
   */
  NOTICE_MANAGER_QUERY_LIST: getNoticeManagerApi('queryList'),
  NOTICE_MANAGER_IS_TOP: getNoticeManagerApi('isTop'),
  NOTICE_MANAGER_CANCEL_TOP: getNoticeManagerApi('cancelTop'),
  NOTICE_MANAGER_ADD_NOTICE: getNoticeManagerApi('addNotice'),
  NOTICE_MANAGER_UPDATE_NOTICE: getNoticeManagerApi('updateNotice'),
  NOTICE_MANAGER_DELETE_TOP: getNoticeManagerApi('deleteTop'),
  NOTICE_MANAGER_NOTICE_DETAIL: getNoticeManagerApi('noticeDetail'),
  NOTICE_MANAGER_QUERY_SIGNED_LIST: getNoticeManagerApi('enList/queryList'),
  NOTICE_MANAGER_APPROVE_SIGNED_ITEM: getNoticeManagerApi('enList/Approve'),
  NOTICE_MANAGER_CHANGE_DISPLAY: getNoticeManagerApi('changeDisplay'),
  /**
   * 流程管理 WORKFLOW_MANAGER
   */
  WORKFLOW_MANAGER_QUERY_BID_LIST: getBidApi('bidInfoList'),
  WORKFLOW_MANAGER_ADD_BID_ITEM: getBidApi('bidInfoAdd'),
  WORKFLOW_MANAGER_EDIT_BID_ITEM: getBidApi('bidInfoEdit'),
  WORKFLOW_MANAGER_GET_ITEM_INFO: getBidApi('bidInfoView'),
  WORKFLOW_MANAGER_DELETE_ITEM: getBidApi('bidInfoDelete'),
  WORKFLOW_MANAGER_ADD_SEAL: getSealApi('add'),
  WORKFLOW_MANAGER_EDIT_SEAL: getSealApi('edit'),
  WORKFLOW_MANAGER_DELETE_SEAL: getSealApi('deleteById'),
  WORKFLOW_MANAGER_QUERY_SEALS: getSealApi('listAllSeals'),

  // 数据字典
  CITY_LIST: '/bidding/data/cityList',

  GET_PROJECT_LIST_ALL: '/bidding/workflowManage/ecm/getProjectListAll',
  SIGNUP_LIST_ALL: '/bidding/noticeManage/signUp/queryList',
  BID_INFO_LIST: '/bidding/workflowManage/bid/bidInfoList',
  SIGN_UP_APPROVE: '/bidding/noticeManage/signUp/approve',

  CHECK_LOGIN: '/bidding/sso/checkIsLogin.json',
  LOGOUT: '/bidding/sso/logout.json',
}

const progressObj = {
  /**
   * 公告管理 NOTICE_MANAGER
   */
  NOTICE_MANAGER_QUERY_LIST: 1,
  NOTICE_MANAGER_IS_TOP: 1,
  NOTICE_MANAGER_ADD_NOTICE: 1,
  NOTICE_MANAGER_UPDATE_NOTICE: 1,
  NOTICE_MANAGER_DELETE_TOP: 1,
  NOTICE_MANAGER_NOTICE_DETAIL: 1,
  NOTICE_MANAGER_QUERY_SIGNED_LIST: 1,
  NOTICE_MANAGER_APPROVE_SIGNED_ITEM: 1,

  /**
   * 流程管理 WORKFLOW_MANAGER
   */
  WORKFLOW_MANAGER_QUERY_BID_LIST: 1,
  WORKFLOW_MANAGER_ADD_BID_ITEM: 0,
  WORKFLOW_MANAGER_EDIT_BID_ITEM: 0,
  WORKFLOW_MANAGER_GET_ITEM_INFO: 0,
  WORKFLOW_MANAGER_DELETE_ITEM: 0,
  WORKFLOW_MANAGER_ADD_SEAL: 0,
  WORKFLOW_MANAGER_EDIT_SEAL: 0,
  WORKFLOW_MANAGER_DELETE_SEAL: 0,
  WORKFLOW_MANAGER_QUERY_SEALS: 0,

}

function getProgress() {
  let obj = {}
  Object.keys(progressObj).forEach(staticKey => {
    let progress = progressObj[staticKey]
    let url = apiPath[staticKey]

    if (url) {
      obj[url] = progress
    }
  })
  return obj
}

export default apiPath
export const apiPathProgress = getProgress()
