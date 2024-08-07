'use client';
import Image from "next/image";
import styles from "./page.module.css";
import RateModal from "./components/RateModal";
import LoginSignup from "./components/LoginSignup";
import SettingsChange from "./components/Settingschange";
import UploadForm from "./components/UploadForm";

const Home = () => {
  const deactivate = () => console.log("deactivated");
  const submit = () => console.log("submitted");
  return (
    //<RateModal deactiviate={deactivate} submit={submit} />
    //<LoginSignup islogin={false} submit={submit} title={ "Tourism"} redirectPage={"/login"}/>
    //<SettingsChange title={"Username"} description={"AhmedAshry7"} display={"Change"} activate={submit} />
    <UploadForm submit={submit} />
  );
}
export default Home;
