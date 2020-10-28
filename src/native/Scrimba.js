import React from 'react'
import PropTypes from 'prop-types'
import {Play, PlayCircle} from 'react-feather'
import Anchor from './Anchor'
import './Scrimba.css'

Scrimba.propTypes = {
    link: PropTypes.string.isRequired,
}

function Scrimba(props) {
    return (
        <Anchor
            content={
                <div className={'Scrimba anim'}>
                    <PlayCircle color={'white'} /> &nbsp;Try on Scrimba
                </div>
            }
            link={props.link}
        />
    )
}

export default Scrimba
