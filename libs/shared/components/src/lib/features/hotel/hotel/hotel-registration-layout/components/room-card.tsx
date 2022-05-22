import { AlertService } from '@eltnt/core';
import { Modal } from 'antd';
import BedSVG from 'apps/admin/src/app/icons/bed.svg';
import DeleteSVG from 'apps/admin/src/app/icons/delete.svg';
import EditSVG from 'apps/admin/src/app/icons/edit.svg';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteHotelRoomTypeApi } from '../../../api/hotel.api';

function RoomCard({ room }) {
  const history = useHistory();
  function confirmDelete(id: number) {
    var modelTitle = 'Are you sure you want to delete ' + room.name + ' room?';
    Modal.confirm({
      title: modelTitle,
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        deleteRoom(room.id);
      },
    });
  }
  function deleteRoom(id: any) {
    if (id !== undefined && id !== null) {
      deleteHotelRoomTypeApi(id)
        .then((result: any) => {
          new AlertService().success('Room Type deleted Successfully');
          //think abt this redirection
          history.push('../../hotels');
        })
        .catch((e) => {
          new AlertService().error(e.message);
        });
    }
  }
  useEffect(() => {}, []);
  return (
    <div className="bg-white shadow-2xl rounded-2xl w-60 text-center">
      <div className="flex flex-col p-4 gap-3 items-center">
        <div>
          <BedSVG />
        </div>
        <span className="font-bold">{room.roomName}</span>
        <small className="italic font-bold">{room.quantity} rooms</small>
        <div className="flex gap-6">
          <a
            className="bg-white border-2 rounded px-2 py-2"
            onClick={() => history.push(`../${room.id}/edit/room-pricing`)}
          >
            <span className="flex gap-2.5">
              <EditSVG /> edit
            </span>
          </a>
          <a
            className="bg-white border-2 rounded px-2 py-2"
            onClick={() => confirmDelete(room)}
          >
            <span className="flex gap-2.5">
              <DeleteSVG /> delete
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
