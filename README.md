## Model
Let's have data model strucuture of 2 objects
book {
    id
    name
    publishedYear
    author
}

author {
    id,
    name,
    books
}

## Data
For the above data models, we need following responses:

- list of books
- list of authors
- list of books with author details
- list of author with books details

We have to write 4 endpoints if we wanted to create it
with REST. But we can do it with just 1 endpoint through graphQL

Query is defined for all methods to fetch the data
Mutation is defined for all methods to change the data