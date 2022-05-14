import React from 'react';
import { Text, InputWrap } from '@/components';
import tw from 'tailwind-styled-components';

const Wrap = tw.div`
flex
flex-col
items-start
md:flex-row
md:items-center
w-full
gap-2
`

const Input = ({ children, name }) => {
    return (
        <Wrap>
            <div className='w-[100px]'>
                <Text size='2xl' color='text-slate-200'>{name}</Text>
            </div>
            <div className='w-full md:flex-1'>
                <InputWrap>{children}</InputWrap>
            </div>
        </Wrap>
    )

}

export default Input;