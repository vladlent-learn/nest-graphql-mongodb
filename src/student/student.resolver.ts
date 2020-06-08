import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver('Student')
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(returns => StudentType)
  addStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput): Promise<Student> {
    return this.studentService.addStudent(createStudentInput);
  }

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
}
