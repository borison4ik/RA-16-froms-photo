import React from 'react';
import { Row } from 'antd';

import { ImageItem } from '../ImageItem';

import { TImage } from '../../@types/TImages';

type ImagesListProps = {
  images: TImage[];
  onDelete(id: string): void;
};

export const ImagesList: React.FC<ImagesListProps> = ({ images, onDelete }) => {
  return (
    <Row justify='center' gutter={[16, 16]}>
      {images.map((image: TImage) => (
        <ImageItem key={image.id} image={image} onDelete={onDelete} />
      ))}
    </Row>
  );
};
