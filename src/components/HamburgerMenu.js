import React, {useCallback, useEffect, useRef, useState} from 'react'
import { Menu } from 'react-feather'
import './components.css'
import PropTypes from 'prop-types'
import HomeComp from './pages/Home'
import QuickStart from './pages/QuickStart'
import Docs from './pages/Docs'

HamburgerMenu.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.element.isRequired,
}

function HamburgerMenu(props) {
    const [isVisible, setVisible] = useState(false)
    const getComponentName = useCallback(() => {
        return props.currentPage.type.name
    }, [props.currentPage])
    const setComponent = function (component, name) {
        if (getComponentName() !== name) {
            props.setCurrentPage(component)
        }
    }
    const contentRef = useRef(null)
    const buttonRef = useRef(null)
    useEffect(() => {
        const targetElement = contentRef.current
        const handler = event => {
            const isClickInside = targetElement.contains(event.target)
            if (!isClickInside && event.target !== buttonRef.current) setVisible(false)
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }
    })
    return (
        <div ref={buttonRef} onClick={() => setVisible(!isVisible)} className={'HamburgerMenu'}>
            <div ref={contentRef} className={`content ${isVisible ? 'v' : 'notV'}`}>
                <div className={'anchor'} onClick={() => {
                    setComponent(<HomeComp />, 'Home')
                }}>Home</div>
                <div className={'verticalSmall'} />
                <div className={'anchor'} onClick={() => {
                    setComponent(<QuickStart />, 'Quick Start')
                }}>Quick Start</div>
                <div className={'verticalSmall'} />
                <div className={'anchor'} onClick={() => {
                    setComponent(<Docs />, 'Docs')
                }}>Docs</div>
            </div>
            <Menu />
        </div>
    )
}

export default HamburgerMenu
