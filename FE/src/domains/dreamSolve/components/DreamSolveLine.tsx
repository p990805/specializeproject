const DreamSolveLine = () => {
  return (
    <div className="flex items-center my-1 w-[80%] justify-center">
      {/* 왼쪽 마름모 */}
      <div className="w-1 h-1 bg-[#6C4D2C] transform rotate-45"></div>

      {/* 가운데 선 */}
      <div className="flex-1 h-[0.5px] bg-[#6C4D2C]"></div>

      {/* 오른쪽 마름모 */}
      <div className="w-1 h-1 bg-[#6C4D2C] transform rotate-45"></div>
    </div>
  );
};

export default DreamSolveLine;
