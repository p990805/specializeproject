import SpaceShipComponent from '@/domains/spaceship/components/SpaceShipComponent';
import { useNavigate } from 'react-router-dom';
import smallFrame from "@/assets/images/smallFrame.svg";

const FailEdit = () => {
  const nav = useNavigate();
  const onClickHome = () => {
    nav('/spaceship');
  };
  return (
    <SpaceShipComponent>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
        <img
          src={smallFrame}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-200 animate-pulse"
        />
        <div className="absolute flex flex-col gap-10 items-center justify-center z-50 top-7/14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <p className="text-[#86F5FF] galumuri-font text-3xl">
            회원수정이 실패했습니다.
          </p>
          <div className="box-button">
            <button
              onClick={onClickHome}
              className="button w-35">
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </SpaceShipComponent>
  );
};

export default FailEdit;
