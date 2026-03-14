import React, { useState } from 'react'
import { Form, Input, Button, Select, InputNumber, Card } from 'antd'

const { Option } = Select

function Lab3() {
    const [postData, setPostData] = useState<any | null>(null)

    const onLogin = (values: any) => {
        console.log('Login values:', values)
    }

    const onRegister = (values: any) => {
        console.log('Register values:', values)
    }

    const onProduct = (values: any) => {
        console.log('Product submit:', values)
    }

    const onPost = (values: any) => {
        setPostData(values)
    }

    return (
        <div className="max-w-4xl mx-auto mt-6 px-4">
            <h1 className="text-2xl font-bold mb-4">Bài 1</h1>
            <Card style={{ marginBottom: 20 }}>
                <Form name="login" layout="vertical" onFinish={onLogin}>
                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email bắt buộc' }, { type: 'email', message: 'Email không đúng định dạng' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password bắt buộc' }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </Card>

            <h1 className="text-2xl font-bold mb-4">Bài 2</h1>
            <Card style={{ marginBottom: 20 }}>
                <Form name="register" layout="vertical" onFinish={onRegister}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Name bắt buộc' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email bắt buộc' }, { type: 'email', message: 'Email không đúng định dạng' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Phone bắt buộc' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Password bắt buộc' }, { min: 6, message: 'Password tối thiểu 6 ký tự' }]} hasFeedback>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="confirm" label="Confirm Password" dependencies={["password"]} hasFeedback rules={[{ required: true, message: 'Confirm Password bắt buộc' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve() } return Promise.reject(new Error('Confirm Password phải trùng Password')) }, })]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </Card>

            <h1 className="text-2xl font-bold mb-4">Bài 3</h1>
            <Card style={{ marginBottom: 20 }}>
                <Form name="product" layout="vertical" onFinish={onProduct} initialValues={{ price: 0, quantity: 1 }}>
                    <Form.Item name="productName" label="Tên sản phẩm" rules={[{ required: true, message: 'Tên sản phẩm bắt buộc' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="price" label="Giá" rules={[{ required: true, message: 'Giá bắt buộc' }]}>
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>

                    <Form.Item name="quantity" label="Số lượng" rules={[{ required: true, message: 'Số lượng bắt buộc' }]}>
                        <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>

                    <Form.Item name="description" label="Mô tả">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>

            <h1 className="text-2xl font-bold mb-4">Bài 4</h1>
            <Card style={{ marginBottom: 20 }}>
                <Form name="post" layout="vertical" onFinish={onPost}>
                    <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Title bắt buộc' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Category bắt buộc' }]}>
                        <Select>
                            <Option value="news">News</Option>
                            <Option value="sports">Sports</Option>
                            <Option value="life">Life</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="slug" label="Slug">
                        <Input />
                    </Form.Item>

                    <Form.Item name="content" label="Content">
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Form.Item name="imageUrl" label="Image URL">
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>

                {postData && (
                    <div style={{ marginTop: 16 }}>
                        <h3>Submitted Data</h3>
                        <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{JSON.stringify(postData, null, 2)}</pre>
                    </div>
                )}
            </Card>
        </div>
    )
}

export default Lab3