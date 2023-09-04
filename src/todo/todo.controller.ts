import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService:TodoService){}
    @Get()
    getTodos(){
      return this.todoService.findAllTodo();  
    }
    @Get(':todoId')
    getTodoById(@Param('todoId')id:number){
        let todo = this.todoService.findTodoById(id);

        if (!todo){
            throw new NotFoundException(`Todo ${id} not found`);
        }
    }
}
