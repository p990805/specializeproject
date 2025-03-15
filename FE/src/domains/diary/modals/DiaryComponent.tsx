import React from 'react'
import DiaryHeader from '../components/create_edit/DiaryHeader'
import DiaryInput from '../components/create_edit/DiaryInput'
import DiaryTags from '../components/create_edit/DiaryTags'

interface DiaryProps {
    onClose: () => void
}

const DiaryComponent: React.FC<DiaryProps> = ({onClose}) => {
   
  return (
    <div className="w-screen h-screen relative">
        <div className="absolute inset-0 backdrop-blur-sm bg-black" onClick={onClose}></div>
        {/*모달 시작하는 부분 */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transform w-[43%] h-[65%] bg-[rgba(110,110,110,0.47)] p-1">
            {/*모달 내용*/}
            <div className="w-full h-full py-7 px-3 pl-7 overflow-y-scroll custom-scrollbar">
                {/*모달 컴포넌트 모아둘 공간 */}
                <div className="pr-3 flex flex-col gap-3">
                    <div>
                        <DiaryHeader onClose={onClose}/>
                    </div>

                    <div>
                        <DiaryInput />
                    </div>

                    <div>
                        <DiaryTags />
                    </div>

                </div>
            </div>
        
        </div>
    </div>
  )
}

export default DiaryComponent