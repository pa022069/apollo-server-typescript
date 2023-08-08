## Apollo Server / Typescript

[Tutorial Video](https://www.youtube.com/watch?v=DEN43aRhVq8&list=PLBWoZ28dI_dN6OIpK9gm2V-xDppl1VUTv&index=74)

[Apollo](https://www.apollographql.com/docs/apollo-server/getting-started/)


## > query

功能範例

```
query {
  me {
    name
    friends {
      id
      name
    }
  }
}
```

***

## > mutation

功能範例

```
mutation {
  createUser(input: {
    name: "Name",
    email: "test@test.com",
    password: "123"
  }) {
    name
    email
  }
}
```

```
mutation {
  addPost(title: "Mutation Is Awesome", content: "Adding Post is like a piece of cake") {
    id
    title
    author {
      name
    }
  }
}
```