import { UserOutlined } from '@ant-design/icons'
import { Avatar, Flex, Image, Typography } from 'antd'
import React from 'react'

// backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/simple background image.jpg"})`

function Header() {
  return (
    <div style={{ height: '250px', width: '100%', position: 'relative', borderTopLeftRadius: '10px' }}>
        <Flex
            style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
            <img alt={'User profile background'} src={'images/background-img1.jpg'} style={{ borderTopLeftRadius: '10px', width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* simple background image.jpg <Image src={'images/simple background image.jpg'} width={'100%'} height={'100%'} style={{ borderRadius: '10px' }}/> */}
            {/* <Typography>This is the header</Typography> */}
            <Flex 
                style={{ position: 'absolute', width: '100%', height: '50%', 
                    backgroundColor: 'none', bottom: 0, justifyContent: 'space-between', alignItems: 'center'
                }} 
            >
                <Avatar size={150} 
                    icon={<UserOutlined />} 
                    src={'images/person photo 1.jpg'}
                    style={{ backgroundColor: 'lightgray', zIndex: 999, marginLeft: '60px', marginBottom: '45px' }}
                />
                <Flex style={{width: '50%', height: '75px', backgroundColor: 'rgba(0,0,0, 0.4)', marginTop: '35px', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography 
                        style={{ fontSize: '50px', color: 'white', fontWeight: 'bold', marginRight: '20px', zIndex: 999 }}
                    >
                        {'Grant Pennington'}
                    </Typography>
                </Flex>
                <div 
                    style={{ position: 'absolute', width: '100%', height: '72%', 
                        backgroundColor: 'rgba(255,235,235, 0.2)', bottom: 0,
                    }}
                />
                
            </Flex>
            
        </Flex>
    </div>
  )
}
//borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', 

export default Header