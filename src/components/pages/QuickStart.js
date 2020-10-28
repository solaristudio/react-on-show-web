import React from 'react'
import Anchor from '../../native/Anchor'
import './pages.css'
import InlineTextArea from '../../native/InlineTextArea'
import TextArea from '../../native/TextArea'
import Gist from 'react-gist'
import Scrimba from '../../native/Scrimba'

function QuickStart() {
    return (
        <>
            <div className={'quickStart'}>
                <div className={'title header'}>How to Start?</div>
                <div className={'subtitle header'}>Installation</div>
                <div className={'content-text'}>
                    <InlineTextArea
                        text={'react-on-show'}
                        handler={() => {
                            window.open(
                                'https://www.npmjs.com/package/@solariss/react-on-show',
                                '_blank'
                            )
                        }}
                    />{' '}
                    is a library for enabling on-show event in React. You can
                    install the library via{' '}
                    <InlineTextArea
                        text={'NPM'}
                        handler={() => {
                            window.open('https://www.npmjs.com/', '_blank')
                        }}
                    />
                    , a package manager for Node, like below:
                </div>
                <div className={'vertical'} />
                <TextArea
                    style={{ padding: 10, fontSize: 24 }}
                    text={'npm i @solariss/react-on-show'}
                />
                <div className={'vertical'} />
                <div className={'subtitle header'}>Basics</div>
                <div className={'content-text'}>
                    You can use both function and component approach. For
                    functional approach you have to use{' '}
                    <InlineTextArea text={'onShow'} handler={() => {}} />:
                </div>
                <div className={'vertical'} />
                <div className={'verticalSmall'} />
                <Gist id={'f24f8100d934547cb9355a744b9d5e3c'} />
                <Scrimba link={'https://scrimba.com/scrim/cbq3r8AE'} />
                <div className={'vertical'} />
                <div className={'content-text'}>
                    Another way, which is much more agile and concise, is to use{' '}
                    <InlineTextArea
                        text={'OnShow'}
                        handler={() => {
                            window.open(
                                'https://www.npmjs.com/package/@solariss/react-on-show',
                                '_blank'
                            )
                        }}
                    />{' '}
                    component:
                </div>
                <div className={'vertical'} />
                <Gist id={'845e356e8d9c2b78e820cb30be09e862'} />
                <Scrimba link={'https://scrimba.com/scrim/crqwnGfM'} />
            </div>
        </>
    )
}

export default QuickStart
