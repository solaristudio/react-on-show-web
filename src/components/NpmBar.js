import React, {useRef, useState} from 'react'
import { Package } from 'react-feather'
import './components.css'

function NpmBar() {
    const [svgColor, setSvgColor] = useState('#0496ff')
    const wrapperRef = useRef()
    const changeValues = () => {
        wrapperRef.current.style.backgroundColor = '#0496ff'
        setSvgColor('#fff')
    }
    const resetValues = () => {
        wrapperRef.current.style.backgroundColor = 'white'
        setSvgColor('#0496ff')
    }
    const openNPMPackageInNewWindow = () => {
        window.open('https://www.npmjs.com/package/@solariss/react-on-show', '_blank')
    }
    return (
        <div className={'NpmBar'}>
            <div
                onClick={openNPMPackageInNewWindow}
                ref={wrapperRef}
                onMouseEnter={changeValues}
                onMouseLeave={resetValues}
                className={'iconWrapper anim'}>
                <Package color={svgColor} size={32} />
            </div>
        </div>
    )
}

export default NpmBar
