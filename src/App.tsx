import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import { Avatar, Button, Switch } from "antd";

function App() {
  const context = useContext(UserContext);

  if (!context) return null;
  const { user, setUser } = context;

  const handleLogin = () => {
    setUser({ name: "John Doe", avatar: "https://th.bing.com/th/id/OIP.17L2k7Coosk4SrxO-mqEnwHaHY?w=158&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" });
  };

  const handleLogout = () => setUser(null);
  const theme = useContext(ThemeContext);
  const onToggleTheme = () => theme?.toggle();
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <Avatar src={user.avatar} />
                  <span>Username: {user.name}</span>
                </>
              ) : (
                <span>chưa đăng nhập</span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Button type="primary" onClick={handleLogin}>
                Login
              </Button>
              <Button onClick={handleLogout}>Logout</Button>



              <div className="flex items-center ml-2 space-x-2">
                <span className="text-sm text-white">{theme?.mode === "dark" ? "" : ""}</span>
                <Switch checked={theme?.mode === "dark"} onChange={onToggleTheme} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>

      <Toaster />
    </>
  );
}

export default App;