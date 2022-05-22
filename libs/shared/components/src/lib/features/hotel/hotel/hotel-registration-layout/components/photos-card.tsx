import CheckboxSVG from 'apps/admin/src/app/icons/checkbox.svg';
import CheckboxCheckedSVG from 'apps/admin/src/app/icons/checkboxChecked.svg';
import DeleteSVG from 'apps/admin/src/app/icons/delete.svg';
import EditSVG from 'apps/admin/src/app/icons/edit.svg';
import TagSVG from 'apps/admin/src/app/icons/tag.svg';
import { Photo } from 'apps/admin/src/app/models/hotel';
import React, { useEffect, useState } from 'react';

interface IPhotoCardProps {
  visible: boolean;
  modalVisible: (arg: boolean, photo?: Photo) => void;
}

function PhotosCard({ visible, modalVisible, photo }) {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState<boolean>();

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  const changeStatus = () => {
    setChecked(!checked);
  };
  return (
    <div
      className="p-1 flex flex-col items-center gap-4 text-center"
      style={{ width: 246, height: 265 }}
    >
      <div
        className="w-60 rounded shadow-md"
        style={{
          backgroundImage: `url('${`data:image/jpeg;base64,${photo.imageFile}`}')`,
          backgroundSize: 'cover',
          height: '215px',
          position: 'relative',
        }}
      >
        <div className="flex justify-between p-3.5">
          <a onClick={changeStatus}>
            {checked ? <CheckboxCheckedSVG /> : <CheckboxSVG />}
          </a>

          <a onClick={() => modalVisible(true, photo)}>
            <TagSVG />
          </a>
        </div>
      </div>
      <div className="flex gap-6">
        <a className="bg-white border-2 rounded px-2 py-2">
          <span
            className="flex gap-2.5"
            onClick={() => modalVisible(true, photo)}
          >
            <EditSVG /> edit
          </span>
        </a>
        <a className="bg-white border-2 rounded px-2 py-2">
          <span className="flex gap-2.5">
            <DeleteSVG /> delete
          </span>
        </a>
      </div>
    </div>
  );
}

export default PhotosCard;
