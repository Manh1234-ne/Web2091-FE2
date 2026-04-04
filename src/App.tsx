import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Avatar, Button, Switch } from "antd";
import { useAuthStore } from "./stores/useAuthStore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditStory from "./pages/Lab6";

function App() {
  const user = useAuthStore((s) => s.user);
  const clearUser = useAuthStore((s) => s.clearUser);

  const handleLogout = () => clearUser();
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
                  <Avatar src={(user as any).avatar} />
                  <div className="flex flex-col text-left">
                    <span>Email: {(user as any).email || (user as any).username || ""}</span>
                    <span className="text-sm">Đã đăng nhập</span>
                  </div>
                </>
              ) : (
                <span>Chưa đăng nhập</span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {!user && (
                <Link to="/login">
                  <Button type="primary">Login</Button>
                </Link>
              )}
              {!user && (
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              )}
              {user && <Button onClick={handleLogout}>Logout</Button>}



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

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<EditStory />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;