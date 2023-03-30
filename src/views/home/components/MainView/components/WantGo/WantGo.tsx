import { getHomeLongforData, ResType2 } from '@/api/modules/home'
import Paragraph from '@/views/home/components/MainView/components/Paragraph/Paragraph'
import { css } from '@emotion/css'
import EqualRatio from 'components/EqualRatio/EqualRatio'
import WalkingHorse from 'components/WalkingHorse/WalkingHorse'
import React, { memo, useEffect, useState } from 'react'

const style = css`
  .city-list {
    display: flex;

    .item {
      flex-shrink: 0;
      width: calc(20% - 16px);
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .mask {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      }

      .info {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0 32px;
        color: rgb(255, 255, 255);
      }
      
      .name {
        font-size: 18px;
        font-weight: bold;
      }
      
      .price {
        font-size: 14px;
        margin-top: 5px;
      }

      & + .item {
        margin-left: 16px;
      }
    }
  }
`

const WantGo = memo(() => {
  const [ res, setRes ] = useState({} as Partial<ResType2>)

  const getRes = async () => {
    const res = await getHomeLongforData() as Partial<ResType2>
    setRes(res)
  }

  useEffect(() => {
    getRes()
  }, [])

  return (
    <Paragraph title={ res.title } subTitle={ res.subtitle } className={ style }>
      <WalkingHorse className="city-list">
        {
          res.list && res.list.map(item => (
            <div key={ item.city } className="item">
              <EqualRatio ratio="124.74">
                <img src={ item.picture_url }/>
                <div className='mask'></div>
                <div className="info">
                  <div className="name">成都</div>
                  <div className="price">均价 ¥181/晚</div>
                </div>
              </EqualRatio>
            </div>
          ))
        }
      </WalkingHorse>
    </Paragraph>
  )
})

export default WantGo
