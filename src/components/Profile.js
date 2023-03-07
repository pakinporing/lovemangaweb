import React, { useRef, useState } from 'react';
import { removeAccessToken } from '../utils/local-storage';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ProfileImg from './ProfileImg';
import axios from 'axios';
import useLoading from '../hooks/useLoading';
import { toast } from 'react-toastify';

export default function Profile() {
  const { startLoading, stopLoading } = useLoading();
  const { setAuthenticatedUser, authenticatedUser, fetchAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
    navigate('/');
  };

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const handleClickSave = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const formData = new FormData();
      formData.append('profileImage', file);
      await axios.patch('http://localhost:8888/users', formData);

      toast.success('success upImg');
      fetchAuthUser();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <div>
        <input
          type="File"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div className=" px-[450px]  ">
          <div onClick={() => inputEl.current.click()} className="">
            <ProfileImg
              src={
                file
                  ? URL.createObjectURL(file)
                  : authenticatedUser.profileImage
              }
              size="283"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto p-[20px]">
        <form className="flex flex-col gap-3 items-center">
          <div className="flex gap-3">
            {authenticatedUser.role == 'ADMIN' && (
              <button
                onClick={() => navigate('/adminpage')}
                className="border-[2px] rounded-[10px] w-[172px] h-[57px] bg-[#86AED1] text-[#ffffff]"
                role="button"
              >
                สิทธิสำหรับAdmin
              </button>
            )}
          </div>

          <div className="w-full">
            <p>นามแฝง</p>
            <input type="text" className="" placeholder="นามแฝง" />
          </div>

          <div className="w-full">
            <p>ชื่อจริง</p>
            <input type="password" className="" placeholder="ชื่อจริง" />
          </div>

          <div className="w-full">
            <p>นามสกุล</p>
            <input type="password" className="" placeholder="นามสกุล" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="flex gap-3">
            <button
              className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#D8D3CD] text-[#ffffff]"
              role="button"
              onClick={() => {
                setFile(null);
                inputEl.current.value = null;
              }}
            >
              cancle
            </button>

            <button
              className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#FFBC90] text-[#ffffff]"
              role="button"
              onClick={handleClickSave}
            >
              save
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="border-[2px] rounded-[30px] w-[172px] h-[57px] bg-[#D8D3CD] text-[#ffffff]"
            role="button"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
