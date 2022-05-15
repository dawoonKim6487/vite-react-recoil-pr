import { List } from '@/components';
import React from 'react';
import { getUserList } from '@/recoil';
import { useRecoilValue } from 'recoil';
import tw from 'tailwind-styled-components';

const ListWrap = tw.ul`
    flex
    flex-col
    md:flex-row
    md:flex-wrap
    justify-between
    md:justify-start
`
function UserNameInputs() {
    const list = useRecoilValue(getUserList)

    return (
        <ListWrap>
            <React.Suspense fallback={<div>load</div>}>
                {list.map((ele) =>
                    <List key={ele.id} data={ele} />
                )}
            </React.Suspense>
        </ListWrap>
    )
}

export default UserNameInputs;
