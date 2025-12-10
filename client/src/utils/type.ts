export interface User {
  userId: number;
  userCode: string;
  fullName: string;
  role: string;
  email: string;
  password: string;
  dateOfBirthday: string;
  avatarUrl: string;
  status: boolean;
  isVerified: boolean;
  createBy: string;
}

export interface Course {
  courseId: number;
  name: string;
  description: string;
  chapterCount: number;
  status: boolean;
  thumnailUrl: string;
}

export interface Chapter {
  chapterId: number;
  name: string;
  pos: number;
  lessCount: number;
  courseId: number;
}

export type LessonType = "Video" | "Document" | "Quizz";

export interface Lesson {
  lessonId: number;
  name: string;
  pos: number;
  type: LessonType;
  chapterId: number;
}

export interface LessionQuizz {
  LessionQuizzId: number;
  questionId: string;
  lessonId: string;
}

export interface LessonVideo {
  lessonVideoId: number;
  lessonId: number;
  videoUrl: string;
  duration: number;
}

export interface LessonDocument {
  lessonDocumentId: number;
  lessonId: number;
  documentUrl: string;
}

export interface CourseProgress {
  courseProgressId: number;
  userId: string;
  courseId: number;
  classId: number;
  progess: number;
}

export interface ChapterProgress {
  chapterProgressId: number;
  userId: string;
  chapterId: number;
  classId: number;
  progress: number;
}

export interface LessonProgress {
  lessonProgressId: number;
  userId: string;
  lessonId: number;
  classId: number;
  progess: number;
}

export type ClassRoomStatus = "active" | "inactive";

export interface ClassRoom {
  classId: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ClassRoomStatus;
  createBy: string;
}

export interface ClassUser {
  classUserId: number;
  classId: number;
  userId: string;
  joinAt: string;
}

export interface ClassCourse {
  classCourseId: number;
  classId: number;
  courseId: number;
  addedAt: string;
}

export type AttendanceStatus = "present" | "late" | "absent";

export interface Attendance {
  attendanceId: number;
  scheduleId: number;
  userId: string;
  status: AttendanceStatus;
  attendanceAt: string;
  note: string;
}

export interface Period {
  periodId: number;
  name: string;
  startTime: string;
  endTime: string;
}

export interface SessionAssignment {
  sessionAssignmentId: number;
  scheduleId: number;
  lessonId: number;
}

export interface UserSessionAssignment {
  userSessionAssignmentId: number;
  sessionAssignmentId: number;
  userId: string;
  isCompleted: string;
  isLated: string;
  doTime: string;
}

export interface Schedule {
  scheduleId: number;
  classId: number;
  periodId: number;
  courseId: number;
  scheduleDate: string;
  isManual: boolean;
}

export interface Question {
  questionId: number;
}
