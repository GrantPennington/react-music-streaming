import { Divider, Flex, Typography } from 'antd'
import React from 'react'
import YoutubeFrame from '../YoutubeFrame'
import YoutubeCard from '../YoutubeCard'
import { cyan, geekblue } from '@ant-design/colors'

function Discover() {
    const C1 = cyan[0]
    const GB5 = geekblue[1]
  return (
    <>
    <div style={{ backgroundColor: C1, 
            height: '750px', width: '100%', position: 'relative', borderBottomLeftRadius: '10px', 
            borderRight: `2px solid ${GB5}`, borderBottom: `2px solid ${GB5}`, borderLeft: `2px solid ${GB5}`, 
        }}
    >
        <Flex
            style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', 
                padding: '6px', backgroundColor: GB5,
            }}
            vertical={true}
        >
            <Typography 
                style={{ fontSize: 26, fontWeight: 'bold', height: '45px', width: '100%',
                    marginTop: '10px', marginBottom: '10px', marginLeft: '30px', textAlign: 'left',
                }}
            >
                Discography
            </Typography>
            <div style={{ width: '100%', borderBottom: '1px solid black', }}/>
            <Flex style={{
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center',marginTop: '25px',
                }}
                vertical={true}
            >
                <Typography style={{ fontSize: 22, marginTop: '20px',marginBottom: '10px'}}>
                    Latest Music Videos
                </Typography>
                <Divider />
                <div style={{ height: '530px', width: '100%', overflowY: 'scroll' }}>
                <YoutubeCard
                    frame={
                        <YoutubeFrame 
                            embedId="W22HZpDLrwo" 
                        />
                    }
                    videoTitle={'Emotions (Official Music Video)'} 
                    artist={'Grant Pennington'}
                    description={`
                        "Emotions" now available on all streaming platforms:
                        -
                        Spotify: https://open.spotify.com/artist/57n1g...
                        -
                        Apple Music: https://open.spotify.com/artist/57n1g...
                        -
                        Instagram: www.instagram.com/grant.pennington.beats`
                    }
                />
                <YoutubeCard
                    frame={
                        <YoutubeFrame 
                            embedId="Epe2jVy9hjs" 
                        />
                    }
                    videoTitle={'No Rush (Unreleased)'} 
                    artist={'Grant Pennington'}
                    description={`
                        Unreleased track titled No Rush by Grant Pennington.
                    `}
                />
                </div>
            </Flex>
        </Flex>
    </div>
    </>
  )
}
/* EMBED LINKS
    rokGy0huYEA -> lebron video (EXAMPLE)
    mU-GJ57ZDxQ -> PLEASEXANNY - Chase Atlantic
    W22HZpDLrwo -> Emotions - Grant Pennington
    Epe2jVy9hjs -> No Rush - Grant Pennington
*/

export default Discover