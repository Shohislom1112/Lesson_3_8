export type StudentType = {
  id: number;
  name: string;
  age: number;
  email: string;
  group: string;
};

export type StudentStoreType = {
  loading: boolean;
  students: StudentType[];
  error: any;
  getStudents: () => void;
};

