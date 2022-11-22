import { SidebarItem } from "./atoms";
import Home from "../../constants/icons/Home.svg";
import Dashboards from "../../constants/icons/Dashboards.svg";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-full border-r-2 border-black p-6 items-center">
      <div className="flex items-center">
        <img
          className="w-8 h-8"
          src="https://cdn-icons-png.flaticon.com/512/3024/3024078.png"
          alt="logo"
        />
        <h2 className="text-black font-bold w-max ml-2 mt-2 text-xl">
          anyQueries?
        </h2>
      </div>
      <div className="flex flex-col w-full mt-10">
        <SidebarItem name="Home" icon={Home} path="/" />
        <SidebarItem name="Dashboards" icon={Dashboards} path="/dashboards" />
      </div>
    </div>
  );
};
