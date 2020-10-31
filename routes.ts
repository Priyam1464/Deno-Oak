import {Router} from "https://deno.land/x/oak/mod.ts";
//import getBooks from "./bookOperations.ts"
import {getBook,getBooks,postBook,updateBook,deleteBook} from "./bookOperations.ts"

const router=new Router();
router.get('/api/v1/books',getBooks);
router.get('/api/v1/book/:id',getBook);
router.post('/api/v1/books',postBook);
router.put('/api/v1/book/:id',updateBook)
router.delete('/api/v1/book/:id',deleteBook)
export default router;