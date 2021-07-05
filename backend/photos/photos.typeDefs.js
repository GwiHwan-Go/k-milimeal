import { gql } from "apollo-server-express";

export default gql`
    type Photo {
        id: Int!
        user: User!
        file: String!
        caption: String
        hashtags: [Hashtag]
        comments: Int!
        isMine: Boolean!
        createdAt: String!
        updatedAt: String!
    }
    type Hashtag{
        id: Int!
        hashtag: String!
        likesNumber: Int!
        photos: [Photo]
        totalPhotos: Int!
        createdAt: String!
        updatedAt: String!
    }
    type Like {
        id: Int!
        hashtag: Hashtag!
        createdAt: String!
        updatedAt: String!
    }
    `