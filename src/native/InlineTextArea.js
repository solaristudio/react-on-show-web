import React from 'react'
import TextArea from './TextArea'
import PropTypes from 'prop-types'

InlineTextArea.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

function InlineTextArea(props) {
    return (
        <TextArea
            handler={props.handler}
            style={{
                paddingLeft: 4,
                paddingRight: 4,
                borderRadius: 2,
            }}
            text={props.text}
        />
    )
}

export default InlineTextArea
