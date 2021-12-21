import {createSlice} from "@reduxjs/toolkit";
const rus = 'https://avatars.mds.yandex.net/get-mpic/5232956/img_id4344907092926740199.jpeg/x248_trim';
const eng = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/250px-Flag_of_the_United_Kingdom_%283-5%29.svg.png';
const lat = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/250px-Flag_of_Latvia.svg.png';


const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: false,
        langNow: {id: 2, lang: 'Latviešu', flag: lat},
        language: [
            {id: 1, lang: 'English', flag: eng},
            {id: 2, lang: 'Latviešu', flag: lat},
            {id: 3, lang: 'Русский', flag: rus}
        ],

        category: [
            {title: 'Būvmateriāli', active: false},
            {title: 'Celtniecības iekārtas', active: true},
            {title: 'Akumulātora instrumenti', active: false},
            {title: 'Rokas instrumenti', active: false},
            {title: 'Celtniecības tehnika', active: false},
            {title: 'Kāpnes un sastatnes', active: false},
            {title: 'Noma', active: false},
            {title: 'Lietota tehnika', active: false},
        ],

        content: [
            {
                Celtniecības: [
                    {title: 'Betona slīpmašīnas'},
                    {title: 'Betona vibratori'},
                    {title: 'Ģeneratori'},
                    {title: 'Ģipškartona pacēlājs'},
                    {title: 'Ģipškartona pacēlājs'},
                    {title: 'jaucēji'},
                    {title: 'Jaucējsūkņi'},
                    {title: 'Jaucējsūkņu piederumi'},
                    {title: 'Kompresori'},
                    {title: 'Krāsošanas iekārtas'},
                    {title: 'Krāsošanas iekārtu piederumi'},
                    {title: 'Padeves sūkņi'},
                    {title: 'Slīpmašīnas'},
                    {title: 'Slīpmašīnu piederumi'},
                    {title: 'Siltumizolācijas materiālu '},
                    {title: 'griezēji'},
                    {title: 'Špaktelēšanas iekārtas'},
                    {title: 'Špaktelēšanas iekārtu piederumi'},
                    {title: 'Tīrīšanas iekārtas'},
                    {title: 'Tīrīšanas iekārtu piederumi'},
                    {title: 'Rokas maisītājs'},
                    {title: 'Rokas mikseru piederumi'},
                    {title: 'Prožektori'},
                    {title: 'Smilšu strūklas iekārtas'},
                ],
            }
        ]
    },
    reducers: {
        menuToogle: (state, action) => {
            state.menu = !state.menu
        },
        changeLanguage: (state, action) => {
            state.langNow = action.payload
        }
    },
    extraReducers: {

    }
})

export const {menuToogle, changeLanguage} = menuSlice.actions
export default menuSlice.reducer