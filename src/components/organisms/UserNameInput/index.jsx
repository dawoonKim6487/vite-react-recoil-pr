import React, { useState } from 'react';
import { Input, Button } from '@/components';
import { InputStyle } from '@/styles'

function UserNameInputs({ addData }) {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [area, setArea] = useState('');

    const onChageFirst = e => {
        setFirst(e.target.value)
    }

    const onChageSecond = e => {
        setSecond(e.target.value)
    }

    const onChageArea = e => {
        setArea(e.target.value)
    }

    const AddList = (data) => {
        setFirst('')
        setSecond('')
        setArea('')
        addData(data)
    }

    return (
        <div className='flex flex-col gap-3'>
            <Input name='First name'>
                <InputStyle
                    type="text"
                    placeholder='first name'
                    onChange={onChageFirst}
                    value={first}
                />
            </Input>
            <Input name='Second name'>
                <InputStyle
                    type="text"
                    placeholder='Second name'
                    onChange={onChageSecond}
                    value={second}
                />
            </Input>
            <Input name='Area'>
                <InputStyle
                    type="text"
                    placeholder='Area'
                    onChange={onChageArea}
                    value={area}
                />
            </Input>
            <Button onClick={() => AddList({
                firstName: first,
                secondName: second,
                area: area
            })}>
                <span className='text-cyan-500'>Search</span>
            </Button>
        </div>
    )
}

export default UserNameInputs;
