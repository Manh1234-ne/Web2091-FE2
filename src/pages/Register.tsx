import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import toast from "react-hot-toast";

const Register = () => {
    const { setUser } = useAuthStore();
    const navigate = useNavigate();

    const { mutate,  } = useMutation({
        mutationFn: async (values: any) => {
            return await axios.post("http://localhost:3000/register", values);
        },

        onSuccess: ({ data }) => {
            setUser({ ...data.user, token: data.accessToken });
            toast.success("Đăng ký thành công");
            navigate("/");
        },

        onError: () => {
            toast.error("Đăng ký thất bại!");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: 400, margin: "50px auto" }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Nhập username!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Nhập email!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Nhập password!" }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit"  block>
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;
