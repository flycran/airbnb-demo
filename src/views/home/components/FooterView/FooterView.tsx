import data from '@/assets/data/footer_data.json'
import { css } from '@emotion/css'
import { memo } from 'react'

const style = css`
  margin-top: 100px;

  .line {
    border-top: var(--p-border);
  }

  .footer-menu {
    display: flex;
    padding: 48px 0;

    ul {
      flex: 1;

      li.title {
        margin-bottom: 16px;
        font-weight: bold;
      }

      li.item {
        margin-top: 6px;
      }
    }
  }

  .statement {
    border-top: var(--p-border);
    padding: 20px 0;
    text-align: center;
  }
`

const FooterView = memo(() => {
  return (
    <div className={ style }>
      <div className="line"></div>
      <div className="w">
        <div className="footer-menu">
          {
            data.map(item => (
              <ul key={ item.name }>
                <li className="title"><h3>{ item.name }</h3></li>
                {
                  item.list.map(item => (
                    <li className="item" key={ item }><a className="link"
                                                         href="#">{ item }</a></li>
                  ))
                }
              </ul>
            ))
          }

        </div>
        <div className="statement">© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图
          · 全国旅游投诉渠道 12301
        </div>
      </div>
    </div>
  )
})

export default FooterView
