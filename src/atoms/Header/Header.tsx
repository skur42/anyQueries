import Profile from "../../constants/icons/Profile.svg";
import { routeNames } from "../../constants/routes/routeNames";
import { usePathname } from "../../hooks/usePathname";

export const Header = () => {
  return (
    <div className="flex w-full items-end justify-between mb-6 sticky top-0 bg-white">
      <h1 className="font-semibold text-lg">{routeNames[usePathname()]}</h1>
      <div className="flex items-center">
        <img className="w-5 h-5" src={Profile} alt="profile" />
        <p className="font-medium text-base ml-2">Ankur</p>
      </div>
    </div>
  );
};
