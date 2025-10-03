/*
  Warnings:

  - You are about to drop the column `createdAt` on the `AcademicYear` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `AcademicYear` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `AcademicYear` table. All the data in the column will be lost.
  - You are about to drop the column `yearEnd` on the `AcademicYear` table. All the data in the column will be lost.
  - You are about to drop the column `yearStart` on the `AcademicYear` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ExamResult` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `dayOfWeek` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `schoolId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[admin_id]` on the table `School` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `school_id` to the `AcademicYear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `AcademicYear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_end` to the `AcademicYear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_start` to the `AcademicYear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule_id` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `Behaviour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Behaviour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school_id` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exam_id` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ExamResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day_of_week` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_id` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school_id` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DayOfWeek" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE');

-- DropForeignKey
ALTER TABLE "public"."AcademicYear" DROP CONSTRAINT "AcademicYear_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Attendance" DROP CONSTRAINT "Attendance_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Attendance" DROP CONSTRAINT "Attendance_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Behaviour" DROP CONSTRAINT "Behaviour_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Exam" DROP CONSTRAINT "Exam_classId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Exam" DROP CONSTRAINT "Exam_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ExamResult" DROP CONSTRAINT "ExamResult_examId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ExamResult" DROP CONSTRAINT "ExamResult_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Parent" DROP CONSTRAINT "Parent_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Performance" DROP CONSTRAINT "Performance_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_classId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "public"."School" DROP CONSTRAINT "School_adminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_classId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Subject" DROP CONSTRAINT "Subject_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Teacher" DROP CONSTRAINT "Teacher_schoolId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Teacher" DROP CONSTRAINT "Teacher_userId_fkey";

-- DropIndex
DROP INDEX "public"."Parent_userId_key";

-- DropIndex
DROP INDEX "public"."School_adminId_key";

-- DropIndex
DROP INDEX "public"."Student_userId_key";

-- DropIndex
DROP INDEX "public"."Teacher_userId_key";

-- AlterTable
ALTER TABLE "public"."AcademicYear" DROP COLUMN "createdAt",
DROP COLUMN "schoolId",
DROP COLUMN "updatedAt",
DROP COLUMN "yearEnd",
DROP COLUMN "yearStart",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "school_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "year_end" INTEGER NOT NULL,
ADD COLUMN     "year_start" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Attendance" DROP COLUMN "createdAt",
DROP COLUMN "scheduleId",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "schedule_id" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Behaviour" DROP COLUMN "createdAt",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Class" DROP COLUMN "createdAt",
DROP COLUMN "schoolId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "school_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Exam" DROP COLUMN "classId",
DROP COLUMN "createdAt",
DROP COLUMN "teacherId",
DROP COLUMN "updatedAt",
ADD COLUMN     "class_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "teacher_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."ExamResult" DROP COLUMN "createdAt",
DROP COLUMN "examId",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "exam_id" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Parent" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Performance" DROP COLUMN "createdAt",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Schedule" DROP COLUMN "classId",
DROP COLUMN "createdAt",
DROP COLUMN "dayOfWeek",
DROP COLUMN "subjectId",
DROP COLUMN "teacherId",
DROP COLUMN "updatedAt",
ADD COLUMN     "class_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "day_of_week" "public"."DayOfWeek" NOT NULL,
ADD COLUMN     "subject_id" TEXT NOT NULL,
ADD COLUMN     "teacher_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."School" DROP COLUMN "adminId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "admin_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "classId",
DROP COLUMN "createdAt",
DROP COLUMN "schoolId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "class_id" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gender" "public"."Gender" NOT NULL,
ADD COLUMN     "school_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Subject" DROP COLUMN "createdAt",
DROP COLUMN "teacherId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "teacher_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Teacher" DROP COLUMN "createdAt",
DROP COLUMN "schoolId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "school_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "createdAt",
DROP COLUMN "schoolId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gender" "public"."Gender" NOT NULL,
ADD COLUMN     "school_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Parent_user_id_key" ON "public"."Parent"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "School_admin_id_key" ON "public"."School"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_id_key" ON "public"."Student"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_user_id_key" ON "public"."Teacher"("user_id");

-- AddForeignKey
ALTER TABLE "public"."School" ADD CONSTRAINT "School_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Teacher" ADD CONSTRAINT "Teacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Teacher" ADD CONSTRAINT "Teacher_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Parent" ADD CONSTRAINT "Parent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AcademicYear" ADD CONSTRAINT "AcademicYear_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "public"."School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subject" ADD CONSTRAINT "Subject_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Schedule" ADD CONSTRAINT "Schedule_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Schedule" ADD CONSTRAINT "Schedule_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Schedule" ADD CONSTRAINT "Schedule_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Performance" ADD CONSTRAINT "Performance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Behaviour" ADD CONSTRAINT "Behaviour_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exam" ADD CONSTRAINT "Exam_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exam" ADD CONSTRAINT "Exam_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamResult" ADD CONSTRAINT "ExamResult_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamResult" ADD CONSTRAINT "ExamResult_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attendance" ADD CONSTRAINT "Attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Attendance" ADD CONSTRAINT "Attendance_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "public"."Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
