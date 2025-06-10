import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">{children}</main>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default AuthLayout;
