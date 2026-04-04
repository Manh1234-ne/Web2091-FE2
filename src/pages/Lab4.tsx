import { Form, Input, Button } from "antd";
import { useAddStory } from "../hooks/useAddStory";

const AddStory = () => {
  const { mutate, isPending } = useAddStory();

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="title">
        <Input placeholder="Tên truyện" />
      </Form.Item>
      <Form.Item name="author">
        <Input placeholder="Tác giả" />
      </Form.Item>
      <Form.Item name="image">
        <Input placeholder="Ảnh" />
      </Form.Item>
      <Form.Item name="description">
        <Input />
      </Form.Item>
      <Form.Item name="createdAt">
        <Input />
      </Form.Item>

      <Button htmlType="submit" loading={isPending}>
        Thêm
      </Button>
    </Form>
  );
};

export default AddStory;