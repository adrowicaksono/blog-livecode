# blog-tdd

# rest-api

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

| Route          | HTTP   | Description |Requirement|
|----------------|--------|-------------|-----------|
| /users         | GET    | Get all users info| |
| /users         | POST   | add a single user | name, email, password |
| /auth          | POST   | login to get a token              |email, password|
| /auth/facebook | POST   | login to get a token with facebook| |
| /articles         | GET    | Get all article info   | |
| /articles         | POST   | add a article task     |headers:token, title, content, category |
| /articles         | DELETE | delete a article task  |headers:token, query:id(ArticleId)        |
| /articles         | PUT    | update a article task  |headers:token, query:id(ArticleId), title, content, category|

