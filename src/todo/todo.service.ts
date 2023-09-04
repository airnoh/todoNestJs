import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService {
    _todos: TodoModel[] = [
        {id: 1, description: 'clean up all the tasks'},
        {id: 2, description: 'Feed the user'},
        {id: 3, description: 'Finish with the user'}
    ]

    findAllTodo(){
        return this._todos;
    }
    findTodoById(id: number): TodoModel{
        return this._todos.find(t=>t.id === id);
    }
}
