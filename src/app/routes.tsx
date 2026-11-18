import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const WelcomeScreen = React.lazy(() => import('./WelcomeScreen'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
  },
  {
    path: '/merchant',
    element: <div>Merchant Portal</div>,
  },
  {
    path: '/customer',
    element: <div>Customer Website</div>,
  },
])