import React, { useState } from 'react';
import { toast } from 'react-toastify';
import LoveManga from '../assets/LoveManga.png';
import validateRegister from '../validators/validate-register';
import * as authApi from '../apis/auth-api';
import useLoading from '../hooks/useLoading';

const initialInput = { email: '', password: '', confirmPassword: '' };

export default function Register() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const { startLoading, stopLoading } = useLoading();

  const handleChangInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await authApi.register(input);
        toast.success('success register.');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="bg-[#ffffff] w-[450px] h-[701px] rounded-[30px] mx-auto">
          <form
            className="flex flex-col gap-2 items-center p-[64px]"
            onSubmit={handleSubmitForm}
          >
            <div>
              <img src={LoveManga} />
            </div>
            <div className="w-full">
              <p>อีเมล</p>
              <input
                type="text"
                className=""
                placeholder="email"
                name="email"
                value={input.email}
                onChange={handleChangInput}
              />
              <div className="text-[8px] text-[red]">{error.email}</div>
            </div>

            <div className="w-full">
              <p>รหัสผ่าน</p>
              <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleChangInput}
              />
              <div className="text-[8px] text-[red]">{error.password}</div>
            </div>

            <div className="w-full">
              <p>ยืนยันรหัสผ่าน</p>
              <input
                type="password"
                className=""
                placeholder="confirmPassword"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={handleChangInput}
              />
              <div className="text-[8px] text-[red]">
                {error.confirmPassword}
              </div>
            </div>
            <br />
            <br />
            <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#FFBC90] text-[#ffffff]">
              OK
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
