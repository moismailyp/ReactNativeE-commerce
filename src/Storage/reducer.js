import { act } from "react-test-renderer";
import { LOGIN,SIGNOUT, UPDATEPROFILE ,UPDATECATOGARIES,UPDATECARTCOUNT} from "./constants";
const initialState={
    isLoggedIn:false,
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    profileImage:'',
    userId:'',
    categories:'',
    cartCount:0,
};

export const InKartReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                email:action.payload.email,
                isLoggedIn:true,
                mobileNumber:action.payload.mobileNumber,
                profileImage:action.payload.profileImage,
                userId:action.payload.userId,
            }
            case SIGNOUT:
                return{
                    ...state,
                    firstName:'',
                    lastName:'',
                    email:'',
                    isLoggedIn:false,
                    mobileNumber:'',
                    profileImage:'',
                    userId:'',
                }
                case UPDATEPROFILE:

                    return{
                        ...state,
                        firstName:action.payload.firstName,
                        lastName:action.payload.lastName,
                        email:action.payload.email,
                        mobileNumber:action.payload.mobileNumber,
                        profileImage:action.payload.profileImage,
                    }
                    case UPDATECATOGARIES:
                    return{
                        ...state,
                        categories:action.payload.categories,
                    }
                    case UPDATECARTCOUNT:
                        return{
                            ...state,
                            cartCount:action.payload.cartCount,
                        }
            default:
                return state;
    }
};
