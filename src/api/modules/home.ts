import request from '..'

export interface ResType {
  dest_address: DestAddress[]
  dest_list: Record<string, DestInfo[]>
  title: string
  subtitle: string
  type: string
}

export interface ResType2 {
  list: City[]
  title: string
  subtitle: string
  type: string
}

export interface ResType3 {
  list: DestInfo[]
  title: string
  subtitle?: string
  type: string
}

export interface City {
  city: string
  image_url: string
  picture_url: string
  price:string
}

export interface DestAddress {
  name: string
  homes: string[]
}

export interface DestInfo {
  id: string
  image_url: string
  name: string
  picture_url: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  bottom_info?: BottomInfo
  verify_info?: VerifyInfo
}

export interface VerifyInfo {
  messages: string[]
  text_color: string
}

export interface BottomInfo {
  content: string
  content_color: string
  font_size: string
}

// 获取高性价比房
export const getHomeGoodPriceData = () => request.get({ url: '/home/goodprice' })

// 获取高分好评房
export const getHomeHighScoreData = () => request.get({ url: '/home/highscore' })

// 获取折扣房
export const getHomeDiscountData = () => request.get({ url: '/home/discount' })

// 获取推荐房/热门
export const getHomeHotData = () => request.get({ url: '/home/hotrecommenddest' })

// 获取你可能想去
export const getHomeLongforData = () => request.get({ url: '/home/longfor' })

// 获取Plus房源
export const getHomePlusData = () => request.get({ url: '/home/plus' })
