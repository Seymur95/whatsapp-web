import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'antd'
import { BiFilter, BiSearchAlt2, BiLeftArrowAlt } from 'react-icons/bi'


const Index = () => {

    const [search, setSearch] = useState(false)

    return (
        <Row align='middle' style={{ height: '45px', paddingLeft: '10px' }}>
            <Col span={21}>
                <Input
                    onFocus={() => setSearch(true)}
                    onBlur={() => setSearch(false)}
                    size="large"
                    placeholder="Search or start new chat"
                    prefix={search ? <BiLeftArrowAlt /> : <BiSearchAlt2 />} />
            </Col>
            <Col span={3}>
                <Button type='text' size='large' icon={<BiFilter style={{ color: '#54656F' }} />}></Button>
            </Col>
        </Row>
    )
}

export default Index