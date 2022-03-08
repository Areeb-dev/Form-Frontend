import React, { lazy } from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Logo from "../asserts/Logo.png";
import "../App.css";
import axios from "axios";
//mui function
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  //   ml:10,
  color: theme.palette.text.secondary,
  height: "auto",
  lineHeight: "40px",
}));
const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };

export default function Form() {
  //get data state
  const [companyEmail, setCompanyEmail] = useState("");
  const [clientAgency, setClientAgency] = useState("");
  const [name, setName] = useState("");
  const [uniqueIdentifier, setUniqueIdentifier] = useState(0);
  const [govWinID, setGovWinID] = useState("");
  const [compatibilityDomain, setCompatibilityDomain] = useState([]);
  const [opportunityOverView, setOpportunityOverView] = useState([]);
  const [lead, setLead] = useState("");
  const [date, setDate] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  //error state
  const [companyEmailError, setCompanyEmailError] = useState(false);
  const [clientAgencyError, setClientAgencyError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [uniqueIdentifierError, setUniqueIdentifierError] = useState(false);
  const [govWinIDError, setGovWinIDError] = useState(false);
  const [compatibilityDomainError, setCompatibilityDomainError] =
    useState(false);
  const [opportunityOverViewError, setOpportunityOverViewError] =
    useState(false);
  const [leadError, setLeadError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [submissionDateError, setSubmissionDateError] = useState(false);

  function submitData(e) {
    e.preventDefault();
    if (companyEmail == "") {
      setCompanyEmailError(true);
    } else if (clientAgency == "") {
      setClientAgencyError(true);
    } else if (name == "") {
      setNameError(true);
    } else if (uniqueIdentifier == "") {
      setUniqueIdentifierError(true);
    } else if (govWinID == "") {
      setGovWinIDError(true);
    } else if (compatibilityDomain == "") {
      setCompatibilityDomainError(true);
    } else if (opportunityOverView == "") {
      setOpportunityOverViewError(true);
    } else if (lead == "") {
      setLeadError(true);
    } else if (date == "") {
      setDateError(true);
    } else if (submissionDate == "") {
      setSubmissionDateError(true);
    } else {
      let payLoad = {
        companyEmail,
        clientAgency,
        name,
        uniqueIdentifier,
        govWinID,
        compatibilityDomain,
        lead,
        date,
        submissionDate,
        opportunityOverView,
      };
      // console.log(payLoad)
      axios
        .post("/users", payLoad)
        .then((response) => {
          console.log(response);
          console.log("Data Submitted Sucessfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setTimeout(() => {
      setCompanyEmailError(false);
      setSubmissionDateError(false);
      setDateError(false);
      setNameError(false);
      setLeadError(false);
      setOpportunityOverViewError(false);
      setCompatibilityDomainError(false);
      setGovWinIDError(false);
      setUniqueIdentifierError(false);
      setClientAgencyError(false);
    }, 5000);

    console.log("Form Submitted");
  }

  //chip drop down Value
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 6,
          width: 530,
          mt: 10,
        },
      }}
    >
      {/* <Logo /> */}
      <Item elevation={12}>
        <img src={Logo} id="logo" />
        <Typography sx={{ mt: 2 }} variant="h5" gutterBottom component="div">
          <b>AretecSBD 8(a) Stars III Registration Form</b>
        </Typography>
        <Typography
          sx={{ ml: 3, textAlign: "start" }}
          variant="p"
          gutterBottom
          component="div"
        >
          Contact Email:<b id="emailhead">abc@gmail.com</b>
        </Typography>
        <Typography
          sx={{ ml: 3, textAlign: "start" }}
          variant="p"
          gutterBottom
          component="div"
        >
          Contact Number:<b id="numberhead">00000000</b>
        </Typography>
        <TextField
          error={companyEmailError}
          placeholder="Enter Email"
          InputLabelProps={{
            shrink: true,
          }}
          required
          fullWidth
          inputProps={{ style: inputStyle }}
          id="filled-basic"
          label="Company Email"
          variant="filled"
          sx={{
            ml: 3,
            pt: 2,
            width: 480,
            display: "flex",
            justifyContent: "center",
          }}
          onChange={(e) => {
            setCompanyEmail(e.target.value);
          }}
        />
        {/* <br></br> */}
        <br></br>
        <TextField
          error={clientAgencyError}
          placeholder="Enter Text"
          required
          inputProps={{ style: inputStyle }}
          sx={{
            ml: 3,
            width: 480,
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
          InputLabelProps={{
            shrink: true,
          }}
          id="standard-multiline-static"
          label="Client Agency"
          multiline
          rows={3}
          variant="filled"
          onChange={(e) => {
            setClientAgency(e.target.value);
          }}
        />
        <br></br>
        <TextField
          error={nameError}
          placeholder="Enter Text"
          required
          inputProps={{ style: inputStyle }}
          sx={{
            ml: 3,
            width: 480,
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
          fullWidth
          id="filled-basic"
          label="Name"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <TextField
          error={uniqueIdentifierError}
          placeholder="Enter Text"
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            ml: 3,
            pt: 2,
            width: 480,
            display: "flex",
            justifyContent: "center",
          }}
          inputProps={{ style: inputStyle }}
          id="standard-number"
          label="Unique Identifier"
          type="number"
          variant="filled"
          onChange={(e) => {
            setUniqueIdentifier(e.target.value);
          }}
        />
        <br></br>
        <TextField
          error={govWinIDError}
          placeholder="Text"
          inputProps={{ style: inputStyle }}
          sx={{
            pt: 2,
            ml: 3,
            width: 480,
            display: "flex",
            justifyContent: "center",
          }}
          fullWidth
          id="filled-basic"
          label="GroWin ID"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setGovWinID(e.target.value);
          }}
        />
        <br></br>
        <Autocomplete
          onChange={(event, value) => setCompatibilityDomain(value)}
          multiple
          id="tags-outlined"
          InputLabelProps={{
            shrink: true,
          }}
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[0]]}
          inputProps={{ style: inputStyle }}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              error={compatibilityDomainError}
              onChange={(e) => {
                console.log(e);
              }}
              inputProps={{ style: inputStyle }}
              sx={{
                pt: 2,
                ml: 3,
                // pb:3,
                width: 480,
                display: "flex",
                justifyContent: "center",
              }}
              {...params}
              variant="filled"
              label="Compatibility Domain"
            />
          )}
        />
        <br></br>
        <Autocomplete
          onChange={(event, value) => setOpportunityOverView(value)}
          multiple
          id="tags-outlined"
          options={top100Films}
          inputProps={{ style: inputStyle }}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              error={opportunityOverViewError}
              inputProps={{ style: inputStyle }}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                pt: 2,
                ml: 3,
                width: 480,
                display: "flex",
                justifyContent: "center",
              }}
              {...params}
              variant="filled"
              label="Opportunity OverView / Descriptions"
              placeholder="Enter Text"
            />
          )}
        />
        <br></br>
        <Stack sx={{ display: "flex", flexDirection: "row" }} component="form">
          <FormControl
            inputProps={{ style: inputStyle }}
            variant="filled"
            sx={{
              ml: 3,
              pt: 2,
              width: 220,
              display: "flex",
            }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Lead & support
            </InputLabel>
            <Select
              error={leadError}
              inputProps={{ style: inputStyle }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={lead}
              onChange={(e) => {
                setLead(e.target.value);
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField
            error={dateError}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            id="date"
            label="Anticapted RFP Date"
            type="date"
            sx={{
              pt: 2,
              pb: 2,
              ml: 3,
              width: 220,
              display: "flex",
            }}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <br></br>
        <TextField
          error={submissionDateError}
          onChange={(e) => {
            setSubmissionDate(e.target.value);
          }}
          id="date"
          label="Anticapted Submission Date"
          type="date"
          sx={{
            pt: 2,
            pb: 2,
            ml: 3,
            width: 480,
            display: "flex",
          }}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button onClick={submitData} sx={{ mb: 3 }} variant="contained">
          Submit
        </Button>
      </Item>
    </Box>
  );
}
