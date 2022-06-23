import React from 'react';
import { Typography } from 'antd';

import { fileToDataUrl } from '../../utils/fileToDataUrl';

import { DATA } from '../../data';
import './index.scss';

const { Text } = Typography;

type UploadFormProps = {
  onUpload: (images: any[]) => void;
  onLoading(status: boolean): void;
};

export const UploadForm: React.FC<UploadFormProps> = ({ onUpload, onLoading }) => {
  const changeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.files === null) return;
    onLoading(true);
    const files: File[] = [...target.files];
    const urls: string[] = await Promise.all<Promise<string>[]>(files.map((o) => fileToDataUrl(o)));
    onLoading(false);
    onUpload(urls);
    target.value = '';
  };

  return (
    <div className='upload-form'>
      <input type='file' accept='image/*' multiple onChange={changeHandler} />
      <div className='cover'>
        <Text type='secondary'>{DATA.app.text.selectBtn}</Text>
      </div>
    </div>
  );
};
