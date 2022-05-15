import { List } from '@/components';
import React, { Suspense } from 'react';
import { getUserList, getFirstUser } from '@/recoil';
import { useRecoilValue } from 'recoil';

function UserNameInputs() {
    const list = useRecoilValue(getUserList)
    const first = useRecoilValue(getFirstUser)

    return (
        <div className='flex flex-wrap justify-between gap-1 gap-y-2'>
            <Suspense fallback={<div>load</div>}>
                {list.map((ele) =>
                    <List key={ele.id}>{ele.name}</List>
                )}
                <span>{first.name}</span>
            </Suspense>
        </div>
    )
}

export default UserNameInputs;
