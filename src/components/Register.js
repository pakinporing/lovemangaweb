import React, { useState } from 'react';
import LoveManga from '../assets/LoveManga.png';
// import { object, string, ref } from 'yup';
import * as Joi from 'joi';

const initialInput = { email: '', password: '', confirmPassword: '' };

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().alphanum().min(6).required().trim(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim()
});

const validateRegister = (input) => {
  return registerSchema.validate(input, {
    abortEarly: false
  });
};

// const registerSchema = object({
//   email: string().trim().required(),
//   password: string()
//     .matches(/^[0-9a-zA-Z]{6,}$/)
//     .required(),
//   confirmPassword: ref('password').required()
// });

// const validateRegister = async (input) => {
//   try {
//     const value = await registerSchema.validate(input, {
//       abortEarly: false,
//       stripUnknown: true
//     });
//   } catch (err) {}
// };

export default function Register() {
  const [input, setInput] = useState(initialInput);

  const [error, setError] = useState(initialInput);

  const handleChangInput = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    const { value, error } = validateRegister(input);
    console.dir(error);
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
              <div>{error.email}</div>
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
