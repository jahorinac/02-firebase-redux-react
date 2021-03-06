import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './App.scss'

import { store } from './_helpers/store'
import { App } from './App'


ReactDOM.render(<Provider store={ store }>
                    <App />
                </Provider>,
                document.querySelector('#root'));