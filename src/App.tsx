import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log("onFinish");
    console.log(values);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  const data = [
    {
      key: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "Tran Van B",
      email: "b@gmail.com",
      role: "User",
    },
  ];

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
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Layout style={{ minHeight: "500px" }}>
          
          <Sider style={{ color: "white", padding: 20 }}>
            Sidebar
          </Sider>

          <Layout>
            <Header style={{ color: "white" }}>Header</Header>

            <Content style={{ padding: 20 }}>

              {/* Bài 2: Form đăng ký */}
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item label="Name" name="name">
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item label="Email" name="email">
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item label="Password" name="password">
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Submit
                  </Button>
                </Form.Item>
              </Form>

              <br />

              {/* Bài 4: Button mở modal */}
              <Button type="primary" onClick={() => setOpen(true)}>
                Add User
              </Button>

              <br /><br />

              {/* Bài 3: Bảng user */}
              <Table columns={columns} dataSource={data} />

              {/* Modal thêm user */}
              <Modal
                title="Add User"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
              >
                <Input placeholder="Name" style={{ marginBottom: 10 }} />
                <Input placeholder="Email" style={{ marginBottom: 10 }} />
                <Input placeholder="Role" style={{ marginBottom: 10 }} />

                <Button type="primary">
                  Add
                </Button>
              </Modal>

            </Content>

            <Footer>Footer</Footer>
          </Layout>

        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;