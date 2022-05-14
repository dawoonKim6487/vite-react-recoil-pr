import { atom } from 'recoil';

export const firstName = atom({
    key: 'firstName',
    default: "first",
});

export const secondName = atom({
    key: 'secondName',
    default: "second",
});

