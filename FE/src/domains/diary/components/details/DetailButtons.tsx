import React from 'react';
const DetailButtons = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      <button className="bg-[#545454] hover:bg-cyan-400 text-white rounded cursor-pointer h-10">
        수정하기
      </button>

      <button className="bg-[rgba(255,255,255,0.7)] hover:bg-indigo-700 text-black rounded cursor-pointer h-10">
        꿈 해몽 하러가기
      </button>
    </div>
  );
};

export default DetailButtons;
