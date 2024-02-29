export type TeacherType = {
id: number;
    name: string;
    age: number;
    email: string;
    level: string;
  };
  
  export type TeacherStoreType = {
    loading: boolean;
    teachers: TeacherType[];
    error: any;
    getTeachers: () => void;
  };
  
  