import React from 'react'
import Anchor from '../native/Anchor'
import { Heart } from 'react-feather'
import './components.css'
import BluePlanet from '../public/planet_blue_icon.png'

function Footer() {
    return (
        <>
            <div className={'Footer'}>
                <div style={{ textAlign: 'left' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 8,
                        }}>
                        Powered By
                        <Anchor
                            margins={[0, 0, 0, 8]}
                            style={{
                                backgroundColor: 'white',
                                padding: 4,
                                borderRadius: 2
                            }}
                            link={'https://github.com/solaristudio'}
                            content={
                                <img
                                    className={'org'}
                                    width={18}
                                    src={BluePlanet}
                                    alt={'Planet'}
                                />
                            }
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        Made with{' '}
                        <Heart
                            style={{ marginLeft: 4, marginRight: 4 }}
                            size={18}
                            fill={'#fff'}
                        />
                        using &nbsp;
                        <div style={{ fontWeight: 'bold' }}>{'{ React }'}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
