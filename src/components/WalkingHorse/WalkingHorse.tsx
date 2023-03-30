import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { css } from '@emotion/css'
import classNames from 'classnames'
import React, { memo, ReactNode, useEffect, useRef, useState } from 'react'

const style = css`
  position: relative;

  .ov {
    overflow: hidden;
    width: 100%;
  }

  .box {
    transition: 0.25s transform ease;
    transform: translateX(0);
    display: flex;
  }

  .to-left, .to-right {
    position: absolute;
    top: 50%;
    background: #fff;
    border-radius: 999px;
    width: 32px;
    height: 32px;
    z-index: 9;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0 2px 4px;
    border: var(--p-border);
  }

  .to-left {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .to-right {
    right: 0;
    transform: translate(50%, -50%);
  }
`

const WalkingHorse = memo((props: { children: ReactNode; className?: string }) => {
  const [ index, setIndex ] = useState(0)
  const [ offset, setOffset ] = useState(0)
  const [ isLast, setLast ] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   setOffset(0)
  //   setIndex(0)
  //   setLast(false)
  // }, [])

  const left = () => {
    const i = index - 1
    const ele = boxRef.current!.children[i] as HTMLElement
    setOffset(ele.offsetLeft)
    setIndex(i)
    setLast(false)
  }

  const right = () => {
    const i = index + 1
    const ele = boxRef.current!.children[i] as HTMLElement
    const off = ele.offsetLeft
    const maxOffset = boxRef.current!.scrollWidth - containerRef.current!.offsetWidth
    if(off >= maxOffset) {
      setOffset(maxOffset)
      setLast(true)
    } else {
      setOffset(off)
    }
    setIndex(i)
  }

  return (
    <div className={ classNames(style, props.className) } ref={ containerRef }>
      {
        !!index && (<div className="to-left flx-center" onClick={ left }>
          <IconArrowLeft width={ 16 } height={ 16 }/>
        </div>)
      }
      {
        !isLast && (<div className="to-right flx-center" onClick={ right }>
          <IconArrowRight width={ 16 } height={ 16 }/>
        </div>)
      }
      <div className="ov">
        <div className="box" ref={ boxRef } style={ { transform: `translateX(-${ offset }px)` } }>
          { props.children }
        </div>
      </div>
    </div>
  )
})

export default WalkingHorse
