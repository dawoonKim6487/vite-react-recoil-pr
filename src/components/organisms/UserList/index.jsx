import { List } from '@/components';
import React from 'react';
import tw from 'tailwind-styled-components';

const ListWrap = tw.ul`
    flex
    flex-col
    md:flex-row
    md:flex-wrap
    justify-between
    md:justify-start
`
function UserNameInputs({ data }) {

    return (
        <ListWrap>
            {data.map((ele) =>
                <List key={ele.id} data={ele} />
            )}
        </ListWrap>
    )
}

export default UserNameInputs;
