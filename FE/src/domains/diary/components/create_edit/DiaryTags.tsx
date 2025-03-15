import React, { useState, FC, ChangeEvent } from 'react';

interface DiaryTagsProps {
  // 필요한 경우, 부모로부터 받아올 props가 있다면 여기에 정의
}

const DiaryTags: FC<DiaryTagsProps> = () => {
  // 선택된 태그를 담는 상태
  const [tags, setTags] = useState<string[]>([]);
  // 인풋에 입력 중인 텍스트
  const [inputValue, setInputValue] = useState<string>('');

  // 실제로 사용할 수 있는 태그(예시)
  const possibleTags: string[] = ['자전거', '자각몽', '자유', '사자', '애자일'];

  // inputValue가 포함된 태그만 필터링 + 이미 선택된 태그는 제외
  const filteredOptions: string[] = possibleTags.filter(
    (tag) => tag.includes(inputValue) && !tags.includes(tag)
  );

  // input 변경 시 상태 갱신
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 자동완성 옵션을 클릭하면 tags에 추가하고 input은 초기화
  const handleOptionClick = (tag: string) => {
    setTags([...tags, tag]);
    setInputValue('');
  };

  // 선택된 태그 삭제 기능
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-1 relative">
      <h1 className="text-white text-lg">태그</h1>

      {/* 선택된 태그들 */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <div
            key={tag}
            className="text-white bg-gray-700 px-2 py-1 rounded flex items-center gap-1"
          >
            <span>{tag}</span>
            <button onClick={() => removeTag(tag)}>x</button>
          </div>
        ))}
      </div>

      {/* 태그 입력 필드 */}
      <input
        type="text"
        className="border border-white"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* 자동완성 옵션 리스트 */}
      {inputValue && filteredOptions.length > 0 && (
        <ul className="absolute top-[100px] left-0 bg-white text-black border border-gray-300 w-[200px]">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiaryTags;
