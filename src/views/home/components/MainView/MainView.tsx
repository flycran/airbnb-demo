import CostPerformance
  from '@/views/home/components/MainView/components/CostPerformance/CostPerformance'
import Marvellous from '@/views/home/components/MainView/components/Marvellous/Marvellous'
import Plus from '@/views/home/components/MainView/components/Plus/Plus'
import Popular from '@/views/home/components/MainView/components/Popular/Popular'
import PositiveReviews
  from '@/views/home/components/MainView/components/PositiveReviews/PositiveReviews'
import WantGo from '@/views/home/components/MainView/components/WantGo/WantGo'
import { memo } from 'react'

const MainView = memo(() => {
  return (
    <div className="w">
      <Popular/>
      <Marvellous/>
      <WantGo/>
      <CostPerformance/>
      <PositiveReviews/>
      <Plus/>
    </div>
  )
})

export default MainView
