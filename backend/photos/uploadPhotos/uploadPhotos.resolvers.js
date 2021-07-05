import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";
import { processHashtags } from "../photos.utils";

export default {
    Mutation: {
        uploadPhoto: protectedResolver(async(_,{file, caption},{loggedInUser})=>{
            
            let hashtagObjs=[];
            if (caption) {
                hashtagObjs = processHashtags(caption);
            }
            const fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");
            console.log("fileURl",fileUrl)
                return client.photo.create({
                    data: {
                        file: fileUrl,
                        caption,
                        user : {
                            connect: {
                                id: loggedInUser.id
                            }
                        },
                        ...(hashtagObjs.length > 0 && {
                            hashtags: {
                                connectOrCreate: hashtagObjs,
                            }
                        })
                }})
                            
                        })
                    
                }
            }
            
            //save the photo with the parsed hasgtags
            // add the photo to the hashtags
