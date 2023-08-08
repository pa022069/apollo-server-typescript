// export const resolvers = {
//   Query: {
//     apiStatus: () => {
//       return { status: "OK" };
//     },
//   },
//   Mutation: {
//     createUser: (parent: any, args: any, context: any, info: any) => {
//       return {
//         name: args.input.name,
//         email: args.input.email,
//       };
//     },
//   },
// };

const users = [
  { id: 1, name: "Fong", age: 23, friendIds: [2, 3] },
  { id: 2, name: "Kevin", age: 40, friendIds: [1] },
  { id: 3, name: "Mary", age: 18, friendIds: [1] },
];

const posts = [
  {
    id: 1,
    authorId: 1,
    title: "Hello World!",
    content: "This is my first post.",
    likeGiverIds: [2],
  },
  {
    id: 2,
    authorId: 2,
    title: "Good Night",
    content: "Have a Nice Dream =)",
    likeGiverIds: [2, 3],
  },
  {
    id: 3,
    authorId: 1,
    title: "I Love U",
    content: "Here's my second post!",
    likeGiverIds: [],
  },
];

const findUserById = (id: any) => users.find((user) => user.id === id);
const meId = 1;

export const resolvers = {
  Mutation: {
    createUser: (root: any, args: any, context: any, info: any) => {
      return {
        name: args.input.name,
        email: args.input.email,
      };
    },
    addPost: (root: any, args: any, context: any) => {
      const { title, content } = args;
      // 新增 post
      posts.push({
        id: posts.length + 1,
        authorId: meId,
        title,
        content,
        likeGiverIds: [],
      });
      // 回傳新增的那篇 post
      return posts[posts.length - 1];
    },
  },
  Query: {
    hello: () => "world",
    me: () => users[0],
    // 3-1 在 `Query` 裡新增 `users`
    users: () => users,
  },
  // 3-2 新增 `User` 並包含 `friends` 的 field resolver
  User: {
    // 每個 Field Resolver 都會預設傳入三個參數，
    // 分別為上一層的資料 (即 user)、參數 (下一節會提到) 以及 context (全域變數)
    friends: (parent: any, args: any, context: any) => {
      // 從 user 資料裡提出 friendIds
      const { friendIds } = parent;
      // Filter 出所有 id 出現在 friendIds 的 user
      return users.filter((user) => friendIds.includes(user.id));
    },
  },
  Post: {
    // 2-1. parent 為 post 的資料，透過 post.likeGiverIds 連接到 users
    likeGivers: (parent: any, args: any, context: any) => {
      return parent.likeGiverIds.map((id: any) => findUserById(id));
    },
    // 2-2. parent 為 post 的資料，透過 post.author
    author: (parent: any, args: any, context: any) => {
      return findUserById(parent.authorId);
    },
  },
};
