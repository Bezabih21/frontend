import { InboxOutlined } from '@ant-design/icons';
import { AlertService } from '@eltnt/core';
import { Button, Col, Form, Modal, Select, Spin, Tag, Upload } from 'antd';
import PhotoWarning from 'apps/admin/src/app/icons/photo-warning';
import { Photo } from 'apps/admin/src/app/models/hotel';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { uploadGallery } from '../../../api/hotel.api';
const { Dragger } = Upload;
const { Option } = Select;

function UploadImgForm(props: {
  photo?: Photo;
  visible;
  modalVisible;
  rooms: any;
  isEmpty: boolean;
}) {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [tags, setTags] = useState([]);
  const [tagOptions, setTagOptions] = useState([
    { id: 'POPULAR', name: 'Popular' },
    { id: 'LUXURY', name: 'Luxury' },
    { id: 'ROOM', name: 'Room' },
  ]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState<boolean>();
  const [photo, setPhoto] = useState<Photo>();
  const [isLoading, setIsLoading] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    resetData();
    setShowModal(props.visible);
    if (props.photo !== undefined && props.photo !== null) {
      if (props.rooms !== undefined) {
        setPhoto(props.photo);
        setTags(props.photo.tags);
        setSelectedRoom(props.rooms[0].id);
        setRooms(props.rooms);
        setIsLoading(false);
      }
    } else if (props.isEmpty) {
      setRooms(props.rooms);
      setIsLoading(false);
    }
  }, [props.visible]);
  const handleCancel = () => {
    console.log('close');
  };
  function resetData() {
    setPhoto(undefined);
    setTags([]);
  }

  function onChange(checkedValue) {
    setSelectedRoom(checkedValue);
  }

  const addToSelectedTags = (value) => {
    tagOptions.forEach((option) => {
      if (option.id === value) {
        let selectedOption = tags;
        selectedOption = [...selectedOption, option];
        setTags(selectedOption);
      }
    });
  };

  const beforeUpload = (file) => {
    setFileList([...fileList, file]);
    return false;
  };

  function handleUpload() {
    setIsLoading(true);
    const selectedTags = [];
    tags.forEach((tag) => {
      selectedTags.push(tag.id);
    });
    const file = fileList[0];
    const req = {
      photo: file,
      id: urlId.id,
      tags: selectedTags,
      selectedRoom: selectedRoom,
    };
    uploadGallery(req)
      .then((response: any) => {
        if (response) {
          new AlertService().success('Image uploaded successfully!');
          //history.push('../' + urlId.id + '/photos');
          window.location.reload();
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }

  return (
    <Modal
      centered
      visible={props.visible}
      onCancel={() => props.modalVisible(!showModal)}
      width={1000}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Rotate left
        </Button>,
        <Button key="submit" onClick={handleCancel}>
          Rotate right
        </Button>,
        <Button onClick={handleCancel}>delete</Button>,
        <Button
          disabled={fileList.length === 0}
          loading={isLoading}
          type="primary"
          htmlType="submit"
          form="PhotoForm"
        >
          Save
        </Button>,
      ]}
    >
      {isLoading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <Spin></Spin>
        </div>
      ) : (
        <Form
          layout="vertical"
          size="middle"
          id="PhotoForm"
          onFinish={handleUpload}
          initialValues={{
            room: selectedRoom,
            // tags: tags,
          }}
        >
          <div className="flex gap-4">
            <div className="w-1/3">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <small className="text-gray-400">image12.jpg</small>
                  <div className="flex gap-2">
                    <small className="text-gray-400">345KB 1000 x 650 px</small>
                    {/* this needs to display only when the size is beyond max */}
                    <PhotoWarning />
                  </div>
                </div>
                <span>Tags applied to this photo</span>
                <div className="flex">
                  <Col span={24}>
                    {tags.map((tag, t) => (
                      <Tag key={t} color="#16586F">
                        {tag.name}
                      </Tag>
                    ))}
                  </Col>
                </div>
                <Form.Item label="Select tags for this photo">
                  <Form.Item name="tags">
                    <Select
                      className="w-full"
                      id="tag_options"
                      mode="tags"
                      onSelect={(e) => addToSelectedTags(e)}
                    >
                      {tagOptions.map((option, o) => (
                        <Option value={option.id}>{option.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Indicate if this is a room photo:">
                  <Form.Item
                    name="room"
                    rules={[
                      {
                        required: true,
                        message: 'Room is required',
                      },
                    ]}
                  >
                    <Select
                      className="w-full"
                      id="rooms"
                      onSelect={(e) => setSelectedRoom(e)}
                    >
                      {rooms.map((room, r) => (
                        <Option value={room.id}>{room.roomName}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form.Item>
              </div>
            </div>
            <div className="w-2/3 p-10">
              <Form.Item>
                <Form.Item
                  name="photo"
                  rules={[{ required: true, message: 'file required' }]}
                >
                  {photo ? (
                    <div>
                      <img
                        style={{ width: '65%', height: '50%' }}
                        src={`data:image/jpeg;base64,${photo.imageFile}`}
                      />
                    </div>
                  ) : (
                    <Dragger accept="image/*" beforeUpload={beforeUpload}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit
                        from uploading company data or other band files
                      </p>
                    </Dragger>
                  )}
                </Form.Item>
              </Form.Item>
            </div>
          </div>
        </Form>
      )}
    </Modal>
  );
}

export default UploadImgForm;
