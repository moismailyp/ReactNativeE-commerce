import storage from "@react-native-firebase/storage"
import { Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
export const updateProfileImage=async image=>{
    return new Promise(async resolve=>{
        try{
            const uri = image;
            const filename=uri.substring(uri.lastIndexOf('/')+1);
            const pathForFirebaseStorage=await getPathforFirebaseStorage(uri);
      


await storage().ref(filename).putFile(pathForFirebaseStorage);
await storage().ref(filename).getDownloadURL().then(url=>{
    resolve(url);
})
        }
        catch(error){

        }
})
}
const getPathforFirebaseStorage=async uri=>{
    if(Platform.OS==='ios')
    {
        return uri;
    }
    const stat=await RNFetchBlob.fd.stat(uri)
    return stat.path;
}