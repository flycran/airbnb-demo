import IconLogo from '@/assets/svg/icon_logo'
import HeaderMenu from '@/views/home/components/HeaderView/components/HeaderMenu/HeaderMenu'
import SearchBox from '@/views/home/components/HeaderView/components/SearchBox/SearchBox'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const style = css`
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: height 350ms ease;

  &.sh {
    height: 180px;
  }

  .dh {
    width: 100%;
    height: 80px;
  }

  .menu-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.switched {
    background: #fff;
    border-bottom: var(--p-border);

    .menu-btn:hover {
      background-color: rgb(245, 245, 245);
    }

    .menu-btn, .nav-title {
      color: inherit;
    }
  }

  .menu-btn, .nav-title {
    color: #fff;
  }


  .icon-box {
    margin-left: 24px;

    svg {
      color: var(--p-color);
    }
  }

  .left, .right {
    flex: 1;
  }

  .right > div {
    float: right;
  }

  .front-mask {
    position: absolute;
    width: 100%;
    height: 100px;
    background: inherit;
    left: 0;
    top: 79px;
  }
`

const HeaderView = memo(() => {
  const [ switched, setSwitched ] = useState(false)
  const [ recomed, setRecomed ] = useState(false)

  useEffect(() => {
    const ev = () => {
      const b = !(window.scrollY <= 0)
      setSwitched(b)
      setRecomed(b)
    }

    ev()

    window.addEventListener('scroll', ev)

    return () => {
      window.removeEventListener('scroll', ev)
    }
  }, [])

  const dis = !switched || recomed

  return (
    <header className={ classNames(style, { switched, sh: !dis }) }>
      <div className="dh flx-center">
        <div className="left">
          <div className="icon-box">
            <IconLogo/>
          </div>
        </div>
        <div className="middle">
          <SearchBox recomed={ recomed } setRecomed={ setRecomed }/>
        </div>
        <div className="right">
          <div>
            <HeaderMenu/>
          </div>
        </div>
      </div>
      { createPortal((
        <div className={ classNames('after-mask', { dis }) }
             onClick={ () => setRecomed(true) }></div>), document.body) }
    </header>
  )
})

export default HeaderView

