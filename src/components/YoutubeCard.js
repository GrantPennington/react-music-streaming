import { Flex, Typography } from 'antd'
import React from 'react'
import { blue, cyan, geekblue, purple } from '@ant-design/colors'

function YoutubeCard({ videoTitle, artist, description, frame }) {
    const B1 = blue[3]
    const C5 = cyan[5]
    const P3 = purple[3]
    return (
        <Flex 
            horizontal={true}
            style={{ width: '100%', height: '450px', 
                justifyContent: 'space-between', alignItems: 'center', backgroundColor: blue[1],
                borderRadius: '10px', paddingLeft: '10px', paddingRight: '15px', marginBottom: '50px', marginTop: '25px',
            }}
        >
            <Flex
                style={{ 
                    width: '30%',
                    height: '65%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '2px',
                    borderRadius: '10px', 
                    backgroundColor: '',
                    marginTop: '25px',
                }}
                vertical={true}
            >
                <Flex style={{ 
                        height: '40%',
                        width: '100%', 
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                <Typography
                    style={{
                        fontSize: 16,
                    }}
                >
                    {videoTitle || 'Music Video Title '}
                </Typography>
                </Flex>
                <Typography
                    style={{
                        fontSize: 16,
                        height: '10%',
                        width: '100%',
                        fontWeight: 'bold',
                        backgroundColor: purple[2],
                        borderBottom: '1px solid black',
                        marginBottom: '6px',
                    }}
                >
                    {artist || 'Grant Pennington'}
                </Typography>
                <Typography
                    style={{
                        fontSize: 14,
                        height: '100%',
                        width: '100%',
                        padding: '10px',
                        textAlign: 'left'
                    }}
                >
                    {description || 'This is the official music video for the brand new hit single, <insert song title> by Grant Pennington. '}
                </Typography>
            </Flex>
            <Flex
                style={{ 
                    width: '70%',
                }}
            >
                {frame}
            </Flex>
        </Flex>
    )
}

export default YoutubeCard