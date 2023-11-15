import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './components/styles'
import { RecoilRoot } from 'recoil'
import ErrorToastLayout from './components/common/errorToast/ErrorToastLayout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <ErrorToastLayout />
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
