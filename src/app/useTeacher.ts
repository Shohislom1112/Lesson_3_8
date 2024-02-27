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
}));
// addTeachers: async (teachers) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.post('http://localhost:3000/teachers', teachers);
  //   } catch (err) {
  //     set(() => ({
  //       error: err.message,
  //     }));
  //   } finally {
  //     set(() => ({
  //       loading: false,
  //     }));
  //   }
  // },

  // editTodo: async (teachers) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.put(`http://localhost:3000/teachers/${teachers.id}`, teachers);
  //   } catch (err) {
  //     set(() => ({
  //       error: err.message,
  //     }));
  //   } finally {
  //     set(() => ({
  //       loading: false,
  //     }));
  //   }
  // },

  // deleteTodo: async (teachersId) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.delete(`http://localhost:3000/teachers/${teachersId}`);
  //   } catch (err) {
  //     set(() => ({
  //       error: err.message,
  //     }));
  //   } finally {
  //     set(() => ({
  //       loading: false,
  //     }));
  //   }
  // },

export default useTeacher;
