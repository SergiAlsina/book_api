import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(params: Array<string>): any {
    if (params.length > 0) {
      return `findAll working with ${params}`;
    } else {
      return 'findAll working';
    }
  }

  findBook(bookId: string) {
    return `findBook working with bookId:${bookId}`;
  }

  createBook(newBook: any) {
    return newBook;
  }

  updateBook(bookId: string, newBookData: any){
    return `Estás haciendo una operación de actualización del recurso ${bookId} 
          con ${newBookData}`
  }

  deleteBook(bookId: string) {
    return `deleted with bookId:${bookId}`;
  }
}
