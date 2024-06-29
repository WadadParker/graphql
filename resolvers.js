// We hardcoding data for now
const data = {
    authors: [
        {id:"1",name:"Author 1",bookIds:["101","102"]},
        {id:"2",name:"Author 2",booksIds:["103"]},
    ],
    books: [
        {id:"101",title:"Book 1",publishedYear:2000,authorId:"1"},
        {id:"102",title:"Book 2",publishedYear:2010,authorId:"1"},
        {id:"103",title:"Book 3",publishedYear:2020,authorId:"2"}
    ]
}
// Well, simply return all authors from data. 
export const resolvers = {
    Query: {
        authors: () =>{
            return data.authors;
        },
        books: () => {
            return data.books;
        }
    }
}