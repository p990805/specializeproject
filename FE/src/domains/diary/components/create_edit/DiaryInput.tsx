import React from 'react'

const DiaryInput = () => {
  return (
    <div className="flex flex-col gap-4">
        <input type="text" placeholder="제목을 입력해주세요" className="border-b border-white p-2 text-white placeholder-[rgba(255,255,255,0.7)] text-xl outline-none"/>
        <textarea name="" id="" placeholder="내용을 작성해주세요" className="p-2 bg-[rgba(110,110,110,0.47)] placeholder-[rgba(255,255,255,0.7)] text-md h-70 text-[rgba(255,255,255,0.7)]"></textarea>
    </div>
  )
}

export default DiaryInput