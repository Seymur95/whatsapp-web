import React, { useState } from 'react'
import './style.css'
import { Button, Col, Row, Space, Typography } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { RiCheckDoubleFill, RiCheckFill } from 'react-icons/ri'

const Index = ({ status, message, time, user }) => {

  const [icon, setIcon] = useState(false)

  const show = () => setIcon(true)
  const hidden = () => setIcon(false)

  const Status = (status) => {
    switch (status) {
      case 1: return <RiCheckFill />
      case 2: return <RiCheckDoubleFill />
      case 3: return <RiCheckDoubleFill style={{ color: 'blue' }} />
      default:
    }
  }

  return (
    <>
      {
        user ?
          <Row align='end' className='MessageTextRight'
            onMouseOver={show}
            onMouseOut={hidden}
          >
            <Col>
              {icon && <Button size='large' type='text' shape='circle' icon={<SmileOutlined />} />}
            </Col >
            <Col className='text'>
              <Space direction='vertical' size='large'>
                <Typography.Text>{message}</Typography.Text>
                <Typography.Text italic>{time} {Status(status)}</Typography.Text>
              </Space>
            </Col>
          </Row >
          :
          <Row className='MessageTextLeft'
            onMouseOver={show}
            onMouseOut={hidden}
          >
            <Col className='text'>
              <Space direction='vertical' style={{ width: '100%' }} size='large'>
                <Typography.Text>{message}</Typography.Text>
                <Typography.Text italic style={{ float: 'right' }}>{time} {Status(status)}</Typography.Text>
              </Space>
            </Col>
            <Col>
              {icon && <Button size='large' type='text' shape='circle' icon={<SmileOutlined />} />}
            </Col >
          </Row>
      }
    </>
  )
}

export default Index