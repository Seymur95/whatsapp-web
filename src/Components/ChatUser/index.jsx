import React, { useState } from 'react'
import { Profile } from '../../Assets/img'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Button, Col, Image, Row, Space, Typography } from 'antd'

const Index = ({ name, status, img }) => {

    const [src, setSrc] = useState(img)

    const onError = () => setSrc(Profile)

    return (
        <Row align='middle' width='100%'
            style={{
                height: '100%',
                backgroundColor: '#EEEEEE',
                cursor: 'pointer', paddingLeft: '10px', paddingRight: '3px'
            }}
        >
            <Col style={{ width: 50 }}>
                <Image
                    width={40}
                    preview={false}
                    style={{ borderRadius: '50%' }}
                    src={src}
                    onError={onError}
                />
            </Col>
            <Col style={{ width: 'calc(100% - 150px' }}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                    {name}
                </Typography.Title>
                <Typography.Text level={5} style={{ margin: 0 }}>
                    {status}
                </Typography.Text>
            </Col>
            <Col style={{ width: 100 }}>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button shape='circle' type='text' size='large' icon={<BiSearchAlt2 style={{ color: '#54656F' }} />}></Button>
                    <Button shape='circle' type='text' size='large' icon={<BiDotsVerticalRounded style={{ color: '#54656F' }} />}></Button>
                </Space>
            </Col>
        </Row>
    )
}

export default Index