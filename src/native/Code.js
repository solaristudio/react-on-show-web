import React from 'react'
import './Code.css'
import PropTypes from 'prop-types'

Code.propTypes = {
    content: PropTypes.element.isRequired
}

function Code(props) {
    return (
        <div className={'TextArea Code'}>
            {props.content}
        </div>
    )
}

export default Code
