import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import { hoverBoxShadow } from '@/style'
import UserMenu
  from '@/views/home/components/HeaderView/components/HeaderMenu/components/UserMenu/UserMenu'
import { css } from '@emotion/css'
import { memo, useEffect, useState } from 'react'

const timeout = 200

const style = css`
  display: flex;
  padding-right: 16px;

  .menu-btn {
    padding: 12px 15px;
    transition: 0.2s background-color ease;
    cursor: pointer;
    border-radius: 999px;
    font-weight: bold;

    &:hover {
      background-color: rgb(245, 245, 245);
    }
  }

  .user {
    margin-left: 16px;
    margin-right: 8px;
    padding: 0 8px;
    background: #fff;
    position: relative;

    ${ hoverBoxShadow }
  }

  .menu-enter-active, .menu-exit-active {
    transition: all ${ timeout }ms;
    transform-origin: top;
  }

  .menu-enter {
    transform: scale(0.2);
    opacity: 0;
  }

  .menu-enter-active {
    opacity: 1;
    transform: scale(1);
  }

  .menu-exit {
    transform: scale(1);
    opacity: 1;
  }

  .menu-exit-active {
    transform: scale(0.2);
    opacity: 0;
  }
`

const HeaderMenu = memo(() => {
  const [ show, setShow ] = useState(false)

  const onShow = () => setShow(true)

  useEffect(() => {
    const ev = () => {
      setShow(false)
    }
    window.addEventListener('click', ev, true)
    return () => {
      window.removeEventListener('click', ev)
    }
  })

  return (
    <div className={ style }>
      <button className="menu-btn">登录</button>
      <button className="menu-btn">注册</button>
      <button className="menu-btn"><IconGlobal/></button>
      <div className="user flx-center" onClick={ onShow }>
        <IconMenu/>
        <span>&nbsp;&nbsp;</span>
        <IconAvatar/>
        {
          show && <UserMenu/>
        }
      </div>
    </div>
  )
})

export default HeaderMenu
