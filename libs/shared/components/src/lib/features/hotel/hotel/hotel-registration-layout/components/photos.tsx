import { AlertService } from '@eltnt/core';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getHotelGallery, getHotelRoomsApi } from '../../../api/hotel.api';
import { Photo, RoomType } from '../../../models/hotel';
import FooterLayOut from './footer-layout';
import PageLayout from './page-layout';
import PhotosCard from './photos-card';
import UploadImgForm from './upload-img-form';
import UploadPhoto from './upload-photo';

function Photos() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState<RoomType[]>(undefined);
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState<Photo>();
  const [image, setImage] = useState();
  const [formVisible, setFormVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const modalVisible = (visible: boolean, photo?: Photo): void => {
    setPhoto(photo);
    setFormVisible(visible);
  };
  useEffect(() => {
    getHotelRooms();
  }, []);

  function getHotelRooms() {
    if (urlId.id !== undefined && urlId.id !== null) {
      setIsLoading(true);
      getHotelRoomsApi(urlId.id)
        .then((result: any) => {
          if (result) {
            setRooms(result);
            getGallery();
          }
        })
        .catch((e) => {
          new AlertService().error(e.message);
        });
    }
  }
  function getGallery() {
    getHotelGallery(urlId.id)
      .then((result: any) => {
        if (result) {
          setPhotos(result.items);
          if (photos.length == 0) {
            setIsEmpty(true);
          }
          setIsLoading(false);
        }
      })
      .catch((e) => {
        new AlertService().error(e.message);
        setIsLoading(false);
      });
  }

  const photoForm = (
    <div className="flex justify-items-start gap-12">
      {photos.map(
        (photo, p) =>
          p < 3 && (
            <PhotosCard
              key={p}
              photo={photo}
              visible={formVisible}
              modalVisible={modalVisible}
            />
          )
      )}
      <UploadPhoto visible={formVisible} modalVisible={modalVisible} />
    </div>
  );
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/amenities')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <a
      className="bg-primary-500 text-white py-2 rounded px-4"
      onClick={() => history.push('../../' + urlId.id + '/policies')}
    >
      Continue
    </a>
  );
  function HotelPhotos() {
    return (
      <div>
        <UploadImgForm
          rooms={rooms}
          photo={photo}
          visible={formVisible}
          isEmpty={isEmpty}
          modalVisible={modalVisible}
        />
        <div className="flex flex-col gap-4">
          <PageLayout
            title="Photo gallery"
            subTitle="You’ll be able to make changes to your photos later on - this is just to get you started."
            font="italic"
            content={photoForm}
          ></PageLayout>
        </div>
        <FooterLayOut backBtn={backBtn} nextBtn={nextBtn} />
      </div>
    );
  }
  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    HotelPhotos()
  );
}

export default Photos;
