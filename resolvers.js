export const resolvers = {
    Query: {
        authors: () =>{
            return [{
                id: 1,
                name:"Wadad Parker"
            }]
        },
        books: () => {
            return [{
                id:1,
                title:"Namste frontend system design",
                publishedYear: 2024
            }]
        }
    }
}