import books from './booksData.ts'
import {IBook} from './book.ts'
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let allBooks=books;

  const getBooks=({response}: {response: any}) => {
    response.body= {
        success:true,
        data:allBooks
};
}

 const getBook=({params,response}:{params:{id:string},response:any})=>{
  const filteredBooks:IBook[]= allBooks.filter(item=>item.id===params.id)
  response.body= {
    success:true,
    data:filteredBooks
};
}

const postBook=async ({request,response}:{request:any,response:any})=>{
   
    if(!request.hasBody)
    {
        response.status=404;
        response.body={
            success:true,
            data:"No Data"
        }
    }
    else
    {
        const book:IBook=await request.body().value;
         allBooks.push(book);
         response.status=201;
         response.body={
             success:true,
             data:book
        }
       
    }
}
const updateBook=async ({params,request,response}:{params:{id:string},request:any,response:any})=>{
    const filteredBook:IBook|undefined= allBooks.find(item=>item.id===params.id)
    if(filteredBook){

        const updateBook=await request.body().value;
        allBooks=allBooks.map(book=>book.id===params.id?updateBook:book)
        response.body= {
            success:true,
            data:allBooks
        };
    }
   else{
    response.body= {
        success:true,
        data:"No book found"
    };
   }
  }
  const deleteBook=({params,response}:{params:{id:string},response:any})=>{
    const filteredBook:IBook|undefined= allBooks.find(item=>item.id===params.id)
    if(filteredBook){

         allBooks=allBooks.filter(book=>book.id!=filteredBook.id);
        response.body= {
            success:true,
            data:allBooks
        };
    }
   else{
    response.body= {
        success:true,
        data:"No book found"
    };
   }
  }


export  {getBook,getBooks,postBook,updateBook,deleteBook};