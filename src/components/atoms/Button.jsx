import React from 'react';
import tw from "tailwind-styled-components"

const ButtonWrap = tw.div`
flex
items-center
justify-center
border-2
p-2
cursor-pointer
bg-slate-100
rounded-lg
overflow-hidden
active:bg-slate-200
active:shadow-inner
`

const Button = ({ children, onClick }) => {
    return (
        <ButtonWrap onClick={onClick}>
            {children}
        </ButtonWrap>
    )
}

export default Button