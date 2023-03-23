import React, { useState } from 'react'
import { Profile } from '../../Assets/img'
import { DownOutlined } from '@ant-design/icons'
import { Button, Col, Image, Row, Space, Typography } from 'antd'


const Index = ({ name, text, img, time }) => {

    const [status, setStatus] = useState(false)
    const [src, setSrc] = useState(img)

    const onError = () => setSrc(Profile)

    const show = () => setStatus(true)
    const hidden = () => setStatus(false)

    return (
        <Row align='middle' width='100%'
            style={{
                borderBottom: '1px solid #EEEEEE',
                backgroundColor: status && '#EEEEEE',
                cursor: 'pointer', paddingLeft: '10px', paddingRight: '3px'
            }}
            onMouseOver={show}
            onMouseOut={hidden}
        >
            <Col span={3}>
                <Image
                    width={40}
                    preview={false}
                    style={{ borderRadius: '50%' }}
                    src={src}
                    onError={onError}
                />
            </Col>
            <Col span={16}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                    {name}
                </Typography.Title>
                <Typography.Text level={5} style={{ margin: 0 }}>
                    {text}
                </Typography.Text>
            </Col>
            <Col span={5}>
                <Space direction='vertical' style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography.Text level={5} style={{ margin: 0 }}>{time}</Typography.Text>
                    {status ?
                        <Button type='text' icon={<DownOutlined />} />
                        :
                        <Button type='link' style={{ color: 'transparent' }} />}
                </Space>
            </Col>
        </Row>
    )
}

export default Index