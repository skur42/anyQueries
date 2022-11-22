import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  name: string;
  icon: string;
  path: string;
};

export const SidebarItem = ({ name, icon, path }: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "underline" : "")}
    >
      <div className="flex items-center w-full h-8 mb-2 rounded px-4 py-6 hover:bg-gray-200">
        <img className="w-5 h-5" src={icon} alt="nav" />
        <p className="ml-3 font-medium text-base">{name}</p>
      </div>
    </NavLink>
  );
};
