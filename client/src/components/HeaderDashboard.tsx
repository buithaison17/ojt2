import LogoMankai from "../../public/icon/logomankai.png";
import SearchIcon from "../../public/icon/search-icon.png";
import Notification from "../../public/icon/notification.png";
import MenuIcon from "../../public/icon/menu.png";

export const HeaderDashboard = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b-2">
      <div className="px-10">
        <img
          src={LogoMankai}
          alt=""
          className="w-[47px] h-[56px] object-cover object-center cursor-pointer"
        />
      </div>
      <div className="px-10 flex gap-4 items-center">
        <img
          src={MenuIcon}
          alt="MenuIcon"
          className="hidden max-sm:block w-[24px] h-[24px] cursor-pointer"
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="w-[24px] h-[24px] cursor-pointer max-sm:hidden"
        />
        <img
          src={Notification}
          alt="Notification"
          className="w-[24px] h-[24px] cursor-pointer max-sm:hidden"
        />
        <img
          src="https://vcdn1-giaitri.vnecdn.net/2025/12/03/avatar3top-1764746151-7785-1764746186.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=Okk3xCA75RVFIukluGBzDQ"
          alt="avatar"
          className="bg-red-500 w-[50px] h-[50px] rounded-full object-center object-cover cursor-pointer max-sm:hidden"
        />
      </div>
    </div>
  );
};
