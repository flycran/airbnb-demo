import IconSearchBar from '@/assets/svg/icon-search-bar'
import { hoverBoxShadow } from '@/style'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { memo, MouseEventHandler } from 'react'

const style = css`
  padding: 0 8px;
  box-sizing: border-box;

  ${ hoverBoxShadow }
  .search-text {
    font-weight: bold;
    padding-left: 10px;
  }

  .icon-search-box {
    width: 32px;
    height: 32px;
    color: #fff;
    background-color: var(--p-color);
    border-radius: 16px;
  }
`

const SearchInput = memo((props: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className={ classNames('flx-justify-between', style) } onClick={ props.onClick }>
          <span className="search-text">
            搜索房源和体验
          </span>
      <div className="icon-search-box flx-center">
        <IconSearchBar/>
      </div>
    </div>
  )
})

export default SearchInput
