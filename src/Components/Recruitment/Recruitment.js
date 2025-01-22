import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Alert,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const ClubRecruitment = () => {
  const fileInputRef = useRef(null);

  const initialDetails = {
    name: "",
    email: "",
    contactNumber: "",
    registrationNumber: "",
    course: "",
    yearOfStudy: "",
  };

  const initialAdditionalDetails = {
    branch: "",
    skills: "",
    motivation: "",
    projects: "",
  };

  const [details, setDetails] = useState(initialDetails);
  const [additionalDetails, setAdditionalDetails] = useState(initialAdditionalDetails);
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdditionalDetailsChange = (e) => {
    const { name, value } = e.target;
    setAdditionalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!resume) {
      alert("Please upload your resume before submitting.");
      setLoading(false);
      return;
    }

    try {
      const storageRef = ref(storage, `clubRegistrations/${resume.name}`);
      await uploadBytes(storageRef, resume);
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "codingClubRegistrations"), {
        ...details,
        ...additionalDetails,
        resumeURL: downloadURL,
        timestamp: new Date(),
      });

      setLoading(false);
      setSuccessMessage("Registration successful!");
      setOpenSnackbar(true);
      setDetails(initialDetails);
      setAdditionalDetails(initialAdditionalDetails);
      setResume(null);
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <Box
      sx={{
        width: "85%",
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Images/Recruitment poster for website.png`}
          alt="Workshop Poster"
          style={{
            maxWidth: "100%",
            maxHeight: "500px",
            width: "auto",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Recruitment Form
        </Typography>

        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>

        {step === 1 && (
          <>
            <TextField label="Name" name="name" value={details.name} onChange={handleChange} fullWidth required />
            <TextField label="Email" name="email" type="email" value={details.email} onChange={handleChange} fullWidth required />
            <TextField label="Contact Number" name="contactNumber" value={details.contactNumber} onChange={handleChange} fullWidth required />
            <TextField label="Registration Number" name="registrationNumber" value={details.registrationNumber} onChange={handleChange} fullWidth required />

            <TextField label="Course" name="course" value={details.course} onChange={handleChange} select fullWidth required>
              <MenuItem value="ICD">ICD</MenuItem>
              <MenuItem value="BE">B.E.</MenuItem>
            </TextField>

            <TextField label="Year of Study" name="yearOfStudy" value={details.yearOfStudy} onChange={handleChange} select fullWidth required>
              <MenuItem value="1st">1st</MenuItem>
              <MenuItem value="2nd">2nd</MenuItem>
              <MenuItem value="3rd">3rd</MenuItem>
              <MenuItem value="4th">4th</MenuItem>
            </TextField>

            <Button variant="contained" color="primary" onClick={() => setStep(2)}>Continue</Button>
          </>
        )}

        {step === 2 && (
          <>
            <TextField label="Branch/Department" name="branch" value={additionalDetails.branch} onChange={handleAdditionalDetailsChange} fullWidth required />
            <TextField label="Skills" name="skills" value={additionalDetails.skills} onChange={handleAdditionalDetailsChange} fullWidth required />
            <TextField label="Why do you want to join?" name="motivation" value={additionalDetails.motivation} onChange={handleAdditionalDetailsChange} fullWidth multiline required />
            <TextField label="Describe any coding projects you've worked on" name="projects" value={additionalDetails.projects} onChange={handleAdditionalDetailsChange} fullWidth multiline />
            <Typography>Upload Resume (PDF: max size 2MB)</Typography>
            <TextField type="file" onChange={handleFileChange} inputRef={fileInputRef} fullWidth required />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </>
        )}

<Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default ClubRecruitment;
