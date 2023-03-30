import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo, ReactNode } from 'react'

const style = css`
  margin-top: 30px;

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .sub-title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .more-box {
    display: flex;
    align-items: center;
    color: var(--p-color2);
    font-size: 17px;
    font-weight: 700;
    margin-top: 16px;

    .link {
      margin-right: 4px;
    }
  }
`

const Paragraph = memo((props: {
  title?: string;
  subTitle?: string;
  more?: string
  children?: ReactNode
  className?: string
}) => {
  const { title, subTitle, more } = props
  return (
    <div className={ classNames(style, props.className) }>
      <h2 className="title">
        { title }
      </h2>
      { subTitle && <h3 className="sub-title">{ subTitle }</h3> }
      { props.children }
      {
        more && (
          <h2 className="more-box">
            <a className="link">{ more }</a>
            <IconMoreArrow/>
          </h2>
        )
      }

    </div>
  )
})

export default Paragraph
