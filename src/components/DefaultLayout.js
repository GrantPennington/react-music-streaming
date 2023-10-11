import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, HeartOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { AudioPlayer } from './AudioPlayer';
import { AudioCard } from './AudioCard';
import { database, firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { set, ref, get, child, onValue } from 'firebase/database';
const { Header, Content, Sider } = Layout;
const items1 = [{ id: '1', label: 'Home' }, { id: '2', label: 'Feed' }, { id: '3', label: 'Favorites' }].map((key) => ({
  key: key.id,
  label: `${key.label}`,
}));

const items2 = [{ icon: HeartOutlined, label: 'Favorites' }, { icon: FolderOpenOutlined, label: 'Playlists' }].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `${key}`,
    icon: React.createElement(icon.icon),
    label: `${icon.label}`,
    children: new Array(2).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const cardDetails = [
    {
        id: 1,
        title: 'Song #1',
        path: '/audio/audio1.wav',
        artist: 'Grant Pennington',
        genre: 'Hip-hop/Rap',
        key: 'A# minor',
        bpm: '116',
        tags: ['drake', 'che ecru', 'partynextdoor'],
    },
    {
        id: 2,
        title: 'Song #2',
        path: '/audio/audio2.wav',
        artist: 'Grant Pennington',
        genre: 'RnB',
        key: 'F major',
        bpm: '146',
        tags: ['che ecru', 'frvrfriday'],
    },
]

const DefaultLayout = ({ children }) => {
    const [songs, setSongs] = useState(null)

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleAddTestData = async () => {
        set(ref(database, 'songs/' + 'Pour It'), {
            id: 2,
            title: 'Pour It',
            path: 'gs://grant-pennington-music.appspot.com/Pour it(Edit).wav',
            artist: 'Grant Pennington',
            genre: 'Hip-hop/Rap',
            key: 'F minor',
            bpm: '136',
            tags: ['frvrfriday', 'partynextdoor'],
        })
    }

    useEffect(() => {
        // const dbRef = ref(database)
        // get(child(dbRef, `songs/`)).then(() )
        let temp = []
        const songsRef = ref(database, 'songs/');
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val();
            console.log('DATA: ',data)
            Object.keys(data).map((song) => {
                temp.push(data[song])
            })
            setSongs(temp)
        });
    }, [])

    return (
        <Layout>
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
            <Sider
            width={200}
            style={{
                background: colorBgContainer,
            }}
            >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                height: '100%',
                borderRight: 0,
                }}
                items={items2}
            />
            </Sider>
            <Layout
            style={{
                padding: '0 24px 24px',
            }}
            >
            <Breadcrumb
                style={{
                margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                }}
            >
                {/* <Button onClick={handleAddTestData}>Add Data</Button> */}
                {(!!songs) && songs.map((song) => (
                    <AudioCard key={song.id} details={song} />
                ))}
                {/* <AudioPlayer /> */}
            </Content>
            </Layout>
        </Layout>
        </Layout>
    );
};
export default DefaultLayout;
