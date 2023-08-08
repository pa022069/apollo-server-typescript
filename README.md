## Apollo Server / Typescript

此範例作為apollo server製作graphQL使用。


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