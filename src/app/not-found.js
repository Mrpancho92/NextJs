"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Heading from "../../components/Heading";
import styles from "../app/Home.module.scss";

export const metadata = {
  title: "Error",
};

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong..." />
      </div>
    </div>
  );
};
export default Error;
