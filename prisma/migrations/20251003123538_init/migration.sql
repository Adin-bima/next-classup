/*
  Warnings:

  - You are about to drop the column `date` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[student_number]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class_id` to the `Behaviour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `Behaviour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_id` to the `Behaviour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `academic_year_id` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datetime` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_id` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_number` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Remark" AS ENUM ('EXCELLENT', 'GOOD', 'AVERAGE', 'BAD', 'POOR');

-- AlterEnum
ALTER TYPE "public"."AttendanceStatus" ADD VALUE 'SICK';

-- AlterTable
ALTER TABLE "public"."AcademicYear" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "is_current" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Attendance" DROP COLUMN "date",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Behaviour" DROP COLUMN "date",
ADD COLUMN     "class_id" TEXT NOT NULL,
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "remark" "public"."Remark" NOT NULL,
ADD COLUMN     "teacher_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Class" ADD COLUMN     "academic_year_id" TEXT NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Exam" DROP COLUMN "date",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."ExamResult" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "public"."Parent" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Performance" DROP COLUMN "date",
DROP COLUMN "subject",
ADD COLUMN     "class_id" TEXT NOT NULL,
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "subject_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Schedule" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."School" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "student_number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Subject" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "gender";

-- CreateIndex
CREATE UNIQUE INDEX "Student_student_number_key" ON "public"."Student"("student_number");

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_academic_year_id_fkey" FOREIGN KEY ("academic_year_id") REFERENCES "public"."AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Performance" ADD CONSTRAINT "Performance_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Performance" ADD CONSTRAINT "Performance_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Behaviour" ADD CONSTRAINT "Behaviour_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Behaviour" ADD CONSTRAINT "Behaviour_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
