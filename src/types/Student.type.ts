export type StudentType = {
  id: string;
  name: string;

  email: string;
  group: string;
  age: number;
};

export type StudentStoreType = {
  loading: boolean;
  students: StudentType[];
  error: any;
  getStudents: () => void;
};
