import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Spin } from "antd";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStory() {
    const [form] = Form.useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    // get data
    const { data, isLoading } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        }
    })

    // fill form
    useEffect(() => {
        console.log(data);
        if (data) {
            form.setFieldsValue(data)
        }
    }, [data])



    // edit
    const mutation = useMutation({
        mutationFn: async (values: any) => {
            return axios.put(`http://localhost:3000/stories/${id}`, values);
        },
        onSuccess: () => {
            // reload list
            queryClient.invalidateQueries({ queryKey: ["stories"] });
            

            // thong bao
            toast.success("ĐÃ SỬA OKÊ")
            // quay lai
            navigate("/Lab5");
        }
    })



    const onFinish = (values: any) => {
        console.log(values);
        mutation.mutate(values)

    }

    if (isLoading) return <Spin />

    return (
        <Form onFinish={onFinish} form={form} layout="vertical">
            <Form.Item label="Ten truyen" name="title"
                rules={[
                    { required: true, message: 'Bạn hãy nhập tên truyện' }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Tac gia" name="author"
                rules={[
                    { required: true, message: 'Bạn hãy nhập tên tác giả' }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Hinh anh" name="image">
                <Input />
            </Form.Item>
            <Form.Item label="Ngay dang" name="createdAt">
                <Input />
            </Form.Item>
            <Button htmlType="submit" disabled={isLoading || mutation.isPending}>Submit</Button>
        </Form>
    )
}