import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "antd";
import type { ColumnType } from "antd/es/table";
import type { User } from "../../utils/type";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns: ColumnType<User>[] = [
  {
    title: "Mã giảng viên",
    dataIndex: "userCode",
    key: "id",
  },
  {
    title: "Họ và tên",
    dataIndex: "fullName",
    key: "fullName",
    render: (value, record) => (
      <div className="flex gap-2 items-center">
        <img
          src={record.avatarUrl}
          className="size-12 rounded-full bg-red-500"
          alt="logo"
        />
        <div className="w-24">{value}</div>
      </div>
    ),
  },
  {
    title: "Ngày sinh",
    dataIndex: "dateOfBirthday",
    key: "dateOfBirthday",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <div
        className={`px-2 py-1 rounded-xl w-fit ${
          status ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"
        }`}
      >
        {status ? "Đang hoạt động" : "Ngừng hoạt động"}
      </div>
    ),
  },
  {
    title: "Thao tác",
    key: "action",
    render: () => {
      return (
        <div className="flex gap-2 items-center">
          <div className="cursor-pointer text-red-500">
            <EditIcon></EditIcon>
          </div>
          <div className="cursor-pointer text-gray-500">
            <DeleteIcon></DeleteIcon>
          </div>
        </div>
      );
    },
  },
];

const data: User[] = [
  {
    userId: 1,
    userCode: "123",
    fullName: "Sơn Bùi rất chi là đẹp trai",
    dateOfBirthday: "17/01/2006",
    role: "Teacher",
    email: "sonbui@gmail.com",
    password: "123",
    avatarUrl: "",
    status: false,
    isVerified: true,
    createBy: "1",
  },
];

export const TeacherManagement = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Tiêu đề trang */}
      <div className="px-6 py-1 my-auto border-b h-[70px]">
        <div className="text-2xl font-bold">Quản lý giảng viên</div>
        <div className="text-sm text-gray-500">
          Quản lý thông tin và tài khoản giảng viên
        </div>
      </div>
      {/* Nội dung chính của trang */}
      <div className="flex-1 bg-[#F9FAFB] p-5">
        <div className="py-3 px-5 rounded-lg shadow bg-white flex flex-col gap-2">
          {/* Tìm kiếm và thêm giảng viên */}
          <div className="flex justify-between items-center">
            <div className="relative">
              <SearchIcon
                fontSize="small"
                className="absolute left-2 -translate-y-1/2 top-1/2"
              ></SearchIcon>
              <input
                type="text"
                className="border w-[380px] pl-8 pr-3 py-1 rounded-md outline-none focus:border-blue-500 hover:border-blue-500"
                placeholder="Tìm kiếm theo tên hoặc theo mã giảng viên..."
              />
            </div>
            <button className="flex items-center bg-blue-600 hover:bg-blue-500 text-white py-2 px-3 rounded-md">
              <AddIcon fontSize="small"></AddIcon>
              Thêm giảng viên mới
            </button>
          </div>
          {/* Lọc theo trạng thái */}
          <select className="w-[180px] py-1 mt-2 rounded-md border px-2 outline-none hover:border-blue-500 focus:border-blue-500">
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
          </select>
          {/* Danh sách giảng viên */}
          <Table<User>
            columns={columns}
            dataSource={data}
            rowKey="userCode"
          ></Table>
        </div>
      </div>
    </div>
  );
};
