import { create } from "zustand";
import { StudentStoreType } from "../types/Student.type";
import axios from "axios";

const useStudent = create<StudentStoreType>((set) => ({
  loading: false,
  students: [],
  error: null,
  getStudents: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const res = await axios.get("http://localhost:3000/students");
      const data = await res.data();
      set(() => ({
        loading: false,
        students: data,
        error: null,
      }));
    } catch (err: any) {
      set(() => ({
        loading: false,
        error: err.message,
      }));
    }
  },
  // addstudents: async (students) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.post('http://localhost:3000/students', students);
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

  // editstudents async (students) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.put(`http://localhost:3000/students/${students.id}`, students);
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

  // deletestudents: async (studentsId) => {
  //   set(() => ({
  //     loading: true,
  //   }));
  //   try {
  //     await axios.delete(`http://localhost:3000/students/${studentsId}`);
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
}));

export default useStudent;
