import { Layout, Table, Button, Tag, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Toaster, toast } from 'react-hot-toast'

function Lab2() {
    // Table for users (Bài 3)

 

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Major',
            dataIndex: 'major',
        }
    ]

    const data = [
        { key: '1', id: 1, name: 'Nam', age: 20, major: 'IT' },
        { key: '2', id: 2, name: 'Linh', age: 22, major: 'Business' },
        { key: '3', id: 3, name: 'Hà', age: 21, major: 'Design' },
    ];


    const columns1 = [
        {
            title: 'ProductName',
            dataIndex: 'ProductName',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
        },
        {
            title: 'Category',
            dataIndex: 'Category',
        }
    ]

    const data1 = [
        { key: '1', id: 1, ProductName: 'Laptop', Price: 20000, Category: '123' },
        { key: '2', id: 2, ProductName: 'Mouse', Price: 22000, Category: '456' },
        { key: '3', id: 3, ProductName: 'Keyboard', Price: 21000, Category: '789' },
    ];



    const columns2 = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status: string) => (
                <Tag color={status === 'active' ? 'green' : 'red'}>{status}</Tag>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_: any, record: any) => (
                <Space>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </Space>
            ),
        },
    ]

    const data2 = [
        { key: '1', id: 1, name: 'Nam', email: 'nam@example.com', status: 'active' },
        { key: '2', id: 2, name: 'Linh', email: 'linh@example.com', status: 'inactive' },
        { key: '3', id: 3, name: 'Hà', email: 'ha@example.com', status: 'active' },
    ]
    return (
        <>
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
                <Layout style={{ minHeight: "500px" }}>
                    <Sider style={{ color: "white", padding: 20 }}>
                        Sidebar
                    </Sider>
                    <Layout>
                        <Header style={{ color: "white" }}>Header</Header>
                        <Content style={{ padding: 20 }}>
                            <Table columns={columns} dataSource={data} pagination={{pageSize: 3}} />
                            <Table columns={columns1} dataSource={data1} pagination={{pageSize: 3}} />
                            <Table columns={columns2} dataSource={data2} pagination={{pageSize: 3}} />
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>

            <Toaster />
        </>
    )
}

export default Lab2
