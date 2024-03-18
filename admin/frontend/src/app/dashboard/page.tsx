import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-200">
        <Header />
        <h1 className="p-4">Main Content</h1>
      </div>
    </div>
  );
};

export default App;
