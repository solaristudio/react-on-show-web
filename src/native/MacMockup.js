import React from 'react'
import PropTypes from 'prop-types'
import './MacMockup.css'

MacMockup.propTypes = {
    img: PropTypes.element.isRequired
}

function MacMockup(props) {
    return (
        <div className={'Mac'}>
            <div className={'bar'}>
                <div style={{
                    display: 'flex',
                }}>
                    <div className={'circle red m1'} />
                    <div className={'circle orange m1'}/>
                    <div className={'circle green m1'} />
                </div>
                <div className={'address'}>/react-on-show</div>
            </div>
            {props.img}
        </div>
    )
}

export default MacMockup
