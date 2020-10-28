import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import './TextArea.css'

TextArea.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    handler: PropTypes.func
}

TextArea.defaultProps = {
    styles: {},
    handler: (text) => {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.value = text
        input.select()
        document.execCommand('copy')
        input.remove()
    }
}

function TextArea(props) {
    return (
        <>
            <div
                style={{ ...props.style }}
                onClick={() => props.handler(props.text)}
                className={'TextArea anim'}>
                {props.text}
            </div>
        </>
    )
}

export default TextArea
