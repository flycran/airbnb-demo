import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo, useMemo, useState } from 'react'

const data = [
  [
    {
      title: '城市',
      subTitle: '你想去哪个城市',
    },
    {
      title: '入住退房日期',
      subTitle: '请再日历中选择',
    },
    {
      title: '关键字',
      subTitle: '景点/住址/房源名',
    },
  ],
  [
    {
      title: '城市',
      subTitle: '你想去哪个城市',
    },
    {
      title: '日期',
      subTitle: '你想合适出发',
    },
  ],
]

const style = css`
  li {
    padding: 10px 16px;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    &.active::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
      height: 2px;
      background: currentColor;
      width: 64px;
    }
  }

  .absrec {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 850px;
    height: 66px;
    background: #fff;
    border-radius: 999px;
    display: flex;
    z-index: 12;
    border: var(--p-border);

    .item {
      position: relative;
      flex: 1;
      flex-direction: column;
      border-radius: 999px;
      transition: 0.2s background;

      &:hover {
        background: rgb(238, 238, 238);
      }

      h4 {
        font-weight: bold;
        margin-bottom: 6px;
      }

      & + .item::before {
        content: '';
        display: block;
        position: absolute;
        left: -0.5px;
        top: 50%;
        transform: translateY(-50%);
        height: 30px;
        border-left: var(--p-border);
      }
    }
  }
`

const SearchRecom = memo(() => {
  const [ actived, setActived ] = useState(false)
  const absrec = useMemo(() => actived ? data[0] : data[1], [ actived ])

  return (
    <div className={ style }>
      <ul className="flx-center">
        <li className={ classNames('nav-title', { active: !actived }) }
            onClick={ () => setActived(false) }>搜索房源
        </li>
        <li className={ classNames('nav-title', { active: actived }) }
            onClick={ () => setActived(true) }>搜索体验
        </li>
      </ul>
      <div className="absrec">
        {
          absrec.map(item => (
            <div className="item flx-center" key={ item.title }>
              <h4>
                { item.title }
              </h4>
              <div>
                { item.subTitle }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
})

export default SearchRecom
