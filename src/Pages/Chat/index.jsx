import React from 'react'
import './style.css'
import Users from '../../@json/users.json'
import { TbCircleDashed } from 'react-icons/tb'
import { RiMessage2Fill } from 'react-icons/ri'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Button, Col, Image, Layout, Row, Space } from 'antd';
import { Archive, Search, UserInfo, ChatUser, MessageInput } from '../../Components'
const { Header, Footer, Sider, Content } = Layout;


const Index = () => {

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme='light' width={350}>
        <Header style={{ backgroundColor: '#F0F2F5', paddingInline: 0, paddingLeft: 10 }}>
          <Row width='100%' align='middle'>
            <Col span={8}>
              <Image
                width={40}
                preview={false}
                style={{ borderRadius: '50%' }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Col>
            <Col span={16} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Space>
                <Button shape='circle' type='text' size='large' icon={<TbCircleDashed style={{ color: '#54656F' }} />}></Button>
                <Button shape='circle' type='text' size='large' icon={<RiMessage2Fill style={{ color: '#54656F' }} />}></Button>
                <Button shape='circle' type='text' size='large' icon={<BiDotsVerticalRounded style={{ color: '#54656F' }} />}></Button>
              </Space>
            </Col>
          </Row>
        </Header>

        <Search />

        <Content style={{ height: 'calc(100% - 109px)', overflow: 'auto', backgroundColor: '##E2DAD7' }}>
          <Archive count={10} />
          {Users.map((value, index) => (
            <UserInfo key={index} name={value.name} text={value.text} img={value.img} time={value.time} />
          ))}
        </Content>
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: '#F0F2F5', lineHeight: 0, paddingInline: 5, borderLeft: '1px solid #EEEEEE' }}>
          <ChatUser name='Ali Aliyev' status='online' img='https://picsum.photos/200' />
        </Header>

        <Content style={{ backgroundColor: '##E2DAD7', height: 'calc(100% - 144px)' }}>Content</Content>

        <Footer style={{ backgroundColor: '#F0F2F5', padding: 20 }}>
          <MessageInput />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Index