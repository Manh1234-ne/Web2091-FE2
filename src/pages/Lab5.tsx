import { Table, Image, Spin, Button } from "antd";
import { useStoryList } from "../hooks/useStoryList";
import { useDeleteStory } from "../hooks/useDeleteStory";
import { Link } from "react-router-dom";

const StoryList = () => {
  const { data, isLoading, isError } = useStoryList();
  const { mutate } = useDeleteStory();

  const columns = [
    { title: "ID", dataIndex: "id" },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Mô tả", dataIndex: "description" },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", gap: 8 }}>
          {/* Nút Edit */}
          <Link to={`/edit/${record.id}`}>
            <Button type="primary">Sửa</Button>
          </Link>
          {/* Nút Delete */}
          <Button danger onClick={() => mutate(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    }
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi</p>;

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default StoryList;