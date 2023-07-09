import React, { useState, useRef, useCallback, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { Pagination, Back, CustomScrollView, StatusBar, EpisodeCard } from "@components";
import { getEpisode } from '@service'
import { EpisodeType, PaginationType } from '@constants/types'
import { defaultEpisodes, defaultPagination } from '@constants/wiki'
import { scrollTop } from '@utils'

import './index.less'

const AllEpisode: React.FC<any> = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>(defaultEpisodes)
  const [pagination, setPagination] = useState<PaginationType>(defaultPagination)
  const [reqTrigger, setReqTrigger] = useState<boolean>(true)
  const ScrollViewRef = useRef() as React.MutableRefObject<any>

  // 触发请求
  const sendRequest = useCallback((
    pagination_: PaginationType,
  ) => {
    Taro.showLoading({
      title: '加载中',
      mask: true,
    })
    // 触发滚到顶部
    scrollTop(ScrollViewRef)
    return getEpisode.all({ page: pagination_.cur })
      .then(data => {
        const { info: { count, pages }, results } = data
        setEpisodes(results)
        Taro.hideLoading()
        if (pagination_.count === -1) {
          setPagination({
            count,
            pages,
            cur: 1,
          })
        }
      })
  }, [ScrollViewRef])

  // 控制发起请求
  useEffect(() => {
    if (reqTrigger) {
      sendRequest(pagination)
      setReqTrigger(false)
    }
  }, [reqTrigger, setReqTrigger, pagination, sendRequest])

  return (
    <View className='all-e' >
      <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent />
      <Back className='all-e-back' />

      <CustomScrollView ref={ScrollViewRef} >
        <View className='all-e-header'>
          <Text className='all-e-header-title'>集数：{pagination.count < 0 ? 0 : pagination.count}</Text>
        </View>

        <View className='all-e-content'>
          {
            episodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          }
        </View>
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          setReqTrigger={setReqTrigger}
        />
      </CustomScrollView>
    </View>
  )
}

export default AllEpisode
