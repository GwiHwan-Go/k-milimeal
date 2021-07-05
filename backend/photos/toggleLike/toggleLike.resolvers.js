import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default{
    Mutation: {
        toggleLike: protectedResolver(async (_, {id}, {loggedInUser}) => {
            const hashtag = await client.hashtag.findUnique({
                where: {
                    id
                }
            });
            if (!hashtag){
                return {
                    ok: false,
                    error: "hashtag not found",
                }
            }
            const like = await client.like.findUnique({
                where : {
                    hashtagId_userId: {
                        userId: loggedInUser.id,
                        hashtagId: id,
                    }
                }
            });
            if(like){
                await client.like.delete({
                    where : {
                        hashtagId_userId: {
                            userId: loggedInUser.id,
                            hashtagId: id,
                        }
                    } 
                })
            }else {
                await client.like.create({
                    data : {
                        user: {
                            connect : {
                                id : loggedInUser.id
                            }
                        },
                        hashtag : {
                            connect : {
                                id
                            }

                        }
                    }
                })
            }
            return {
                ok : true
            }
        })
    }
}