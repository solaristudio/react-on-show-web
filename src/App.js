import React, { useState } from 'react'
import './App.css'
import Headline from './components/Headline'
import Home from './components/pages/Home'
import NavigationBar from './components/NavigationBar'
import NpmBar from './components/NpmBar'
import Footer from './components/Footer'
import HamburgerMenu from './components/HamburgerMenu'

function App() {
    const [currentPage, setCurrentPage] = useState(<Home />)
    return (
        <>
            <div className={'App'}>
                <div className={'Body'}>
                    <div className={'vertical'} />
                    <Headline />
                    <HamburgerMenu
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <NpmBar />
                    <NavigationBar
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <div className={'verticalBig'} />
                    {currentPage}
                    <div className={'verticalBig'} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
