// Import des dépendances

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/index'
// import Footer from './components/Footer/index'
import './assets/sass/index.scss'
import Home from './pages/Home'
// import Provider from './utils/Provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Provider> */}
            <Header />
            <Routes>
                <Route element={<Home />} path="/" />

                <Route element={<Navigate to="/page-not-found" />} path="*" />
            </Routes>
            {/* <Footer /> */}
            {/* </Provider> */}
        </BrowserRouter>
    </React.StrictMode>
)
