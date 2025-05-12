import { FC } from "react";
import { Card } from "../ui/card";

const Header: FC = () => {
  return (
    <header className="w-full">
      <Card className="w-full">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl text-gray-900 font-medium">Oilà, Larry!</h1>
            <p className="text-sm text-gray-500">
              Here is an overview of your contacts. Manage or create new ones
              with ease!
            </p>
          </div>

          <button className="bg-[#28A745] text-white px-4 py-2 rounded-md hover:bg-[#218838] transition-colors">
            Add Contact
          </button>
        </div>
      </Card>
    </header>
  );
};

export default Header;
