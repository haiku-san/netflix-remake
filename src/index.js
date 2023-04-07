// Import des dépendances

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './assets/sass/index.scss'
import LoadingScreen from './pages/LoadingScreen'

const Header = lazy(() => import('./components/Header/index'))
const Home = lazy(() => import('./pages/Home'))
const Footer = lazy(() => import('./components/Footer/index'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />

                    <Route
                        element={<Navigate to="/page-not-found" />}
                        path="*"
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>
)
