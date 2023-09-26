import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import clevertap from 'clevertap-web-sdk';

function Form() {
  
  const [name, setName] = useState('');
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const handleSubmit = () => {
    
    const userProperties = {
      Name: name,
      Identity: identity,
      Email: email,
      Phone: phone,
    };

    
    clevertap.profile.push({
        "Site": {
          "Name": name,                  // String
          "Identity": identity,                    // String or number
          "Email": email,               // Email address of the user
          "Phone": phone,                 // Phone (with the country code)
          "Gender": "M",                           // Can be either M or F
          "DOB": 14/10/2002, // Date of Birth. Javascript Date object
          "Photo": 'www.foobar.com/image.jpeg',    // URL to the Image
       
      
        }
       })

    
    setName('');
    setIdentity('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <TextField
        id="Name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="Identity"
        label="Identity"
        variant="outlined"
        value={identity}
        onChange={(e) => setIdentity(e.target.value)}
      />
      <TextField
        id="Email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="Phone"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Form;
