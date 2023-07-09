import Taro from '@tarojs/taro'

/* 
  复制内容到剪切板
 */
export const copy = (data: string, msg: string = '') => {
  Taro.setClipboardData({
    data: data,
    success: function () {
      Taro.showToast({
        title: msg || 'Copy Success',
        icon: 'success',
        duration: 1200
      })
    },
    fail: function () {
      Taro.showToast({
        title: 'Copy Failed！',
        icon: 'none',
        duration: 1200
      })
    }
  })
}
