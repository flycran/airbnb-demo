import { getHomeHotData, ResType } from '@/api/modules/home'
import AddressList from '@/views/home/components/MainView/components/AddressList/AddressList'
import CardList from '@/views/home/components/MainView/components/CardList/CardList'
import Paragraph from '@/views/home/components/MainView/components/Paragraph/Paragraph'
import React, { memo, useEffect, useState } from 'react'

const Marvellous = memo(() => {
  const [ res, setRes ] = useState({} as Partial<ResType>)
  const [ actived, setActived ] = useState('')

  const getRes = async () => {
    const res = await getHomeHotData() as Partial<ResType>
    setRes(res)
    setActived(res.dest_address![0]!.name)
  }

  useEffect(() => {
    getRes()
  }, [])

  return (
    <Paragraph title={ res.title } more={ `显示更多${ actived }房源` } subTitle={ res.subtitle }>
      <AddressList list={ res.dest_address } actived={ actived } setActived={ setActived }/>
      <CardList list={ res.dest_list && res.dest_list[actived] }/>
    </Paragraph>
  )
})

export default Marvellous
