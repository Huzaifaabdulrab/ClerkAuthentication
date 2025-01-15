'use client'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
  } from "@clerk/nextjs";
  import React from "react";
  
  const Auth = () => {
    const { user } = useUser(); // Extract the user object correctly
    return (
      <div>
        <header className="flex flex-col justify-center items-center mt-44 space-y-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-24 w-24",
                  userButtonOuterBox: "border border-gray-300 rounded-lg",
                },
              }}
            />
            {user && (
              <p className="text-lg font-semibold text-gray-700 mt-2">
                {user.fullName || "User"}
              </p>
            )}
          </SignedIn>
        </header>
<div className="flex justify-center items-center text-4xl mt-24 font-bold"><h1>Next.js Authentication</h1></div>
      </div>
  
);
  };
  
  export default Auth;
  