import { Footer } from "../../components/Footer";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import HumanDasboard from "../../../public/image/dashboard.png";
import Lms from "../../../public/icon/lms.png";
import Elearning from "../../../public/icon/e-learning.png";
import Exam from "../../../public/icon/exam.png";
import Qldt from "../../../public/icon/global.png";

export const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard></HeaderDashboard>
      <div className="p-12 flex flex-col gap-8 items-center overflow-x-hidden">
        <div className="relative w-full max-w-[1200px] bg-[#FFF7F4] rounded-2xl mt-16 p-6 sm:p-12 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 sm:text-left">
            <div className="text-[24px] sm:text-[48px] font-bold">
              Xin chào, Viên
            </div>
            <div className="text-[14px] sm:text-[18px] text-[#505050] font-normal">
              Cùng khám phá kho tàng kiến thức bất tận cùng bộ tài liệu độc
              quyền với Rikkei Education nhé!
            </div>
          </div>
          <img
            src={HumanDasboard}
            alt="human"
            className="static sm:absolute w-[165px] h-[183px] sm:w-[280px] sm:h-[295px] object-cover object-center sm:bottom-0 sm:right-12"
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="text-[36px] font-bold">Hệ thống học tập</div>
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div className="bg-[#FAFAFA] rounded-2xl p-8 h-[248px] hover:border hover:border-orange-400">
              <img src={Lms} alt="lms" className="w-[48px] h-[48px]" />
              <div className="flex flex-col mt-8">
                <div className="text-[32px] font-bold">LMS</div>
                <div className="text-[18px] text-[#505050]">
                  Nền tảng quản lý học tập trực tuyến giúp tổ chức, theo dõi, và
                  đánh giá các khóa học và tài liệu học tập
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded-2xl p-8 h-[248px] hover:border hover:border-orange-400">
              <img src={Elearning} alt="lms" className="w-[48px] h-[48px]" />
              <div className="flex flex-col mt-8">
                <div className="text-[32px] font-bold">E-Learning</div>
                <div className="text-[18px] text-[#505050]">
                  Phương pháp học tập trực tuyến thông qua các thiết bị điện tử,
                  cung cấp sự linh hoạt và tiện lợi cho người học
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded-2xl p-8 h-[248px] hover:border hover:border-orange-400">
              <img src={Exam} alt="lms" className="w-[48px] h-[48px]" />
              <div className="flex flex-col mt-8">
                <div className="text-[32px] font-bold">Bài kiểm tra</div>
                <div className="text-[18px] text-[#505050]">
                  Các bài kiểm tra được thiết kế để đánh giá trình độ và hiệu
                  biết của người học trong một lĩnh vực cụ thể
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded-2xl p-8 h-[248px] hover:border hover:border-orange-400">
              <img src={Qldt} alt="lms" className="w-[48px] h-[48px]" />
              <div className="flex flex-col mt-8">
                <div className="text-[32px] font-bold">Quản lý đào tạo</div>
                <div className="text-[18px] text-[#505050]">
                  Công cụ tạo và quản lý các bài kiểm tra trực tuyến, giúp giáo
                  viên đánh giá kiến thức của học sinh một cách dễ dàng và nhanh
                  chóng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
