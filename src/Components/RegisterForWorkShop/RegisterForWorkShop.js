import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage methods
import { storage } from "../../firebase";

const RegisterForWorkshop = () => {
  const fileInputRef = useRef(null);

  const initialBasicDetails = {
    name: "",
    email: "",
    contactNumber: "",
    registrationNumber: "",
  };

  const initialAdditionalDetails = {
    course: "",
    yearOfStudy: "",
    branch: "",
  };

  const [basicDetails, setBasicDetails] = useState(initialBasicDetails);
  const [additionalDetails, setAdditionalDetails] = useState(initialAdditionalDetails);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null); // New state for file upload
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [basicDetailsError, setBasicDetailsError] = useState({
    name: false,
    email: false,
    contactNumber: false,
    registrationNumber: false,
  });

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setBasicDetailsError((prevState) => ({
        ...prevState,
        [name]: value.trim().length > 0 && !isValidEmail,
      }));
    } else if (name === "contactNumber") {
      const isValidContactNumber = /^\d{10}$/.test(value);
      setBasicDetailsError((prevState) => ({
        ...prevState,
        [name]: value.trim().length > 0 && !isValidContactNumber,
      }));
    }
    setBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setBasicDetailsError((prevState) => ({
      ...prevState,
      [name]: false,
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
    setPaymentScreenshot(e.target.files[0]); // Set the uploaded file
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleContinue = () => {
    if (
      basicDetails.name &&
      /^\d{10}$/.test(basicDetails.contactNumber) &&
      basicDetails.registrationNumber &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(basicDetails.email)
    ) {
      setShowAdditionalFields(true);
    } else {
      setBasicDetailsError({
        name: !basicDetails.name,
        email:
          !basicDetails.email ||
          (basicDetails.email.trim().length > 0 &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(basicDetails.email)),
        contactNumber:
          basicDetails.contactNumber.trim().length === 0 ||
          !/^\d{10}$/.test(basicDetails.contactNumber),
        registrationNumber: !basicDetails.registrationNumber,
      });
    }
  };

  const handleBack = () => {
    setShowAdditionalFields(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is being submitted");
  
    if (!paymentScreenshot) {
      alert("Please upload a payment screenshot before submitting.");
      return;
    }
  
    try {
      const storageRef = ref(storage, `workshopRegistrations/${paymentScreenshot.name}`); // Make sure this path is correct
      await uploadBytes(storageRef, paymentScreenshot);
      const downloadURL = await getDownloadURL(storageRef);
    
      await addDoc(collection(db, "workshopRegistrations"), {
        ...basicDetails,
        ...additionalDetails,
        paymentScreenshot: downloadURL,
        timestamp: new Date(),
      });
    
      console.log("Data successfully added to Firestore");
    
      setSuccessMessage("Registered successfully!");
      setOpenSnackbar(true);
      setBasicDetails(initialBasicDetails);
      setAdditionalDetails(initialAdditionalDetails);
      setPaymentScreenshot(null); // Reset file input

      if (fileInputRef.current) {
        fileInputRef.current.value = null; // Clear file input value
      }

      setShowAdditionalFields(false);
    
    } catch (error) {
      console.error("Error adding document: ", error);
    }
};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: "85%",
        gap: { xs: "2rem", md: "10rem" },  
        mx: "auto",
        mt: 4,
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Poster Image */}
      <Box
        sx={{
          flex: { md: 1 },
          display: "flex",
          justifyContent: "center",
          mb: { xs: 2, md: 0 },
          mr: { md: 2 },
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Images/workshopPoster.png`} 
          alt="Workshop Poster"
          style={{ 
            maxWidth: "90%", 
            maxHeight: "500px",  
            width: "auto",      
            height: "auto",   
            borderRadius: "8px" 
          }}
        />
      </Box>

      {/* Registration Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: { md: 1 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register for Workshop
        </Typography>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>

        {!showAdditionalFields && (
          <>
            <TextField
              label="Name"
              name="name"
              value={basicDetails.name}
              onChange={handleBasicDetailsChange}
              margin="normal"
              fullWidth
              required
              error={basicDetailsError.name}
              helperText={basicDetailsError.name && "Please enter your name"}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={basicDetails.email}
              onChange={handleBasicDetailsChange}
              margin="normal"
              fullWidth
              required
              error={basicDetailsError.email}
              helperText={
                basicDetailsError.email && "Please enter a valid email address"
              }
            />
            <TextField
              label="Contact Number"
              name="contactNumber"
              value={basicDetails.contactNumber}
              onChange={handleBasicDetailsChange}
              margin="normal"
              fullWidth
              required
              error={basicDetailsError.contactNumber}
              helperText={
                basicDetailsError.contactNumber &&
                "Please enter a valid 10-digit contact number"
              }
            />
            <TextField
              label="Registration Number"
              name="registrationNumber"
              value={basicDetails.registrationNumber}
              onChange={handleBasicDetailsChange}
              margin="normal"
              fullWidth
              required
              error={basicDetailsError.registrationNumber}
              helperText={
                basicDetailsError.registrationNumber &&
                "Please enter your registration number"
              }
            />

            <Button
              onClick={handleContinue}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Continue
            </Button>
          </>
        )}

        {showAdditionalFields && (
          <>
            <TextField
              label="Course"
              name="course"
              value={additionalDetails.course}
              onChange={handleAdditionalDetailsChange}
              select
              margin="normal"
              fullWidth
              required
            >
              <MenuItem value="ICD">ICD</MenuItem>
              <MenuItem value="BE">B.E.</MenuItem>
            </TextField>
            <TextField
              label="Year of Study"
              name="yearOfStudy"
              value={additionalDetails.yearOfStudy}
              onChange={handleAdditionalDetailsChange}
              select
              margin="normal"
              fullWidth
              required
            >
              <MenuItem value="1st">1st</MenuItem>
              <MenuItem value="2nd">2nd</MenuItem>
              <MenuItem value="3rd">3rd</MenuItem>
              <MenuItem value="4th">4th</MenuItem>
            </TextField>
            <TextField
              label="Branch/Department"
              name="branch"
              value={additionalDetails.branch}
              onChange={handleAdditionalDetailsChange}
              margin="normal"
              fullWidth
              required
            />

            {/* QR Code and Payment Screenshot */}
            <Typography variant="h6" component="h2" gutterBottom>
              Payment Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <img 
                src={`${process.env.PUBLIC_URL}/Assets/Images/QR_worshop_registration.jpg`} 
                alt="QR Code for Payment" 
                style={{ maxWidth: "150px" }} 
              />

              <Typography>Scan the QR code and pay ₹99</Typography>

              <TextField
                type="file"
                onChange={handleFileChange}
                margin="normal"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                label="Upload Payment Screenshot"
                inputRef={fileInputRef}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                gap: 2,
              }}
            >
              <Button onClick={handleBack} variant="contained">
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default RegisterForWorkshop;