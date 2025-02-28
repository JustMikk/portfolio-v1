import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: Props) {
  return (
    <>
      <h1 className="pb-6 font-normal text-3xl">{children}</h1>
      <hr className="text-violet-200 pb-9" />
    </>
  );
}
