import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Content from './Components/Content.jsx'


const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Content>
    <QueryClientProvider client={client}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>
  </Content>
  ,
)

