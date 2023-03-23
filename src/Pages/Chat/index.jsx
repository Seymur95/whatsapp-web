import React, { useState } from 'react'
import './style.css'
import { TbCircleDashed } from 'react-icons/tb'
import { RiMessage2Fill } from 'react-icons/ri'
import { BiDotsVerticalRounded, BiLeftArrowAlt, BiFilter } from 'react-icons/bi'
import { Button, Col, Drawer, Image, Layout, Popover, Row, Space } from 'antd';
import { Search, ChatUser, MessageInput, MessageText } from '../../Components'
const { Header, Footer, Sider, Content } = Layout;

const _content_ = ['New group', 'New community', 'Archived', 'Starred messages', 'Select chats', 'Settings', 'Log out']

const Index = () => {

  const [modal, setModal] = useState(false)

  const open = () => setModal(true)
  const onClose = () => setModal(false)

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider theme='light' width={450}>
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
              <Drawer
                headerStyle={{ backgroundColor: '#008069' }}
                bodyStyle={{ padding: '5px 0px' }}
                title={<h4 style={{ color: 'white', fontSize: 20 }}>New chat</h4>}
                placement='left'
                closeIcon={<BiLeftArrowAlt size={30} style={{ color: 'white' }} />}
                width={450}
                mask={false}
                onClose={onClose}
                open={modal}
              >
                <Search />

              </Drawer>
              <Space>
                <Button shape='circle' type='text' size='large' icon={<TbCircleDashed style={{ color: '#54656F' }} />} />
                <Button onClick={open} shape='circle' type='text' size='large' icon={<RiMessage2Fill style={{ color: '#54656F' }} />} />
                <Popover overlayStyle={{ width: 200 }} placement="bottomRight" trigger="click"
                  content={_content_.map((val, index) => (
                    <Button key={index} style={{ textAlign: 'left' }} block type='text'>{val}</Button>
                  ))}>
                  <Button shape='circle' type='text' size='large' icon={<BiDotsVerticalRounded style={{ color: '#54656F' }} />} />
                </Popover>
              </Space>
            </Col>
          </Row>
        </Header>


        <Content style={{ height: 'calc(100% - 109px)', overflow: 'auto', backgroundColor: '#FFFFFF' }}>

          <Search icon={<BiFilter style={{ color: '#54656F' }} />} />

        </Content>
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: '#F0F2F5', lineHeight: 0, paddingInline: 0, borderLeft: '1px solid #EEEEEE' }}>
          <ChatUser name='Ali Aliyev' status='online' img='https://picsum.photos/200' />
        </Header>

        <Content style={{ backgroundColor: '#EFEAE2', height: 'calc(100% - 144px)', padding: 20, overflow: 'auto' }}>
          <MessageText status={1} message='Hello' time='14:10' user={true} />
          <MessageText status={2} message='Where are you' time='18:25' user={false} />
          <MessageText status={3} message='I am at work' time='20:37' user={true} />
          <MessageText status={1} message='Hello' time='14:10' user={true} />
          <MessageText status={2} message='Where are you' time='18:25' user={false} />
          <MessageText status={3} message='I am at work' time='20:37' user={true} />
          <MessageText status={1} message='Hello' time='14:10' user={true} />
          <MessageText status={2} message='Where are you' time='18:25' user={false} />
          <MessageText status={3} message='I am at work' time='20:37' user={true} />
        </Content>

        <Footer style={{ backgroundColor: '#F0F2F5', padding: 20 }}>
          <MessageInput />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Index