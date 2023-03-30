import { DestAddress } from '@/api/modules/home'
import { css } from '@emotion/css'
import classNames from 'classnames'
import WalkingHorse from 'components/WalkingHorse/WalkingHorse'
import React, { memo } from 'react'

const style = css`
  padding: 8px 0 16px;

  .scroll-box {
    & .item {
      flex-shrink: 0;
      padding: 14px 16px;
      margin-right: 16px;
      border: 0.5px solid rgb(216, 216, 216);
      border-radius: 3px;
      font-size: 17px;
      cursor: pointer;
      min-width: 120px;
      box-sizing: border-box;
      text-align: center;

      &.active {
        color: rgb(255, 255, 255);
        background-color: var(--p-color2);
      }
    }
  }
`

const AddressList = memo((props: { list?: DestAddress[]; className?: string; actived: string; setActived: (p: string) => void }) => {
  return (
    <div className={ classNames('address-list', style, props.className) }>
      <WalkingHorse className='scroll-box'>
        {
          props.list && props.list.map(item => (
            <div key={ item.name }
                 className={ classNames('item', { active: item.name === props.actived }) }
                 onClick={ () => props.setActived(item.name) }>
              { item.name }
            </div>
          ))
        }
      </WalkingHorse>
    </div>
  )
})

export default AddressList
