import { toast } from 'react-toastify';
import React, { useState } from 'react';
import LoveManga from '../assets/LoveManga.png';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      toast.success('success login');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
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
              <img
                src={LoveManga}
                role="button"
                onClick={() => navigate('/')}
              />
            </div>
            <div className="w-full">
              <p>อีเมล</p>
              <input
                type="text"
                className=""
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full">
              <p>รหัสผ่าน</p>
              <input
                type="password"
                className=""
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <br />
            <button className="border-[2px] rounded-[30px] w-[187px] h-[57px] bg-[#FFBC90] text-[#ffffff]">
              Log In
            </button>
            <div>
              <span className="w-full">
                อ้าว!!! ยังไม่ได้เป็นสมาชิกหรอ..........
              </span>
              <span
                role="button"
                onClick={() => navigate('/registerpage')}
                className="text-[#D18CAF]"
              >
                สมัครสิรออะไร
              </span>
            </div>

            <button className="border-[2px] rounded-[30px] w-[321px] h-[57px] bg-[#86AED1] text-[#ffffff]">
              เข้าสู่ระบบด้วย Facebook
            </button>
            <button className="border-[2px] rounded-[30px] w-[321px] h-[57px] bg-[#FF8C94] text-[#ffffff]">
              เข้าสู่ระบบด้วย Gmail
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
