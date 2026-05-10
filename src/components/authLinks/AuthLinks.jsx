"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const AuthLinks = ({ isMobile = false }) => {
  const { status } = useSession();

  const handleLogout = () => {
    signOut();
  };

  const containerClass = isMobile ? "flex flex-col gap-4" : "flex items-center gap-4";

  return (
    <div className={containerClass}>
      {status === "unauthenticated" ? (
        <Link href="/login" className={isMobile ? "w-full" : ""}>
          <Button variant="default" className={isMobile ? "w-full" : ""}>
            Login
          </Button>
        </Link>
      ) : (
        <>
          <Link href="/studio" className={isMobile ? "w-full" : ""}>
            <Button variant="secondary" className={isMobile ? "w-full" : ""}>
              Write
            </Button>
          </Link>
          <Button variant="outline" onClick={handleLogout} className={isMobile ? "w-full" : ""}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
