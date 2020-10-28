import React from 'react'
import './pages.css'
import Code from '../../native/Code'

function Docs() {
    return (
        <div className={'Docs'}>
            <div className={'title header'}>API Reference</div>
            <div className={'verticalBig'} />
            <Code
                content={
                    <>
                        <span className={'italic'}>onShow </span>(element:{' '}
                        <span className={'bold'}>HTMLElement</span>, func:{' '}
                        <span className={'bold'}>Function</span>, __testSuite__:{' '}
                        <span className={'bold'}>Object</span>):
                        <span className={'bold italic'}> undefined</span>
                    </>
                }
            />
            <div className={'vertical'} />
            <div className={'content-text'}>
                Attaches given function to global scroll event listener. When
                the given elements y coordinate enters the display it triggers
                the function and removes the given function from the event
                listener. Takes a third parameter which is useful only for
                testing.
            </div>
            <div className={'verticalBig'} />
            <Code
                content={
                    <>
                        {'<'}
                        <span className={'italic'}>OnShow</span> handler:{' '}
                        <span className={'bold'}>Function</span>
                        {'>'}: <span className={'bold italic'}> JSX.Element</span>
                    </>
                }
            />
            <div className={'vertical'} />
            <div className={'content-text'}>
                A React component which wraps content and triggers handler when
                the content is shown on the display. Implemented with React
                Hooks.
            </div>
        </div>
    )
}

export default Docs
