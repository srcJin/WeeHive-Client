import _ from 'lodash'

// 将filter中的all转户为空字符
// make all in filter to empty character

export const formatFilter = <T>(filter): T => {
  const newFilter: T = _.cloneDeep(filter)
  for (const key in filter) {
    const value = filter[key]
    if (value === 'all') {
      newFilter[key] = ''
    }
  }
  return newFilter
}
