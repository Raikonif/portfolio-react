import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AxiosInterceptor } from './interceptor/axios.interceptors';

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
);
