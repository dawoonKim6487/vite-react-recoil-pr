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
    get: ({ get }) => {
        const user = get(userList)
        return user[0]
    }

})

export const getUserList = selector({
    key: "userListData",
    get: async () => {
        try {
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                body: [
                    { id: 0, name: 'dawoon' },
                    { id: 1, name: 'dawoon1' },
                    { id: 2, name: 'dawoon2' },
                    { id: 3, name: 'dawoon3' },
                    { id: 4, name: 'dawoon4' },
                    { id: 5, name: 'dawoon5' },
                ],
            });
            return data.body;
        } catch (err) {
            // throw err;
            return []
        }
    }
});