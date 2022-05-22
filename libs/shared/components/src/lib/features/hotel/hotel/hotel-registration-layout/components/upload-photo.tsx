import PlusSVG from 'apps/admin/src/app/icons/plus.svg';
import React, { useEffect, useState } from 'react';
interface IUploadPhotoProps {
  visible: boolean;
  modalVisible: (arg: boolean) => void;
}
function UploadPhoto({ visible, modalVisible }) {
  const [showModal, setShowModal] = useState<boolean>();

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);
  return (
    <div
      className="p-1 flex flex-col items-center gap-4 text-center"
      style={{ width: 246, height: 265, cursor: 'pointer' }}
      onClick={() => modalVisible(true)}
    >
      <div
        className="bg-primary-500 items-center p-14 rounded shadow-md w-60"
        style={{
          backgroundSize: 'cover',
          height: '215px',
          position: 'relative',
        }}
      >
        <div className="flex flex-col gap-10">
          <div className="px-10">
            <PlusSVG />
          </div>

          <div className="items-center">
            <span className="text-center text-white">Upload Photo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPhoto;
