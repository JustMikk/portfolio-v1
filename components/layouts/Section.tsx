import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <>
      <div className="container bg-transparent backdrop-blur-xl my-8 p-12">
        {children}
      </div>
    </>
  );
}
