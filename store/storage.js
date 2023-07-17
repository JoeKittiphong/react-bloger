import { atom } from "recoil";

const postData = atom({
    key : "post",
    default : ''
})

const getMongo = atom({
    key : "mongo",
    default : ""
})

export {postData, getMongo}