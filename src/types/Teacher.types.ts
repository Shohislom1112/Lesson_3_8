export type TeacherType = {
    id: string;
    name: string;
    username: string;
    email: string;
    level: string;
    age: number
  };
  
  export type TeacherStoreType = {
    loading: boolean;
    teachers: TeacherType[];
    error: any;
    getTeachers: () => void;
  };
  