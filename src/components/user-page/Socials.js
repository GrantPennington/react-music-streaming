import { geekblue } from '@ant-design/colors';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, RedditOutlined, TwitterOutlined } from '@ant-design/icons';
import { Divider, Flex, Space, Typography } from 'antd'
import React from 'react'

/* 
<TwitterOutlined />
<RedditOutlined />
<YahooOutlined />
<GithubOutlined />
<WhatsAppOutlined />
<FacebookOutlined />
<LinkedinOutlined />
<InstagramOutlined />
*/

const iconMap = {
    'twitter': <TwitterOutlined style={{ fontSize: '32px' }} />,
    'facebook': <FacebookOutlined style={{ fontSize: '32px' }} />,
    'instagram': <InstagramOutlined style={{ fontSize: '32px' }} />,
    'reddit': <RedditOutlined style={{ fontSize: '32px' }} />,
}

function Socials() {

    const iconLabels = Object.keys(iconMap).map((label, index) => {
        return {
            id: index,
            label: label,
            icon: iconMap[label],
        }
    })

    const SocialCard = ({ label, icon }) => (
        <>
        <Flex horizontal={true}
            style={{ width: '100%', backgroundColor: 'none', height: '55px', 
                justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px', 
                borderBottom: '1px dotted black',
            }}
        >
            <Flex style={{ borderRadius: '50%', border: '1px solid black', backgroundColor: 'none', width: '40px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                {icon}
            </Flex>
            <Typography style={{ fontSize: 18 }}>{'Grant Pennington'}</Typography>
        </Flex>
        </>
    );

  return (
    <div style={{ height: '375px', width: '100%', position: 'relative', backgroundColor: geekblue[4], borderTopRightRadius: '10px',  }}>
        <Flex
            style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', padding: '0px' }}
            vertical={true}
        >
            <Typography style={{ fontSize: 22, fontWeight: 'bold', height: '45px', width: '100%', marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid white', }}>Social Media</Typography>
            <div style={{ backgroundColor: geekblue[2], width: '100%', height: '100%' }}>
            <Space direction="vertical" style={{ width: '85%',marginTop: '15px' }} size={16}>
                {iconLabels.map((social) => (
                    <SocialCard key={social.id} label={social.label} icon={social.icon} />
                ))}
            </Space>
            </div>
            
        </Flex>
    </div>
  )
}

export default Socials