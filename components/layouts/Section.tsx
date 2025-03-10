import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <>
      <div className="w-screen lg:w-full bg-transparent backdrop-blur-xl my-8 p-8 pt-12 rounded-xl overflow-hidden">
        {children}
      </div>
    </>
  );
}
