import React from 'react'
import { Button, Col, Row } from 'antd'
import { SmileOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons'
import Input from 'antd/es/input/Input'



const Index = () => {
    return (
        <Row>
            <Col style={{ width: 80 }}>
                <Button size='large' type='text' shape='circle' icon={<SmileOutlined />} />
                <Button size='large' type='text' shape='circle' icon={<PaperClipOutlined />} />
            </Col>
            <Col style={{ width: 'calc(100% - 130px)' }}>
                <Input style={{ border: 'none' }} size='large' placeholder='Type a message'></Input>
            </Col>
            <Col style={{ width: 50 }}>
                <Button size='large' type='text' shape='circle' icon={<AudioOutlined />} />
            </Col>
        </Row>
    )
}

export default Index