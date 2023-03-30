import { getHomePlusData, ResType3 } from '@/api/modules/home'
import Card from '@/views/home/components/MainView/components/Card/Card'
import Paragraph from '@/views/home/components/MainView/components/Paragraph/Paragraph'
import { css } from '@emotion/css'
import WalkingHorse from 'components/WalkingHorse/WalkingHorse'
import React, { memo, useEffect, useState } from 'react'

const style = css`
  .item {
    width: calc(20% - 16px);
    flex-shrink: 0;

    & + .item {
      margin-left: 16px;
    }
  }
`

const Plus = memo(() => {
  const [ res, setRes ] = useState({} as Partial<ResType3>)

  const getRes = async () => {
    const res = await getHomePlusData() as Partial<ResType3>
    setRes(res)
  }

  useEffect(() => {
    getRes()
  }, [])

  return (
    <Paragraph title={ res.title } subTitle={ res.subtitle } className={ style }>
      <WalkingHorse>
        {
          res.list && res.list.map(item => (
            <Card key={ item.id } info={ item } className="item"/>
          ))
        }
      </WalkingHorse>
    </Paragraph>
  )
})

export default Plus
