import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { UserCreateModal } from "./UserCreateModal";
import TestComponent from "./TestComponent";
import Table from "../../components/Table/Table";
import { getUsers } from "../../services/api/user";
import { userStore } from "../../stores/user";

const UserList = () => {
  const [TABLE_HEAD, setTABLE_HEAD] = useState([
    "Name",
    "Job",
    "Employed",
    "Action"
  ]);

  const user = userStore((state) => state.user);

  const [test, setTest] = useState("coucou");

  const [modal, setOpen] = useState(false);

  const [value, setValue] = useState("bonjour");

  const [table, setTable] = useState([]);

  const changeValueModal = () => {
    setOpen(true);
  };

  const receiveProps = () => {
    setOpen(false);
  };

  const receiveFormValues = (values) => {
    setOpen(false);
    // call api to add new user
    //values.date = new Date()

    const newItem = [...table, values];
    //newItem.push(values)
    setTable(newItem);
  };

  useEffect(() => {
    const loadUsers = async () => {
      const response = await getUsers();
      console.log("🚀 ~ loadPosts ~ response:", response);
    };

    loadUsers();
  }, []);

  return (
    <>
      {user.email}
      <Card className="h-full w-full overflow-scroll">
        <h1>Liste des utilisateurs</h1>
        <button
          className=" my-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
          type="button"
          onClick={changeValueModal}
        >
          <i className="fa-solid fa-plus"></i>
          Add
        </button>

        <UserCreateModal
          open={modal}
          send={receiveProps}
          sendFormValues={receiveFormValues}
        />

        {/* <Table tableHead={TABLE_HEAD} tableData={table} /> */}
      </Card>

      <TestComponent valueProps={value} />
    </>
  );
};

export default UserList;
