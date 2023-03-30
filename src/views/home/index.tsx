import cover from '@/assets/img/cover_01.jpeg'
import FooterView from '@/views/home/components/FooterView/FooterView'
import MainView from '@/views/home/components/MainView/MainView'
import { css } from '@emotion/css'
import { memo } from 'react'
import HeaderView from './components/HeaderView/HeaderView'

const style = css`
  .home-bg-img {
    display: flex;
    justify-content: center;
    background: url("${ cover }") center center / cover;
    height: 529px;
  }
`

const HomeView = memo(() => {
  return (
    <div className={ style }>
      <HeaderView/>
      <div className="home-bg-img">
      </div>
      <MainView/>
      <FooterView/>
    </div>
  )
})

export default HomeView
