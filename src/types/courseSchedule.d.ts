// Course
export type Course = {
  kodeMataKuliah?: string;
  namaMataKuliah?: string;
  sks?: number;
  kelompok?: number;
  dosen?: string;
  waktu?: string;
};

export type CourseSchedule = Course[]
