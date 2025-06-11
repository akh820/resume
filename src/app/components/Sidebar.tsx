import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="w-1/3 p-8 bg-gray-100 h-screen sticky top-0 overflow-y-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        CAREER (CI/CD TEST)
      </h1>
      <div className="flex flex-col items-center">
        <Image
          src="https://via.placeholder.com/150" // Placeholder for profile picture
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-8"
        />
        <div className="w-full">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
            개인 정보
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong className="w-16 inline-block">이름</strong> 안 O O
            </p>
            <p>
              <strong className="w-16 inline-block">이메일</strong>
              sample@email.com
            </p>
            <p>
              <strong className="w-16 inline-block">번호</strong> 010-1234-5678
            </p>
            <p>
              <strong className="w-16 inline-block">주소</strong> 서울시 마포구
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
