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
        Community Page
      </Text>
      <View className='about-p'>
        <Text className='about-com'>Title</Text>
      </View>

      <View className='about-subTitle'>
        <Text className='about-com'>Subtitle</Text>
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

    </View>
  )
}

export default Wiki
