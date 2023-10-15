import { blue, cyan, green, volcano } from '@ant-design/colors'
import { Flex, Typography } from 'antd'
import React from 'react'

function News() {
  return (
    <>
    <div style={{ height: '625px', width: '100%', position: 'relative', borderBottomRightRadius: '10px', 
            backgroundColor: blue[1]
        }}
    >
        <Flex
            style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', 
                padding: '6px',
            }}
            vertical={true}
        >
            <Typography 
                style={{ fontSize: 22, fontWeight: 'bold', height: '45px', width: '100%',
                    marginTop: '10px', marginBottom: '10px', borderBottom: '1px solid black', 
                }}
            >
                News
            </Typography>
        </Flex>
    </div>
    </>
  )
}

export default News