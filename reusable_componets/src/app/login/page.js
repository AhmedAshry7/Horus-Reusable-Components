'use client';
import Image from "next/image";
import styles from "../page.module.css";
import LoginSignup from "../components/LoginSignup";

const Home = () => {
  const submit = () => console.log("submitted");
  return (
    <LoginSignup islogin={true} submit={submit} title={ "Tourism"} redirectPage={"/"}/>
  );
}
export default Home;
