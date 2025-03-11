import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      <video
        src="loginVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {/* 로그인 폼 컴포넌트 */}
        <LoginForm />

        {/* 오른쪽 이미지 */}
        <div className="h-[75vh]">
          <img src="loginImage.png" alt="loginImage" className="object-contain h-full rounded" />
        </div>
      </div>
    </div>
  );
};

export default Login;