import React, { useState } from "react";
import styled from "@emotion/styled";
import line from "../img/LineBg.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
const FormContent = () => {
  const [name, setName] = useState(""); // State to store the name
  const [participationStatus, setParticipationStatus] = useState("қатысамын");

  const handleSend = () => {
    // Construct the message text using the form data
    const messageText = `Аты-жөні: ${name}  Қатысуы: ${participationStatus}`;

    // Make an API request to the Telegram Bot API
    axios
      .post(
        `https://api.telegram.org/bot6557386352:AAEbMqo56A1KsSkrsWfWfSICNqTah91w_ec/sendMessage?chat_id=@uzatuadamsany&text=${messageText}`
      )
      .then((response) => {
        console.log("Message sent:", response.data);
        // Handle success if needed
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // Handle error if needed
      });
  };
  return (
    <TextContentWrapper>
      <TitleText>
        Аты жөніңіз ( жұбайыңызбен келетін <br /> болсаңыз, екеуіңіздің де
        атыңызды
        <br />
        жазуыңызды өтінеміз)
      </TitleText>
      {/* <img src={line} alt="Background line " /> */}
      <FormControl
        style={{
          width: "-webkit-fill-available",
          padding: "0 40px",
          gap: "20px",
        }}
      >
        <TextField
          required
          id="outlined-basic"
          label="Аты-жөніңіз"
          variant="standard"
          size="small"
          fullWidth={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel id="demo-radio-buttons-group-label">Қатысуыңыз</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="қатысамын"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="қатысамын"
            control={<Radio />}
            label="қатысамын"
          />
          <FormControlLabel
            value="қатыса алмаймын"
            control={<Radio />}
            label="қатыса алмаймын"
          />
        </RadioGroup>
        <Button variant="contained" onClick={handleSend} endIcon={<SendIcon />}>
          Send
        </Button>
      </FormControl>
    </TextContentWrapper>
  );
};

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
`;

const TitleText = styled.h2`
  /* font-size: 36px; */
  letter-spacing: 2px;
  text-align: start;
  margin: 0;
  font-size: 32px;
  font-weight: 200;
  padding-left: 40px;
`;

export default FormContent;
