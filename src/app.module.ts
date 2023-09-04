import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [TodoModule]
})
export class AppModule {}
