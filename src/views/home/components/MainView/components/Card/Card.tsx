import { DestInfo } from '@/api/modules/home'
import { css } from '@emotion/css'
import { Rate } from 'antd'
import classNames from 'classnames'
import EqualRatio from 'components/EqualRatio/EqualRatio'
import { memo } from 'react'

const style = css`
  display: flex;
  flex-direction: column;

  .cover {
    border-radius: 3px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0px 5px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(118, 118, 118);
  }

  .name {
    font-size: 16px;
    font-weight: bold;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: var(--p-text);

    .rate {
      font-size: 12px;
      color: rgb(0, 132, 137);
      transform: translateY(-1.5px);
      margin-right: 6px;

      .ant-rate-star {
        margin-inline-end: 0;
      }
    }
  }
`

const Card = memo((props: { info: DestInfo; className?: string }) => {
  const { info } = props

  return (
    <div className={ classNames(style, props.className) }>
      <EqualRatio ratio="66.66" className="cover">
        <img src={ info.picture_url }/>
      </EqualRatio>
      <div className="desc">
        {
          info.verify_info?.messages.join(' · ')
        }
      </div>
      <div className="name mle">
        { info.name }
      </div>
      <div className="price">
        { info.price_format }/晚
      </div>
      <div className="bottom">
        <Rate defaultValue={ info.star_rating } className="rate" allowHalf disabled/>
        <div>
          { info.reviews_count }
          { info.bottom_info && ' · ' + info.bottom_info?.content }
        </div>
      </div>
    </div>
  )
})

export default Card
