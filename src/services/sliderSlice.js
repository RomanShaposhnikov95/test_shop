import {createSlice} from "@reduxjs/toolkit";


const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        slides: [
            {
                title: "One",
                description: "The description text will appear here.",
                urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg",
            },
            {
                title: "Two",
                description: "The description text will appear here.",
                urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(147).jpg",
            },
            {
                title: "Three",
                description: "The description text will appear here.",
                urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
            },
            {
                title: "Four",
                description: "The description text will appear here.",
                urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg",
            },
            {
                title: "Five",
                description: "The description text will appear here.",
                urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
            }
        ]
    },
    reducers: {

    },
    extraReducers: {

    }
})

export default sliderSlice.reducer