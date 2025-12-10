import Logo from "../../public/icon/logoadmin.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Outlet } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div className="flex h-screen">
      {/* Side bar bên trái */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="border-b border-r">
          <div className="px-6 py-3 flex gap-2 items-center h-[70px]">
            <img src={Logo} alt="logo" className="size-8 rounded-lg" />
            <div className="text-[18px] font-bold">EduAdmin</div>
          </div>
        </div>
        {/* Menu */}
        <div className="flex flex-col flex-1 border-b border-r px-3">
          <div className="mt-3">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex gap-1 items-center cursor-pointer px-4 py-3 font-semibold rounded-lg ${
                  isActive ? "bg-[#2563EB] text-white shadow" : "text-gray-500"
                }`
              }
            >
              <HomeIcon fontSize="small"></HomeIcon>
              <div>Tổng quan</div>
            </NavLink>
          </div>
          <NavLink
            to="students"
            className={({ isActive }) =>
              `flex gap-1 items-center cursor-pointer px-4 py-3 font-semibold rounded-lg ${
                isActive ? "bg-[#2563EB] text-white shadow" : "text-gray-500"
              }`
            }
          >
            <PersonIcon fontSize="small"></PersonIcon>
            <div>Quản lý học sinh</div>
          </NavLink>
          <NavLink
            to="teachers"
            className={({ isActive }) =>
              `flex gap-1 items-center cursor-pointer px-4 py-3 font-semibold rounded-lg ${
                isActive ? "bg-[#2563EB] text-white shadow" : "text-gray-500"
              }`
            }
          >
            <EngineeringIcon fontSize="small"></EngineeringIcon>
            <div>Quản lý giảng viên</div>
          </NavLink>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <BookIcon fontSize="small"></BookIcon>
            <div>Quản lý khóa học</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <LibraryBooksIcon fontSize="small"></LibraryBooksIcon>
            <div>Quản lý chương học</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <BookmarksIcon fontSize="small"></BookmarksIcon>
            <div>Quản lý bài học</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <SchoolIcon fontSize="small"></SchoolIcon>
            <div>Quản lý lớp học</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <CalendarTodayIcon fontSize="small"></CalendarTodayIcon>
            <div>Quản lý ca học</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <QuestionAnswerIcon fontSize="small"></QuestionAnswerIcon>
            <div>Quản lý câu hỏi</div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-4 py-3 text-gray-500 font-semibold">
            <ImportContactsIcon fontSize="small"></ImportContactsIcon>
            <div>Quản lý bài thi</div>
          </div>
        </div>
        <div className="px-6 py-3 border-r flex gap-2 items-center">
          <img src="" alt="" className="size-12 bg-red-500 rounded-full" />
          <div className="flex flex-col">
            <div>Bùi Thái Sơn</div>
            <div className="text-sm text-gray-500">Quản trị viên</div>
          </div>
          <div className="ml-4 cursor-pointer">
            <LogoutIcon fontSize="small"></LogoutIcon>
          </div>
        </div>
      </div>
      {/* Nôi dung trang bên phải */}
      <Outlet></Outlet>
    </div>
  );
};
