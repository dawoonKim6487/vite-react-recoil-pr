import React, { useRef } from 'react';
import { RecoilRoot } from 'recoil';
import { UserNameInputs, UserList } from '@/components';
import axios from 'axios'

function Users() {
    const [list, setList] = React.useState([]);
    const id = useRef(0)

    const getList = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: [
                { id: 0, firstName: 'dawoon', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 1, firstName: 'dawoon1', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 2, firstName: 'dawoon2', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 3, firstName: 'dawoon3', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 4, firstName: 'dawoon4', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 5, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 6, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
                { id: 7, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
            ],
        }).then((res) => {
            setList(res.data.body)
            id.current = res.data.body.length

        })
    }

    const addData = (data) => {
        setList([...list, { ...data, id: id.current += 1 }])
    }

    React.useEffect(() => {
        getList()
    }, []);

    return (
        <RecoilRoot>
            <UserNameInputs addData={addData} />
            <UserList data={list} />
        </RecoilRoot>
    )
}

export default Users
