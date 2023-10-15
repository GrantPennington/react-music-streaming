import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, HeartOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { AudioPlayer } from './AudioPlayer';
import { AudioCard } from './AudioCard';
import { database, firestore } from '../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { set, ref, get, child, onValue } from 'firebase/database';
import FileUpload from './FileUpload';
import Home from '../screens/Home';
import Upload from '../screens/Upload';
import Explore from '../screens/Explore';
const { Header, Content, Sider } = Layout;
const items1 = [{ id: '1', label: 'Home' }, { id: '2', label: 'Feed' }, { id: '3', label: 'Explore' }].map((key) => ({
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

const navMap = {
    'Home': <Upload />,
    'Feed': <Home />,
    'Explore': <Explore />,
}

const DefaultLayout = ({ children }) => {
    const [songs, setSongs] = useState(null)
    const [nav, setNav] = useState({ id: '1', label: 'Home' })

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // const handleAddTestData = async () => {
        // set(ref(database, 'songs/' + 'Pour It'), {
        //     id: 2,
        //     title: 'Pour It',
        //     path: 'gs://grant-pennington-music.appspot.com/Pour it(Edit).wav',
        //     artist: 'Grant Pennington',
        //     genre: 'Hip-hop/Rap',
        //     key: 'F minor',
        //     bpm: '136',
        //     tags: ['frvrfriday', 'partynextdoor'],
        // })
    // }

    useEffect(() => {
        // const dbRef = ref(database)
        // get(child(dbRef, `songs/`)).then(() )
        const getSongs = async () => {
            let temp = []
            const querySnapshot = await getDocs(collection(firestore, "songs"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                temp.push({ ...doc.data() })
            });
            setSongs(temp)
        }
        getSongs()
        // const songsRef = ref(database, 'songs/');
        // onValue(songsRef, (snapshot) => {
        //     const data = snapshot.val();
        //     console.log('DATA: ',data)
        //     Object.keys(data).map((song) => {
        //         temp.push(data[song])
        //     })
        //     setSongs(temp)
        // });
    }, [])

    const handleMenuNav = (item) => {
        if(!item){ return ; }
        items1.forEach((menuItem) => {
            if(menuItem.key===item.key){
                setNav(menuItem)
            }
        })
    }

    useEffect(() => {
        console.log('NAV: ',nav)
    }, [nav])

    return (
        <Layout>
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} onClick={(item) => handleMenuNav(item)}/>
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
                    padding: 18,
                    margin: 0,
                    minHeight: 280,
                    background: colorBgContainer,
                    width: '100%',
                    height: '80vh',
                    overflowY: 'scroll'
                }}
            >
                {/* <FileUpload songSize={songs?.length}/>
                {(!!songs) && songs.map((song) => (
                    <AudioCard key={song.id} details={song} />
                ))} */}
                {navMap[nav.label]}
            </Content>
            </Layout>
        </Layout>
        </Layout>
    );
};
export default DefaultLayout;
