'use client'

import { useState } from "react";
import api from "../../utils/api";
import { 
    Box,
    Input
 } from "@mui/material";
import imageUploadApi from "@/utils/imagUploadApi";


const Register = ()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(0);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, gender, email, password);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('logo', file);
        try{
            imageUploadApi.post('/api/auth/register', formData)      
        }catch(error){
            console.log("Error");
        }


    }

    return (
        <>
            <Box className="registerOuterBox">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Gender" value={gender} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Register</button>
            </form>
            </Box>
        </>
    )
}
export default Register;