import React from 'react'
import AppLayout from '../AppLayout/AppLayout'
import { Outlet } from 'react-router-dom'

export default function app() {
  return (
    <div>
    <AppLayout>
        <Outlet/>
    </AppLayout>
</div>
  )
}
