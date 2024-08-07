'use client';
import Image from "next/image";
import styles from "./page.module.css";
import RateModal from "./components/RateModal";

const Home = () => {
  const deactivate = () => console.log("deactivated");
  const submit = () => console.log("submitted");
  return (
    <RateModal deactivate={deactivate} submit={submit} />
  );
}
export default Home;
