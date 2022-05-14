import React from 'react';
import { Input } from '@/components';
import { firstName, secondName } from '@/recoil';
import { InputComponent } from '@/styles'
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
                <InputComponent
                    type="text"
                    placeholder='first name'
                    onChange={onChageFirst}
                    value={first}
                />
            </Input>
            <Input name='Second name'>
                <InputComponent
                    type="text"
                    placeholder='Second name'
                    onChange={onChageSecond}
                    value={second}
                />
            </Input>
        </div>
    )
}

export default UserNameInputs;
