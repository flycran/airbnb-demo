import { getHomeGoodPriceData, ResType3 } from '@/api/modules/home'
import CardList from '@/views/home/components/MainView/components/CardList/CardList'
import Paragraph from '@/views/home/components/MainView/components/Paragraph/Paragraph'
import React, { memo, useEffect, useState } from 'react'

const CostPerformance = memo(() => {
  const [ res, setRes ] = useState({} as Partial<ResType3>)

  const getRes = async () => {
    const res = await getHomeGoodPriceData() as Partial<ResType3>
    setRes(res)
  }

  useEffect(() => {
    getRes()
  }, [])

  return (
    <Paragraph title={ res.title } more='显示更多'>
      <CardList list={ res.list } columnNumber={ 5 }/>
    </Paragraph>
  )
})

export default CostPerformance
