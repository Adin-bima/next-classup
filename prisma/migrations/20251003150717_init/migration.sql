-- CreateIndex
CREATE INDEX "idx_academic_year_school_id" ON "public"."AcademicYear"("school_id");

-- CreateIndex
CREATE INDEX "idx_academic_year_is_current" ON "public"."AcademicYear"("is_current");

-- CreateIndex
CREATE INDEX "idx_academic_year_school_current" ON "public"."AcademicYear"("school_id", "is_current");

-- CreateIndex
CREATE INDEX "idx_academic_year_period" ON "public"."AcademicYear"("year_start", "year_end");

-- CreateIndex
CREATE INDEX "idx_attendance_student_id" ON "public"."Attendance"("student_id");

-- CreateIndex
CREATE INDEX "idx_attendance_schedule_id" ON "public"."Attendance"("schedule_id");

-- CreateIndex
CREATE INDEX "idx_attendance_status" ON "public"."Attendance"("status");

-- CreateIndex
CREATE INDEX "idx_attendance_datetime" ON "public"."Attendance"("datetime");

-- CreateIndex
CREATE INDEX "idx_attendance_student_datetime" ON "public"."Attendance"("student_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_attendance_schedule_datetime" ON "public"."Attendance"("schedule_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_attendance_student_status" ON "public"."Attendance"("student_id", "status");

-- CreateIndex
CREATE INDEX "idx_behaviour_student_id" ON "public"."Behaviour"("student_id");

-- CreateIndex
CREATE INDEX "idx_behaviour_class_id" ON "public"."Behaviour"("class_id");

-- CreateIndex
CREATE INDEX "idx_behaviour_teacher_id" ON "public"."Behaviour"("teacher_id");

-- CreateIndex
CREATE INDEX "idx_behaviour_datetime" ON "public"."Behaviour"("datetime");

-- CreateIndex
CREATE INDEX "idx_behaviour_remark" ON "public"."Behaviour"("remark");

-- CreateIndex
CREATE INDEX "idx_behaviour_student_class" ON "public"."Behaviour"("student_id", "class_id");

-- CreateIndex
CREATE INDEX "idx_behaviour_student_datetime" ON "public"."Behaviour"("student_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_behaviour_teacher_datetime" ON "public"."Behaviour"("teacher_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_class_school_id" ON "public"."Class"("school_id");

-- CreateIndex
CREATE INDEX "idx_class_academic_year_id" ON "public"."Class"("academic_year_id");

-- CreateIndex
CREATE INDEX "idx_class_school_year" ON "public"."Class"("school_id", "academic_year_id");

-- CreateIndex
CREATE INDEX "idx_class_grade" ON "public"."Class"("grade");

-- CreateIndex
CREATE INDEX "idx_exam_teacher_id" ON "public"."Exam"("teacher_id");

-- CreateIndex
CREATE INDEX "idx_exam_class_id" ON "public"."Exam"("class_id");

-- CreateIndex
CREATE INDEX "idx_exam_datetime" ON "public"."Exam"("datetime");

-- CreateIndex
CREATE INDEX "idx_exam_subject" ON "public"."Exam"("subject");

-- CreateIndex
CREATE INDEX "idx_exam_class_datetime" ON "public"."Exam"("class_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_exam_teacher_datetime" ON "public"."Exam"("teacher_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_exam_result_exam_id" ON "public"."ExamResult"("exam_id");

-- CreateIndex
CREATE INDEX "idx_exam_result_student_id" ON "public"."ExamResult"("student_id");

-- CreateIndex
CREATE INDEX "idx_exam_result_score" ON "public"."ExamResult"("score");

-- CreateIndex
CREATE INDEX "idx_exam_result_exam_student" ON "public"."ExamResult"("exam_id", "student_id");

-- CreateIndex
CREATE INDEX "idx_exam_result_student_score" ON "public"."ExamResult"("student_id", "score");

-- CreateIndex
CREATE INDEX "idx_parent_user_id" ON "public"."Parent"("user_id");

-- CreateIndex
CREATE INDEX "idx_performance_student_id" ON "public"."Performance"("student_id");

-- CreateIndex
CREATE INDEX "idx_performance_class_id" ON "public"."Performance"("class_id");

-- CreateIndex
CREATE INDEX "idx_performance_subject_id" ON "public"."Performance"("subject_id");

-- CreateIndex
CREATE INDEX "idx_performance_datetime" ON "public"."Performance"("datetime");

-- CreateIndex
CREATE INDEX "idx_performance_student_class" ON "public"."Performance"("student_id", "class_id");

-- CreateIndex
CREATE INDEX "idx_performance_student_subject" ON "public"."Performance"("student_id", "subject_id");

-- CreateIndex
CREATE INDEX "idx_performance_class_subject" ON "public"."Performance"("class_id", "subject_id");

-- CreateIndex
CREATE INDEX "idx_performance_student_datetime" ON "public"."Performance"("student_id", "datetime");

-- CreateIndex
CREATE INDEX "idx_schedule_subject_id" ON "public"."Schedule"("subject_id");

-- CreateIndex
CREATE INDEX "idx_schedule_teacher_id" ON "public"."Schedule"("teacher_id");

-- CreateIndex
CREATE INDEX "idx_schedule_class_id" ON "public"."Schedule"("class_id");

-- CreateIndex
CREATE INDEX "idx_schedule_day_of_week" ON "public"."Schedule"("day_of_week");

-- CreateIndex
CREATE INDEX "idx_schedule_class_day" ON "public"."Schedule"("class_id", "day_of_week");

-- CreateIndex
CREATE INDEX "idx_schedule_teacher_day" ON "public"."Schedule"("teacher_id", "day_of_week");

-- CreateIndex
CREATE INDEX "idx_school_admin_id" ON "public"."School"("admin_id");

-- CreateIndex
CREATE INDEX "idx_student_user_id" ON "public"."Student"("user_id");

-- CreateIndex
CREATE INDEX "idx_student_school_id" ON "public"."Student"("school_id");

-- CreateIndex
CREATE INDEX "idx_student_class_id" ON "public"."Student"("class_id");

-- CreateIndex
CREATE INDEX "idx_student_number" ON "public"."Student"("student_number");

-- CreateIndex
CREATE INDEX "idx_student_school_class" ON "public"."Student"("school_id", "class_id");

-- CreateIndex
CREATE INDEX "idx_subject_teacher_id" ON "public"."Subject"("teacher_id");

-- CreateIndex
CREATE INDEX "idx_teacher_user_id" ON "public"."Teacher"("user_id");

-- CreateIndex
CREATE INDEX "idx_teacher_school_id" ON "public"."Teacher"("school_id");

-- CreateIndex
CREATE INDEX "idx_user_role" ON "public"."User"("role");

-- CreateIndex
CREATE INDEX "idx_user_school_id" ON "public"."User"("school_id");

-- CreateIndex
CREATE INDEX "idx_user_role_school_id" ON "public"."User"("role", "school_id");

-- CreateIndex
CREATE INDEX "idx_user_name" ON "public"."User"("name");
