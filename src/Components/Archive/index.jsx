import React from 'react'
import { Button, Col, Row } from 'antd'
import { BiArchiveIn } from 'react-icons/bi'

const Index = ({ count }) => {
    return (
        <Row width='100%' align='middle' style={{ height: '45px' }}>
            <Col span={20}>
                <Button type='text' size='large' block style={{ textAlign: 'left' }}
                    icon={<BiArchiveIn style={{ marginRight: 20, color: '#00A783' }} />}>Archived</Button>
            </Col>
            <Col style={{ textAlign: 'center' }} span={4}>
                {count}
            </Col>
        </Row>
    )
}

export default Index