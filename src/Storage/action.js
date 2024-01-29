import { UPDATECATOGARIES, LOGIN,SIGNOUT,UPDATEPROFILE,UPDATECARTCOUNT } from "./constants"
export const login=data=>({
    type:LOGIN,
    payload:{
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        mobileNumber:data.mobileNumber,
        profileImage:data.profileImage,
        userId:data.userId
    }
})
export const signout=data=>({
    type:SIGNOUT,
    payload:{

    }
})
export const updateProfile=data=>({
    type:UPDATEPROFILE,
    payload:{
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        mobileNumber:data.mobileNumber,
        profileImage:data.profileImage
    }
    })
    export const updatecategories=data=>({
        type:UPDATECATOGARIES,
        payload:{
            categories:data,
        }
    })

    export const updateCartCount=data=>({
        type:UPDATECARTCOUNT,
        payload:{
            cartCount:data,
        }
    })