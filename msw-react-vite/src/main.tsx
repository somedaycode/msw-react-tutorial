import React from 'react'
import ReactDOM from 'react-dom/client'
import { Users } from './Users'
import {worker} from './mocks/browser';


async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Users />
    </React.StrictMode>
  )
})
