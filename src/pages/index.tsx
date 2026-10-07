import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { logout } from "@/components/profile/profileActions";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  async function handleLogout() {
    await logout()
      .then(res => {
        if (res?.data?.redirectTo) {
          router.push(res.data.redirectTo);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <button
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </>
  );
}
