import React from 'react'
import ReactDOM from 'react-dom'
import { Users } from './Users'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(<Users />, document.getElementById('root'))
