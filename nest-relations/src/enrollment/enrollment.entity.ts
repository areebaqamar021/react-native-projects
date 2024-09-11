import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity';
import { Course } from '../course/course.entity';

@Entity()
export class Enrollment {
  @PrimaryColumn()
  studentId: number;

  @PrimaryColumn()
  courseId: number;

  @ManyToOne(() => Student, student => student.courses)
  student: Student;

  @ManyToOne(() => Course, course => course.students)
  course: Course;
}
