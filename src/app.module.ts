import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { PostModule } from './post/post.module';



@Module({
  imports: [UsersModule, AuthorsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
