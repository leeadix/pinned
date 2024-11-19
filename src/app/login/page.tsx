"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

type User = {
  id: number;
  email: string;
  password: string;
};

type SigninProp = {
  onAddUser: (user: User) => void;
}


const Signin: React.FC<SigninProp> = ({onAddUser}) => {

  
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const[idCount, setIdCount] = useState<number>(2);

  const  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const onClick = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    
    setIdCount(idCount + 1);


    const user = {
      id: idCount,
      email: email,
      password: password,
    }

    onAddUser(user);

    setEmail('');
    setPassword('');

  };




  const router = useRouter();

  return (
    <div className="bg-gray-400 p-2">
      <Image className=''
        src='/images/Pinned-Logo.png'           
        alt={`Pinned Logo`} 
        width={200} 
        height={100}
        priority />



      <div className="flex justify-center align-center h-screen bg-gray-400">

        <div className=" bg-white flex justify-center h-[400px] w-[500px]">
          <div className="flex-col justify-center">
            <h1 className="font-bold text-center text-4xl p-9 font-inter text-blue-500">LOGIN</h1>
            <p className="text-center font-inter mb-9">Dont have an account? <a className='text-blue-500 underlined'onClick={() => router.push('/sign-up')}>Sign up.</a></p>
            <form className=''onSubmit={onClick}>
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <br /><br />
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <br /><br />
                <div className="text-center">
                  <button className='px-2 py-1 bg-blue-500 rounded font-inter font-bold text-white'  onClick={() => router.push('/user-home')}>LOGIN</button>
                  {/*Add to button later =  type="submit" */}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
