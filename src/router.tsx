import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import DashboardPage from './pages/Dashboard'
import NotFoundPage from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
