import { useEffect } from "react";
import { Button, ButtonGroup, Table } from "flowbite-react";
import useTeacher from "../app/useTeacher";

const Teacher = () => {
  const {
    teachers,
    getTeachers,
    // , addStudent, editStudent, deleteTeacher
  } = useTeacher();
  useEffect(
    () => {
      getTeachers();
    }
    // [change]
  );

  return (
    <div className="p-8 ">
      <Table hoverable style={{ width: "1240px" }}>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Level</Table.HeadCell>
          <Table.HeadCell className="text-center">Activity</Table.HeadCell>
          <Table.HeadCell className="items-end"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {teachers.map((st: any) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {st.id}
              </Table.Cell>
              <Table.Cell>{st.name}</Table.Cell>
              <Table.Cell>{st.username}</Table.Cell>
              <Table.Cell>{st.age}</Table.Cell>
              <Table.Cell>{st.email}</Table.Cell>
              <Table.Cell>{st.group}</Table.Cell>
              <Table.Cell className="flex gap-3  ">
                <div className="flex flex-wrap gap-2">
                  <ButtonGroup>
                    <Button outline color="warning">
                      Edit
                    </Button>
                    <Button outline color="failure">
                      Delete
                    </Button>
                  </ButtonGroup>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Teacher;
