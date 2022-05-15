import { atom, selector } from 'recoil';
import axios from 'axios'

export const firstName = atom({
    key: 'firstName',
    default: "",
});

export const secondName = atom({
    key: 'secondName',
    default: "",
});

export const userList = atom({
    key: 'userList',
    default: [
        { id: 0, name: 'dawoon' },
        { id: 1, name: 'dawoon1' },
        { id: 2, name: 'dawoon2' },
        { id: 3, name: 'dawoon3' },
        { id: 4, name: 'dawoon4' },
        { id: 5, name: 'dawoon5' },
    ]
})

export const getFirstUser = selector({
    key: "FirstUser",
    default: [],
    get: ({ get }) => {
        const user = get(userList)
        return user.filter((ele) => {
            return ele.id == 0
        })
    }

})

export const getUserList = selector({
    key: "userListData",
    default: [],
    get: async () => {
        try {
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                body: [
                    { id: 0, firstName: 'dawoon', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 1, firstName: 'dawoon1', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 2, firstName: 'dawoon2', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 3, firstName: 'dawoon3', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 4, firstName: 'dawoon4', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 5, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 6, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
                    { id: 7, firstName: 'dawoon5', secondName: 'Kim', area: 'Korea Seoul' },
                ],
            });
            return data.body;
        } catch (err) {
            // throw err;
            return []
        }
    }
});