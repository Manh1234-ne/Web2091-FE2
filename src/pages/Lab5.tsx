import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Lab5() {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const qc = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (id: number) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] }); // reload list
        },
    });

    const columns = [
        {
            title: "Ten truyen",
            dataIndex: "title",
        },
        {
            title: "Tac gia",
            dataIndex: "author",
        },
        {
            title: "Hinh anh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} height={100} />,
        },

        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) =>
                new Date(date).toLocaleDateString("vi-VN"),
        },

        {
            title: "Action",
            render: (_: any, record: any) => (
                <>
                    <Popconfirm
                        title="Delete the story"
                        description="Bạn chắc chắn muốn xóa nó Ư?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => mutate(record.id)}
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button onClick={() => navigate(`/Lab6/${record.id}`)} className="primary">Edit</Button>
                </>

            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} loading={isLoading} rowKey="id" pagination={{ pageSize: 5 }} />
    );
}