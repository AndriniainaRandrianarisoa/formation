import React from "react";
import NavBar from "./NavBar";
import { Search } from "./Search";
import { UserNav } from "./UserNav";

const NavHeader = () => {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <NavBar />

            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
