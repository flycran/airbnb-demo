import { DestInfo } from '@/api/modules/home'
import Card from '@/views/home/components/MainView/components/Card/Card'
import { css } from '@emotion/css'
import classNames from 'classnames'
import React, { memo } from 'react'

const style = css`
  display: grid;
  gap: 16px;
`

const CardList = memo((props: { list?: DestInfo[]; columnNumber?: number | string; className?: string }) => {
  return (
    <div className={ classNames('card-list', style, props.className) }
         style={ { gridTemplateColumns: `repeat(${ props.columnNumber || 3 }, 1fr)` } }>
      {
        props.list && props.list.map(item => (
          <Card key={ item.id } info={ item }/>
        ))
      }
    </div>
  )
})

export default CardList
