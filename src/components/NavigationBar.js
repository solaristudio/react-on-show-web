import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import HomeComp from './pages/Home'
import Docs from './pages/Docs'
import QuickStart from './pages/QuickStart'
import { Zap, Home, Book } from 'react-feather'
import './components.css'

NavigationBar.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.element.isRequired,
}

function NavigationBar(props) {
    const getComponentName = useCallback(() => {
        return props.currentPage.type.name
    }, [props.currentPage])
    const setComponent = function (component, name) {
        if (getComponentName() !== name) {
            props.setCurrentPage(component)
        }
    }
    const menus = [
        {
            content: (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Home />
                    &nbsp;Home
                </div>
            ),
            handler() {
                setComponent(<HomeComp />, 'Home')
            },
        },
        {
            content: (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Zap />
                    &nbsp;Quick Start
                </div>
            ),
            handler() {
                setComponent(<QuickStart />, 'Quick Start')
            },
        },
        {
            content: (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Book />
                    &nbsp;Docs
                </div>
            ),
            handler() {
                setComponent(<Docs />, 'Docs')
            },
        },
    ]
    return (
        <div className={'NavigationBar'}>
            {menus.map((menu, index) => {
                return (
                    <div
                        className={'link anim'}
                        key={index}
                        onClick={menu.handler}>
                        {menu.content}
                    </div>
                )
            })}
        </div>
    )
}

export default NavigationBar
