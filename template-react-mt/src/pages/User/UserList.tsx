import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/api/user";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Tooltip
} from "@material-tailwind/react";

const UserList = () => {
  const [test, setTest] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await getAllUsers();
      console.log("🚀 ~ loadPosts ~ response:", response);
      setUsers(response);
    };

    loadPosts();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h1>Liste des utilisateurs </h1>
          <div className="5 flex items-center gap-0">
            <Link to="/create-user">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
                type="button"
              >
                <i className="fa-solid fa-plus"></i>
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ul>
        {users.map((user, index) => (
          <Card className="p-3 my-2 shadow-lg" key={user.id}>
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-4"
            >
              <Avatar
                size="md"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {user.name}
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <div className="group inline-flex flex-wrap items-center gap-1">
                      <Tooltip content="Voir">
                        <button
                          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs bg-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <i
                              className="fas fa-pen-to-square "
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </Tooltip>
                      <Tooltip content="Supprimer">
                        <button
                          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs bg-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </span>
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody className=" p-0">
              <ul className="flex flex-col">
                <li className="flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/20">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <Typography className="font-normal">{user.email}</Typography>
                </li>
                <li className="flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/20">
                    <i className="fa-regular fa-building"></i>
                  </span>
                  <Typography className="font-normal">
                    {user.company.name}
                  </Typography>
                </li>
                <li className="flex items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-white/20">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <Typography className="font-normal">
                    {user.address.city}
                  </Typography>
                </li>
              </ul>
            </CardBody>
          </Card>
        ))}
      </ul>
    </>
  );
};

export default UserList;
