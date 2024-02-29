import { Alert, Button, Label, Select, TextInput } from 'flowbite-react';
import { useState, FormEvent } from 'react';
import { TeacherInfo } from '../types/Teacher.type';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';

type TeacherFormType = {
  initialValues: TeacherInfo;
  validate: (values: TeacherInfo) => {
    name: string;
    age: number | string;
    email: string;
  };
  onSubmit: (value: TeacherInfo) => void;
};

const AddTeachers = () => {
  const formik: FormikProps<TeacherInfo> = useFormik<TeacherInfo>({
    initialValues: {
      name: '',
      email: '',
      age: '',
      level: 'Junior',
    },
    validate: (values) => {
      const errors: {
        name: string;
        age: string;
        email: string;
      } = {
        name: '',
        email: '',
        age: '',
      };
      if (values.name === '') {
        errors.name = 'Name is required';
      }
      if (values.email === '') {
        errors.email = 'Email is required';
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      if (values.age === '') {
        errors.age = 'Username is required';
      }
      return errors;
    },
  } as TeacherFormType);

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (
        !formik.values.name ||
        !formik.values.age ||
        !formik.values.email
      ) {
        setErrorMsg('Please fill all required fields');
      } else {
        setErrorMsg('');
        const response = await fetch('http://localhost:3000/teachers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formik.values),
        });

        if (!response.ok) {
          setErrorMsg('Failed to add teacher');
        } else {
          formik.setValues({
            name: '',
            email: '',
            age: '',
            level: 'Junior',
          });
          navigate('/teachers');
        }
      }
    } catch (error) {
      setErrorMsg('Failed to add teacher');
    }
  };

  return (
    <div>
      <h2 className="text-center text-5xl	my-4">Add Teachers</h2>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 m-auto"
      >
        <div>
          <Label htmlFor="name">Name:</Label>
          <TextInput
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 pt-2">{formik.errors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="age">Username:</label>
          <TextInput
            type="text"
            id="age"
            name="age"
            onBlur={formik.handleBlur}
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.touched.age && formik.errors.age && (
            <span className="text-red-500 pt-2">{formik.errors.age}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <TextInput
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 pt-2">{formik.errors.email}</span>
          )}
        </div>
        <div>
          <Label htmlFor="level">Level:</Label>
          <Select
            id="level"
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
          >
            <option value="Junior">Junior</option>
            <option value="React N25">React N25</option>
            <option value="React N2">React N2</option>
          </Select>
        </div>
        <Button type="submit">Add Teacher</Button>
        {errorMsg && (
          <Alert color="failure" className="mt-5">
            {errorMsg}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default AddTeachers;
