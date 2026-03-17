import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Checkbox, Select } from "antd";
import axios from 'axios'
import toast from "react-hot-toast";
import { useMemo } from "react";

interface Category {
    id?: number;
    title: string;
    description?: string;
    active: boolean;
}

interface Story {
    id?: number;
    name: string;
    author?: string;
    image?: string;
    description?: string;
    categoryId?: number | string;
}

function CategoryForm() {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (values: Category) => {
            await axios.post("http://localhost:3000/categories", values);
        },
        onSuccess: () => {
            toast.success("Category created successfully!");
        },
        onError: () => {
            toast.error("Failed to create category.");
        },
    })

    const onFinish = (values: Category) => {
        mutate(values)
    }

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter a title' }]}>
                <Input placeholder="Title" />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="active" valuePropName="checked">
                <Checkbox>Active</Checkbox>
            </Form.Item>
            <Button htmlType="submit" loading={isPending}>Create Category</Button>
            {isSuccess && (
                <div style={{ color: "green" }}>Category created successfully</div>
            )}
        </Form>
    )
}

export default function Lab4() {
    const { data: categories = [], isLoading: categoriesLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/categories');
            return res.data as Category[];
        }
    })

    const categoryOptions = useMemo(() => {
        return (categories || []).map((c: Category) => ({ label: c.title, value: c.id }));
    }, [categories]);

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (values: Story) => {
            await axios.post("http://localhost:3000/stories", values);
        },
        onSuccess: () => {
            toast.success("Story created successfully!");
        },
        onError: () => {
            toast.error("Failed to create story.");
        },
    })

    const onFinish = (values: Story) => {
        mutate(values)
    }

    return (
        <div className="lab4-forms">
            <div className="lab4-col">
                <h3>Create Category</h3>
                <CategoryForm />
            </div>

            <div className="lab4-col">
                <h3>Create Story</h3>
                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: '100%' }}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
                        <Input placeholder="name" />
                    </Form.Item>
                    <Form.Item label="Tác giả" name="author">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Image URL" name="image">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Category" name="categoryId">
                        <Select
                            options={categoryOptions}
                            loading={categoriesLoading}
                            placeholder="Select a category"
                        />
                    </Form.Item>
                    <Button htmlType="submit" loading={isPending}>Submit</Button>
                    {isSuccess && (
                        <div style={{ color: "green" }}>Story created successfully</div>
                    )}
                </Form>
            </div>
        </div>
    )
}