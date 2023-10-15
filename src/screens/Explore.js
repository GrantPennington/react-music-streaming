import { Col, Flex, Row, Typography } from 'antd'
import React from 'react'
import Header from '../components/user-page/Header';
import Socials from '../components/user-page/Socials';
import News from '../components/user-page/News';
import Discover from '../components/user-page/Discover';

const boxStyle = {
    backgroundColor: 'blue',
    borderRadius: '0px',
    height: '48%',
}

function Explore() {

    const DisplayBox1 = ({ h }) => (
        <div style={{ height: h || '400px', width: '100%' }}>
            <Flex
                style={{ height: '100%', width: '100%', backgroundColor: 'none', justifyContent: 'center', alignItems: 'center' }}
            >
                <Typography>Hello there!</Typography>
            </Flex>
        </div>
    );

    return (
        <>
        <Row>
        <Col span={18} style={{ ...boxStyle, backgroundColor: 'none' }}>
            <Header />
            <Col span={24} style={{ ...boxStyle, backgroundColor: 'none' }}>
                <Discover />
            </Col>
        </Col>
        <Col span={6} style={{ ...boxStyle, backgroundColor: 'none' }}>
            <Socials />
            <Col span={24} style={{ ...boxStyle, backgroundColor: 'none' }}>
                <News  />
            </Col>
        </Col>
        
        </Row>
        </>
    )
}

/*
    <Flex style={{ width: '100%', height: '100%' }} vertical={true}>
*/

export default Explore