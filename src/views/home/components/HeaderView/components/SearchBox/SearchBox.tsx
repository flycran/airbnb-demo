import SearchInput
  from '@/views/home/components/HeaderView/components/SearchBox/components/SearchInput/SearchInput'
import SearchRecom
  from '@/views/home/components/HeaderView/components/SearchBox/components/SearchRecom/SearchRecom'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo } from 'react'
import { CSSTransition } from 'react-transition-group'

const timeout = 350

const style = css`
  position: relative;
  width: 300px;
  height: 48px;

  & > div {
    width: 300px;
    height: 48px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .input-enter-active {
    transition: all ${ timeout }ms;
    transform-origin: top;
  }

  .input-enter {
    transform: scale(1.5);
    opacity: 0;
  }

  .input-enter-active {
    opacity: 1;
    transform: scale(1);
  }

  .input-exit-active {
    opacity: 0;
  }

  .recom-enter-active, .recom-exit-active {
    transition: all ${ timeout }ms;
    transform-origin: top;
  }

  .recom-enter {
    transform: scale(0.2);
    opacity: 0;
  }

  .recom-enter-active {
    opacity: 1;
    transform: scale(1);
  }

  .recom-exit {
    transform: scale(1);
    opacity: 1;
  }

  .recom-exit-active {
    transform: scale(0.2);
    opacity: 0;
  }
`

const SearchBox = memo((props: { recomed?: boolean; setRecomed: Function }) => {
  const { recomed } = props

  return (
    <div className={ classNames(style, { recomed: recomed }) }>
      <CSSTransition in={ recomed } timeout={ timeout } classNames="input" unmountOnExit>
        <SearchInput onClick={ () => props.setRecomed(false) }/>
      </CSSTransition>
      <CSSTransition in={ !recomed } timeout={ timeout } classNames="recom" unmountOnExit>
        <SearchRecom/>
      </CSSTransition>
    </div>
  )
})

export default SearchBox
