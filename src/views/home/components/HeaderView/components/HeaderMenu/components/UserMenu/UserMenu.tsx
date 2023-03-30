import { css } from '@emotion/css'
import { memo } from 'react'

const style = css`
  position: absolute;
  top: 54px;
  right: 8px;
  width: 240px;
  background: #fff;
  border-radius: 10px;
  font-weight: bold;
  padding: 16px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px;
  z-index: 11;
  
  .item {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0px 16px;
    
    &:hover {
      background-color: rgb(245, 245, 245);
    }
  }

  .sep {
    margin: 8px 0;
    border-top: var(--p-border)
  }
`

const UserMenu = memo(() => {
  return (
    <ul className={ style }>
      <li className="item">注册</li>
      <li className="item">登录</li>
      <li className="sep"></li>
      <li className="item">出租房源</li>
      <li className="item">开展体验</li>
      <li className="item">帮助</li>
    </ul>
  )
})

export default UserMenu
