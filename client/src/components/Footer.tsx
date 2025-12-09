import Background from "../../public/image/background-footer.jpg";
import Logo from "../../public/icon/logo-footer.png";
import Address from "../../public/icon/address-footer.png";
import Hotline from "../../public/icon/hotline-footer.png";
import Email from "../../public/icon/email-footer.png";
import Facebook from "../../public/icon/facebook.png";
import Youtube from "../../public/icon/youtube.png";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className="overflow-x-hidden px-12 bg-cover bg-center bg-no-repeat pt-24 pb-8 bg-[#DD673C] bg-blend-color-burn flex flex-col justify-center items-center"
    >
      <div className="w-full pb-6 border-b-2">
        <div className="flex flex-col gap-3 items-center  ">
          <img src={Logo} alt="logo" className="w-[80px] h-[72px]" />
          <div className="font-extrabold text-white text-[18px] text-center">
            MANKAI ACADEMY - HỌC VIỆN ĐÀO TẠO PHÁT TRIỂN TIẾNG NHẬT THỰC CHIẾN
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-8 max-sm:flex-col max-sm:gap-6">
        <div className="flex flex-col gap-4 w-[378px] max-sm:w-[343px]">
          <div className="text-[16px] text-white font-normal">
            THÔNG TIN LIÊN HỆ
          </div>
          <div className="flex gap-4 items-center text-white">
            <img src={Address} alt="Address" className="w-[32px] h-[32px]" />
            <div className="font-bold">
              Địa chỉ:{" "}
              <span className="font-normal">
                Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Nam Từ Liêm, Hà Nội
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center text-white">
            <img src={Hotline} alt="Address" className="w-[32px] h-[32px]" />
            <div className="font-bold">
              Hotline: <span className="font-normal">0835 662 538</span>
            </div>
          </div>
          <div className="flex gap-4 items-center text-white">
            <img src={Email} alt="Address" className="w-[32px] h-[32px]" />
            <div className="font-bold">
              Email: <span className="font-normal">support@mankai.edu.vn</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[200px]">
          <div className="text-[16px] text-white font-normal">
            THÔNG TIN LIÊN HỆ
          </div>
          <div className="flex gap-4">
            <img src={Facebook} alt="fb" className="w-[24px] h-[24px]" />
            <img src={Youtube} alt="yt" className="w-[24ppx] h-[24px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[380px] text-white max-sm:w-[343px]">
          <div>
            “Hạnh phúc là điểm khởi đầu của giáo dục và cũng là đích đến cuối
            cùng. Giang, với hơn 10 năm kinh nghiệm giảng dạy và luyện thi JLPT,
            mong muốn giúp các bạn rút ngắn thời gian, vượt qua khó khăn trong
            việc học tiếng Nhật, và chinh phục tấm bằng JLPT. Hãy biến học tập
            thành không chỉ là mục tiêu phát triển bản thân mà còn là hành trình
            hạnh phúc để hiện thực hóa những giấc mơ.”
          </div>
          <div className="flex items-end self-end font-bold italic">
            Giang Suke Sensei - CEO Mankai Academy
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 lg:self-start sm:self-center">
        <div className="text-white text-center text-[12px]">
          &copy; 2024 By Rikkei Academy - Rikkei Education - All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
