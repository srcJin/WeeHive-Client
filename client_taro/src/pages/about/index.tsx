import React from 'react'
import { View, Text } from '@tarojs/components'

import { techPops, platPops } from '@constants/about'
import { version } from '@constants/config'
import { copy } from '@utils'
import PopBtn from './components/PopBtn'
import './index.less'

const Wiki: React.FC<any> = () => {

  return (
    <View className='about'>
      <Text className='about-title'>
        About Page
      </Text>

      <View className='about-p'>
        <Text className='about-com'>About user</Text>
      </View>

      <View className='about-subTitle'>
        <Text className='about-com'>技术栈：</Text>
      </View>

      <View className='about-box'>
        {
          techPops.map((pop, index) => (
            <PopBtn
              key={pop.name}
              name={pop.name}
              content={pop.content}
              last={index === techPops.length - 1}
            />
          ))
        }
      </View>

      <View className='about-subTitle'>
        <Text className='about-com'>平台支持：</Text>
      </View>

      <View className='about-box'>
        {
          platPops.map((pop, index) => (
            <PopBtn
              key={pop.name}
              name={pop.name}
              content={pop.content}
              last={index === platPops.length - 1}
            />
          ))
        }
      </View>


      <View
        className='about-src about-src_first'
        onClick={() => copy('https://github.com/rick-and-morty-wiki')}
        hoverClass='about-p_active'
        hoverStyle={{ opacity: 0.6 }}
      >
        <Text className='about-src-text'>Github：</Text>
        <Text className='about-src-text about-src-text_a'>The Rick and Morty Toy Wiki</Text>
      </View>

      <View
        className='about-src'
        onClick={() => copy('https://rickandmortywiki.oss-cn-beijing.aliyuncs.com/RN%20wiki.apk')}
        hoverClass='about-p_active'
        hoverStyle={{ opacity: 0.6 }}
      >
        <Text className='about-src-text'>Android APK：</Text>
        <Text className='about-src-text about-src-text_a'>Download</Text>
      </View>

      <View
        className='about-src'
        onClick={() => copy('https://rnwiki.cavano.vip')}
        hoverClass='about-p_active'
        hoverStyle={{ opacity: 0.6 }}
      >
        <Text className='about-src-text'>H5：</Text>
        <Text className='about-src-text about-src-text_a'>Preview</Text>
      </View>

      <View
        className='about-src'
        onClick={() => copy('https://github.com/afuh/rick-and-morty-api')}
        hoverClass='about-p_active'
        hoverStyle={{ opacity: 0.6 }}
      >
        <Text className='about-src-text'>Inspired by：</Text>
        <Text className='about-src-text about-src-text_a'>rick-and-morty-api</Text>
      </View>

      <View className='about-src'>
        <Text className='about-src-text'>Current Version：{version}</Text>
      </View>

    </View>
  )
}

export default Wiki
