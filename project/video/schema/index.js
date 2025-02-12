const {buildSchema} = require('graphql');
const comments = require('../data/comments');

const schema = buildSchema(`
    type Comment {
        id: ID!
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    
    type Query {
        comment: [Comment]
    }
    
    type Mutation {
        praise(id: ID!): Int!
    }
`);

schema.getQueryType().getFields().comment.resolve = () => {
    return Object.values(comments);
};

schema.getMutationType().getFields().praise.resolve = (source, args) => {
    const {id} = args;
    const comment = Object.values(comments).find(item => item.id === Number(id));
    return ++comment.praiseNum;
};

module.exports = schema;
