import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comments } from './entities/comments.entity';
import { SubComments } from './entities/sub_comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comments, SubComments])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
