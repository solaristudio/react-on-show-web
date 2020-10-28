import React from 'react'
import './pages.css'
import InlineTextArea from '../../native/InlineTextArea'
import IntroGif from '../../public/intro.gif'
import MacMockup from '../../native/MacMockup'

function Home() {
    return (
        <>
            <div className={'Home'}>
                <div className={'vertical'} />
                <MacMockup img={<img width={360} src={IntroGif} alt={'Intro Gif'} />} />
                <div className={'vertical'} />
                <div className={'verticalSmall'} />
                React is deprived of an event handler that triggers when target
                element is shown in the viewport. Thus{' '}
                <InlineTextArea
                    text={'we'}
                    handler={() => {
                        window.open(
                            'https://github.com/orgs/solaristudio/people',
                            '_blank'
                        )
                    }}
                />{' '}
                have created an npm library that provides both component and
                function for this purpose.
            </div>
        </>
    )
}

export default Home
