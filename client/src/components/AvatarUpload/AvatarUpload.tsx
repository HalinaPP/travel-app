import React, { FC, useState } from 'react';
import './avatarUpload.scss';
import { AvatarUploadProps } from './avatarUpload.model';
import Spinner from './spinner';

const AvatarUpload: FC<AvatarUploadProps> = ({ onImageReady }) => {
  const [avatarUploadState, setAvatarUploadState] = useState('initial');
  const [preview, setPreview] = useState('../../assets/icons/set-foto.png');

  const showPreview = (target: File) => {
    const src = URL.createObjectURL(target);
    setPreview(src);
    setAvatarUploadState('uploaded');
  };
  const fileInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAvatarUploadState('loading');
    if (e.currentTarget?.files) {
      showPreview(e.currentTarget.files[0]);
      onImageReady(e.currentTarget.files[0]);
    }
  };

  if (avatarUploadState === 'initial') {
    return (<label htmlFor="avatar" className="set-avatar">
      <input type="file"
        required
        accept=".png, .jpg, .jpeg"
        name="avatar"
        id="avatar"
        className="set-avatar"
        onChange={ fileInputChange }
      />
    </label>);
  } if (avatarUploadState === 'uploaded') {
    return (
      <div style={ { backgroundImage: `url(${preview})` } } className="user-avatar"/>
    );
  }
  return (
    <Spinner/>
  );
};

export default AvatarUpload;
