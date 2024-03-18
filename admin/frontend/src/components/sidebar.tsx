export default function Sidebar() {
  return (
    <div className="bg-white text-gray-800 w-64 h-screen">
      <div className="p-4">Admin</div>
      <ul>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">대시보드</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">은행</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">계좌</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">고객</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">거래내역</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">서비스</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">자동생성</li>
        <li className="p-4 hover:bg-pink-500 cursor-pointer">설정</li>
      </ul>
    </div>
  );
}
