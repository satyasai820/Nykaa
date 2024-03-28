
import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";


// google athentication 

export const googleAccount = (navigate) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("result", result);
            navigate('/');
            const token = result.user.accessToken;
            localStorage.setItem('accessToken', token);
            console.log('this is token google token man ', token);
            localStorage.setItem('email',result.user.email);
            const Name = result.user.displayName;
            localStorage.setItem('displayName', Name)
            console.log("this is the name by google", Name);

        })
        .catch((err) => {
            console.log(err.message, 'error occured')
        })
}

const SignUp = () => {
    const navigate = useNavigate();

    const [isSignIn, setIsSignIn] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }else if (name.trim().length < 3) {
            errors.name = "It must be at least 3 characters";
            isValid = false;
        }else if (/\d/.test(name.trim())) {
            errors.name = "Name must not contain numbers";
            isValid = false;
        }else if (/[^a-zA-Z0-9]/.test(name.trim())) {
            errors.name = "must not contain special characters";
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = "Password is required";
            isValid = false;
        }else if (password.trim().length < 6) {
            errors.password = "It must be at least 6 characters";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };




    const changeHandleName = (e) => {
        const getName = e.target.value;
        setName(getName);
    }

    const changeHandleEmail = (e) => {
        const getEmail = e.target.value;
        setEmail(getEmail);
    }

    const changeHandlePassword = (e) => {
        const getPassword = e.target.value;
        setPassword(getPassword);
    }


    const handleButtonClick = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // if (email === '' || password === '') {
        //     alert('Please fill the all detailes')
        // } else {



            if (isSignIn) {

                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    await updateProfile(userCredential.user, {
                        displayName: name,
                    });
                    console.log('this is the user', user);
                    const token = await user.getIdToken();
                    localStorage.setItem('email',userCredential.user.email);
                    localStorage.setItem('accessToken', token)
                    console.log('this is sign in token', token);
                    localStorage.setItem('displayName', userCredential.user.displayName)
                    const Name = localStorage.getItem(user.displayName);

                    // console.log('User created successfully:', userCredential.user);
                    console.log('User display name:', Name);

                    alert('Successfully Sign Up..!')
                    setEmail('');
                    setPassword('');
                    setName('');
                    navigate('/')

                } catch (error) {
                    console.error('Error creating user:', error.code, error.message);
                    alert('Alredy have an account Please Log in')
                }

            } else {

                try {

                    const userCredential = await signInWithEmailAndPassword(auth, email, password)
                    const user = userCredential.user;
                    const token = await user.getIdToken();
                    localStorage.setItem('accessToken', token);
                    localStorage.setItem('email',userCredential.user.email);
                    const Name = userCredential.user.displayName;
                    localStorage.setItem('displayName', Name)
                    localStorage.getItem('displayName', Name);
                    console.log('This is the name in log in ', Name);
                    console.log("this is the login token", token);

                    alert('Successfully Log In..!')
                    setEmail('');
                    setPassword('');
                    navigate('/')
                } catch (error) {
                    console.log(error, 'error occured')
                    alert('Please Create an account First')
                }
            }
        



    };

    const toggleSignInMode = () => {
        setIsSignIn((prevIsSignIn) => !prevIsSignIn);
    };








    return (
        <>
            <Grid container sx={{ justifyContent: 'center', }}>
                <Grid sx={{ width: { xs: '90%', sm: '40%', md: '30%', lg: '25%', xl: '20%' }, border: '1px solid lightgrey', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', marginTop: '60px', background: '#FFFFFF' }}>
                    <Grid sx={{ display: 'flex', marginTop: '20px', paddingBottom: '5px', borderBottom: '1px solid lightgray' }}>
                        <Grid>
                            <Icon onClick={() => navigate('/')} icon="iconamoon:close-light" width="25" height="25" />

                        </Grid>
                        <Grid sx={{ margin: 'auto' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 550, color: '#3F414D', }}>LOGIN / REGISTER </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center' }} >
                        {isSignIn ? (<Grid sx={{ marginTop: '40px', justifyContent: 'center' }}>
                            <TextField placeholder="Enter Name" size="small" type="name" value={name} onChange={changeHandleName}  error={!!errors.name} helperText={errors.name} />
                        </Grid>) : (<Grid><Typography ></Typography></Grid>)}

                        <Grid sx={{ marginTop: '20px', }}>
                            <TextField placeholder="Enter Email" size="small" type="email" value={email} onChange={changeHandleEmail}  error={!!errors.email} helperText={errors.email}/>
                        </Grid>
                        <Grid sx={{ margin: '20px 20px', }}>
                            <TextField placeholder="Enter Password" size="small" type="password" value={password} onChange={changeHandlePassword} error={!!errors.password} helperText={errors.password} />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', marginBottom: '20px', marginTop: '80px' }}>
                        <Grid sx={{ textAlign: 'center', width: '70%', cursor: 'pointer' }}>
                            <Typography onClick={handleButtonClick} sx={{ border: '1px solid #E80071', backgroundColor: '#E80071', color: '#FFFFFF', fontWeight: 550, padding: '10px' }} >{isSignIn ? 'PROCEED' : 'Log In'} </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ textAlign: 'center', marginBottom: '30px' }}>
                        <Typography >{isSignIn ? 'Alredy have an account?' : 'Don`t have an account?'}  <span style={{ color: '#E80071', fontWeight: 'bold', cursor: 'pointer' }} onClick={toggleSignInMode} > {isSignIn ? 'Log In' : 'SignUP'}</span>  </Typography>
                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}

export default SignUp;