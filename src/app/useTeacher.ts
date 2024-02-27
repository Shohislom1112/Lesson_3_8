import { create } from "zustand";
// import { StudentStoreType } from "../types/Student.type";
import { TeacherStoreType } from "../types/Teacher.types";

const useTeacher = create<TeacherStoreType>((set) => ({
  loading: false,
  teachers: [],
  error: null,
  getTeachers: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const res = await fetch("http://localhost:3000/students");
      const data = await res.json();
      set(() => ({
        loading: false,
        teachers: data,
        error: null,
      }));
    } catch (err: any) {
      set(() => ({
        loading: false,
        error: err.message,
      }));
    }
  },
}))

export default useTeacher;
