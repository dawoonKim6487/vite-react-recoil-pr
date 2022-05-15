import React from 'react';
import tw from 'tailwind-styled-components';

const ListStyle = tw.div`
    basis-[32%]
    bg-white
    p-2
    rounded
`

function Lists({ children }) {
    return (
        <ListStyle>{children}</ListStyle>
    )
}

export default Lists;
