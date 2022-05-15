import React from 'react';
import tw from 'tailwind-styled-components';
import { BsFillPersonFill, BsFillPinMapFill } from "react-icons/bs";
import { Text } from '@/components';

const ListWrapStyle = tw.li`
    rounded
    px-1
    py-2
    md:w-1/3
`
const ListInner = tw.div`
    bg-white
    rounded-lg
    drop-shadow-md
    flex
    overflow-hidden
    h-full
`

const PerSonArea = tw.div`
    h-[150px]
    bg-slate-300
    w-1/4
    md:w-1/3
    flex
    justify-center
    items-center
`

const InfoArea = tw.div`
    py-1
    px-4
    md:py-2
    h-full
    flex-1
    flex
    flex-col
    justify-center
    gap-2
`

function Lists({ data }) {
    const { firstName, secondName, area } = data
    return (
        <ListWrapStyle>
            <ListInner>
                <PerSonArea>
                    <BsFillPersonFill size='48' color='#fff' />
                </PerSonArea>
                <InfoArea>
                    <Text color='text-slate-600' bold={true}>
                        {secondName}
                        {firstName}
                    </Text>
                    <div className="flex items-center gap-2">
                        <BsFillPinMapFill color='#444444' />
                        <Text color='text-slate-600' size="md">
                            {area}
                        </Text>
                    </div>
                </InfoArea>
            </ListInner>
        </ListWrapStyle>
    )
}




export default Lists;
