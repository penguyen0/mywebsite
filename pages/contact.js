// This is my contact page 
import axios from "axios";
import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    form: {
        display:"flex",
        flexDirection:"column"
      },
  }));


export default function Contact() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const submit = async (event) => {
        event.preventDefault();
        console.log(name)
        console.log(email)
        console.log(phone)

        const response = await axios('http://127.0.0.1:5000/sendemail', {
            method:'POST',
            name,
            email,
            phone
        });
        console.log(response);
    }
    return (
        <div>
            <form className={classes.form}>
                <TextField
                    id="Name"
                    label="Name"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="Email"
                    label="Email"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="Phone"
                    label="Phone"
                    value={phone}
                    onChange={(event)=> setPhone(event.target.value)}
                    variant="outlined"
                />
                <Button onClick={submit} variant="outlined">Submit</Button>
            </form>
        </div>
    )
}

