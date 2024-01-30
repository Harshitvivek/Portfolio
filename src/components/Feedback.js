import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Avatar, Grid, Paper, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';


export const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bhsi6m', 'template_mfvvmrf', form.current, 'cAvYS3YquvVHsn_Ad')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Your message was sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again later.');
      });
  };

    const paperStyle={ padding :20, height: '60vh',width:280, margin:'10% auto'}
    const avatarStyle={backgroundColor:'#63ffdb'}
    // const messageStyle={height:'50px'}

  return (
    
    <Grid container spacing={0}  >
        <Paper elevation={90} style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}>
                <DraftsOutlinedIcon/>
            </Avatar>
            
                <h2>Feedback</h2>
        </Grid>
        <form ref={form} onSubmit={sendEmail}>
            <TextField id="standard-basic" type='text' name="user_name" label="Name" placeholder='Enter Name' variant="standard" fullWidth />
            <TextField id="standard-basic" type='email' name="user_email" label="E-mail" placeholder='Enter E-mail' variant="standard" fullWidth />
            <TextField id="standard-basic" name="message" label="Message" placeholder='Enter Message' variant="standard" multiline fullWidth size='45px' margin="dense" />
            <Button variant="contained" type='submit' value="Submit" endIcon={<SendIcon />} fullWidth sx={{ marginTop: 4 }} >
                Send
            </Button>
        </form>
        </Paper>
    </Grid>
  );
}
export default Feedback;