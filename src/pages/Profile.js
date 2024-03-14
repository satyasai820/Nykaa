import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import ProfileFirstComponent from "../components/ProfileFirstComponent";

const Profile = () => {
    return(
        <>
        <Appbar1 />
        <Navbar/>
        <Appbar3 />
        <ProfileFirstComponent />
        </>
    );
}

export default Profile;