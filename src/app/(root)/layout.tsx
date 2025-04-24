import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full relative">
      <Header />
      <main className="w-full">{children}</main>
    </main>
  );
};

export default RootLayout;