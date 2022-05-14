import React from 'react';
import { Input } from '@/components';
import { InputComponent } from '@/styles'


function UserNameInputs() {
    return (
        <div className='flex flex-col gap-3'>
            <Input name='First name'>
                <InputComponent
                    type="text"
                    placeholder='first name'
                />
            </Input>

            <Input name='Second name'>
                <InputComponent
                    type="text"
                    placeholder='Second name'
                />
            </Input>
        </div>
    )
}

export default UserNameInputs;
