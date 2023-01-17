import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query('sort') sort?: string) {
    const params = [];
    if (sort != undefined) {
      params.push(`${sort}`);
    }
    return this.booksService.findAll(params);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() body) {
    const newBook: any = body;
    return this.booksService.createBook(newBook);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') id: any, @Body() body) {
   return this.booksService.updateBook(id, body)
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') id: any) {
    return this.booksService.deleteBook(id) 
    }
}





