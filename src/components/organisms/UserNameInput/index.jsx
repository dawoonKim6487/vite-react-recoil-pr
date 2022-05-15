import React from 'react';
import { Input, Button } from '@/components';
import { firstName, secondName } from '@/recoil';
import { InputStyle } from '@/styles'
import { useRecoilState } from 'recoil';

function UserNameInputs() {
    const [first, setFirst] = useRecoilState(firstName)
    const [second, setSecond] = useRecoilState(secondName)

    const onChageFirst = (e) => {
        setFirst(e.target.value)
    }

    const onChageSecond = (e) => {
        setSecond(e.target.value)
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
            <Button>
                <button className='text-cyan-500'>Search</button>
            </Button>
        </div>
    )
}

export default UserNameInputs;
