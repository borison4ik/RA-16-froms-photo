import React, { useState } from 'react';
import { Layout, Typography, Row, Spin } from 'antd';
import { nanoid } from 'nanoid';

import { UploadForm } from './component/UploadForm';
import { ImagesList } from './component/ImagesList';

import { TImage } from './@types/TImages';

import { DATA } from './data';
import './app.scss';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const App: React.FC = () => {
  const [images, setImages] = useState<TImage[]>([]);
  const [isLoadingStatus, setIsLoadingStatus] = useState<boolean>(false);

  const uploadHandler = (images: any[]) => {
    const updateImages = images.map((image) => {
      return { id: nanoid(), dataURL: image };
    });
    setImages((prev) => [...prev, ...updateImages]);
  };

  const deleteHandler = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const onLoadingHandler = (status: boolean) => {
    setIsLoadingStatus(status);
  };

  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>
      <Content className='app-content'>
        <UploadForm onUpload={uploadHandler} onLoading={onLoadingHandler} />

        {images.length === 0 ? (
          isLoadingStatus ? (
            <Row justify='center'>
              <Spin tip='Loading...'>
                <Row justify='center'>
                  <Text>{DATA.app.text.notImage}</Text>
                </Row>
              </Spin>
            </Row>
          ) : (
            <Row justify='center'>
              <Text>{DATA.app.text.notImage}</Text>
            </Row>
          )
        ) : isLoadingStatus ? (
          <Row justify='center'>
            <Spin tip='Loading...'>
              <ImagesList images={images} onDelete={deleteHandler} />
            </Spin>
          </Row>
        ) : (
          <Row justify='center'>
            <ImagesList images={images} onDelete={deleteHandler} />
          </Row>
        )}
      </Content>
    </Layout>
  );
};
