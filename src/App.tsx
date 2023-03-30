import { RouterProvider } from 'react-router-dom'
import router from './router'
import './style/reset.scss'
import './style/common.scss'
import './style/var.scss'
import 'antd/dist/reset.css'

function App() {
  return (
    <RouterProvider router={ router }/>
  )
}

export default App
