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
        comments: [Comment]
    }
    
    type Mutation {
        praise(id: ID!): Int!
    }
`);

schema.getQueryType().getFields().comments.resolve = () => {
    return comments;
};

schema.getMutationType().getFields().praise.resolve = (source, args) => {
    const {id} = args;
    const comment = comments.find(item => item.id === Number(id));
    return ++comment.praiseNum;
};

module.exports = schema;
