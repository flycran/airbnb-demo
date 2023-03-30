import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo, ReactNode } from 'react'

const style = css`
  position: relative;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const EqualRatio = memo((props: {
    ratio: number | string
    children?: ReactNode,
    className?: string, style?: any
  }) => {
    const cssN = css`
      padding: ${ props.ratio }% 0 0;
    `

    return (
      <div className={ classNames(style, cssN, props.className) } style={ props.style }>
        <div>
          {
            props.children
          }
        </div>
      </div>
    )
  },
)

export default EqualRatio
