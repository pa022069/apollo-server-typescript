const MutationDefs = `#graphql
  interface UserInfo {
    name: String
    email: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type UserData implements UserInfo {
    name: String
    email: String
  }
`;

const UserDef = `#graphql
  type User {
    "識別碼"
    id: ID
    "名字"
    name: String
    "年齡"
    age: Int
    "朋友們"
    friends: [User]
  }
`;

const PostDef = `#graphql
  type Post {
    "識別碼"
    id: ID!
    "作者"
    author: User
    "標題"
    title: String
    "內容"
    content: String
    "按讚者"
    likeGivers: [User]
  }
`;

export const typeDefs = `#graphql
  """
  使用者
  """
  ${UserDef}

  ${PostDef}

  ${MutationDefs}

  type Mutation {
    createUser(input: UserInput): UserData
    "新增貼文"
    addPost(title: String!, content: String!): Post
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    "取得當下使用者"
    me: User
    "取得所有使用者"
    users: [User]
  }
`;
