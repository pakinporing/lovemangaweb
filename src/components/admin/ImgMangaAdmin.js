import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import useLoading from '../../hooks/useLoading';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ImgManga({ src, manganame, mangades }) {
  const [open, setOpen] = useState(false);
  const [des, setDes] = useState('');
  const { startLoading, stopLoading } = useLoading();
  const { mangaId } = useParams();
  const navigate = useNavigate();

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      startLoading();

      await axios.patch(`http://localhost:8888/manga/${mangaId}`, {
        description: des
      });
      toast.success('success upManga');

      navigate(0);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center ">
      <img className="h-[741px] w-[471px] rounded-[30px]" src={src} />

      <div>
        <h1 className="text-[40px]">{manganame}</h1>
      </div>
      <div className="bg-[#ffffff] w-[909px] h-[215px] rounded-[30px] flex items-center flex-col">
        <p className="p-[40px]">{mangades}</p>

        <React.Fragment>
          <Button onClick={() => setOpen(true)}>แก้ไข Description</Button>
          <Modal show={open} onClose={() => setOpen(false)}>
            <Modal.Header>แก้ไข Description</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <textarea
                  className="resize-none"
                  defaultValue={des}
                  onChange={(e) => setDes(e.target.value)}
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="35"
                ></textarea>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClickSave}>OK</Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                Cancle
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
}
