import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'antd'
import { BiSearchAlt2, BiLeftArrowAlt } from 'react-icons/bi'
import Users from '../../@json/users.json'
import { Archive, UserInfo } from '..'


const Index = ({ icon }) => {

    const [search, setSearch] = useState(false)

    const [filterList, setFilterList] = useState(Users)

    const filterBySearch = (e) => {
        const value = e.target.value

        let lists = Users
        lists = lists.filter(list => (
            list.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        ))

           value ? setFilterList(lists) : setFilterList(Users)
    }

    return (
        <>
            <Row align='middle' style={{ height: '45px', paddingLeft: '10px' }}>
                <Col span={21}>
                    <Input
                        onFocus={() => setSearch(true)}
                        onBlur={() => setSearch(false)}
                        onChange={filterBySearch}
                        size="large"
                        placeholder="Search or start new chat"
                        prefix={search ? <BiLeftArrowAlt size={20} /> : <BiSearchAlt2 size={20} />} />
                </Col>
                <Col span={3}>
                    {icon && <Button type='text' size='large' icon={icon} />}
                </Col>
            </Row>
            <Archive count={10} />
            {filterList.map((user) => (
                    <UserInfo key={user.id} name={user.name} text={user.text} img={user.img} time={user.time} />
            ))}
        </>
    )
}

export default Index