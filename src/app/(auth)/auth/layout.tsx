import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const cookiesStore = await cookies();
  const authtoken = cookiesStore.get("authtoken");

  if (authtoken) return redirect("/v1/dashboard");
  return (
    <div className="w-full">
      <main className="w-full">{children}</main>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default AuthLayout;