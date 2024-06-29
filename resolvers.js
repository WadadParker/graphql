// We hardcoding data for now
const data = {
    authors: [
        {id:"1",name:"Author 1",booksIds:["101","102"]},
        {id:"2",name:"Author 2",booksIds:["103"]},
    ],
    books: [
        {id:"101",title:"Book 1",publishedYear:2000,authorId:"1"},
        {id:"102",title:"Book 2",publishedYear:2010,authorId:"1"},
        {id:"103",title:"Book 3",publishedYear:2020,authorId:"2"}
    ]
}
// Well, simply return all authors from data. 
// How to returned interdependent data? Like books having some author, we need to define author first in the resolver as a "data type"
// then call it so that graphQl realizes this
export const resolvers = {
    // Over here, you need to define what Author means inside a book. And there are special arguments which is enforced by graphQl
    // Remember that we are actually calling another schema so it should be case sensitive, author not Author
    Book:{
        author: (parent, args, context, info) => {
            // Parent: Parent is going to have authorId, so we need to access parent to get relevant ids and info
            
            return data.authors.find(authorDetail=> authorDetail.id === parent.authorId)
        }
    },

    Author: {
        books:(parent,args,context,info) => {
            console.log(parent)
            return data.books.filter(book => parent.booksIds.includes(book.id))
        }
    },

    Query: {
        authors: () =>{
            return data.authors;
        },
        books: () => {
            return data.books;
        }
    }
}