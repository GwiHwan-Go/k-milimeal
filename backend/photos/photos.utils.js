export const processHashtags = (caption) => {
    ///parse caption
    // get or create Hashtags
    const hashtags = caption.match(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g) || []; //regular expression
    return hashtags.map((hashtag)=>({
        where: {hashtag},
        create: {hashtag},
    }))};