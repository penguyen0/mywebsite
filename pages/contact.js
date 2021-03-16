// This is my contact page 
import axios from "axios";
import { useState } from "react";

export default function Contact() {
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
            <form>
                <label >Name</label>
                <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
                <label >Email</label>
                <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)} />
                <label >Phone Number</label>
                <input type="number" value={phone} onChange={(event)=> setPhone(event.target.value)} />
                <button onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

