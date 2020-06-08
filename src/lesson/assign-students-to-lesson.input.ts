import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @Field(returns => ID)
  @IsUUID()
  lessonId: string;

  @Field(returns => [ID])
  @IsUUID('4', { each: true })
  studentIds: string[];
}
