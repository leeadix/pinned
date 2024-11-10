"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';



type User = {
  id: number;
  fName: string;
  lName: string;
  email: string;
  password: string;
};

type SigninProp = {
  onAddUser: (user: User) => void;
}


const Signup: React.FC<SigninProp> = ({onAddUser}) => {

  const[fName, setFName] = useState<string>('');
  const[lName, setLName] = useState<string>('');
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');
  const[idCount, setIdCount] = useState<number>(2);

  const  handleFNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFName(event.target.value);
  }

  const  handleLNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLName(event.target.value);
  }

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
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    }

    onAddUser(user);

    setFName('');
    setLName('');
    setEmail('');
    setPassword('');

  };




  const router = useRouter();

  return (
    <div className="bg-gray-400 p-2">
      <Image className=''
        src='/images/pin_logo.png'           
        alt={`Pinned Logo`} 
        width={200} 
        height={100}
        priority />



      <div className="flex justify-center align-center h-screen bg-gray-400">

        <div className=" bg-white flex justify-center h-[550px] w-[500px]">
          <div className="flex-col justify-center">
            <h1 className="font-bold text-center text-4xl p-9 font-inter text-blue-500">SIGN UP</h1>
            <form className='flex flex-col items-center'onSubmit={onClick}>
                <div>
                    <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                    id="fName"
                    type="text"
                    placeholder="First Name"
                    value={fName}
                    onChange={handleFNameChange}
                    required
                    />

                    <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
                    id="lName"
                    type="text"
                    placeholder="Last Name"
                    value={lName}
                    onChange={handleLNameChange}
                    required
                    />
                </div>
                <br /><br />
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 w-full"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <br /><br />
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 w-full"
                  id="password"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <br /><br />
                <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 w-full"
                  id="password-confirm"
                  type="text"
                  placeholder="Confirm Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <br /><br />
                <div className="text-center">
                  <button className='px-2 py-1 bg-blue-500 rounded font-inter font-bold text-white'  onClick={() => router.push('/login')}>SIGN UP</button>
                  {/*Add to button later =  type="submit" */}
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;