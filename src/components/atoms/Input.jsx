import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import tw from "tailwind-styled-components"

const InputWrapStyle = tw.div`
flex
items-center
border-2
px-2
border-slate-200
rounded-lg
overflow-hidden
`

const InputWrap = ({ children }) => {
    return (
        <InputWrapStyle>
            <AiOutlineSearch color='#fff' size='24' />
            {children}
        </InputWrapStyle>
    )
}

export default InputWrap