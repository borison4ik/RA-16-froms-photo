import React from 'react';
import { Col, Image, Button, Space } from 'antd';

import { TImage } from '../../@types/TImages';

type ImageItemProps = {
  image: TImage;
  onDelete(id: string): void;
};
export const ImageItem: React.FC<ImageItemProps> = ({ image, onDelete }) => {
  return (
    <Col key={image.id} span={6} xs={10} sm={4}>
      <Space size='middle' direction='vertical'>
        <Image width='100%' src={image.dataURL} />
        <Button type='primary' block onClick={() => onDelete(image.id)}>
          Delete
        </Button>
      </Space>
    </Col>
  );
};
