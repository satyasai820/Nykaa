import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import ProfileFirstComponent from "../components/ProfileFirstComponent";
import Demo from "../components/Demo";

const Profile = () => {
    return(
        <>
        <Appbar1 />
        <Navbar/>
        <Appbar3 />
        {/* <ProfileFirstComponent /> */}
        <Demo />
        </>
    );
}

export default Profile;