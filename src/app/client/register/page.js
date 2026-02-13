'use client';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function registerPage() {

    const handleSubmit = (event) => {
    console.log('Handling Submit');
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let firstName = data.get('firstName')
    let lastName = data.get('lastName')
    let email = data.get('email')
    let password = data.get('password')
    let confirmPassword = data.get('confirmPassword')

    console.log('Sent First Name: ' + firstName)
    console.log('Sent Last Name: ' + lastName)
    console.log('Sent Email: ' + email)
    console.log('Sent Password: ' + password)

    if (!firstName || !lastName || !email|| !password || !confirmPassword) {
        alert('Please fill in all fields!');
        return;
    }

    if (password != confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    runDBCallAsync(`/server/register?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&confirmPassword=${encodeURIComponent(confirmPassword)}`)
    };

    async function runDBCallAsync(url) {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Valid) {
            window.location.href = '/client/login';
        }
        else {
            alert(data.message || 'Registration failed!');
        }
    }

//*****************************************************************************************************************
    //Line 10:
        //When an occurrence happens in the browser (event), the browser looks for something that is
            //Designed to handle it then calls the function

    //Line 14:
        //Create an object to use the in built tool (FormData) so that when the event currentTarget (current form)
              //Is submitted the email and password are retrieved (FormData) and printed to the console once submitted
//*****************************************************************************************************************

    return (

    <Box sx = {{
            backgroundColor: '#59b3e6'
        }}
    >

    <Container maxWidth = 'sm'>

    {/* Centers everything on the screen */}
    <Box sx = {{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >

    {/* Form submit handler */}
    <Box component = 'form' onSubmit = {handleSubmit} noValidate sx = {{
            position: 'relative',
            width: '100%',
            maxWidth: 400,
            borderRadius: 2,
            overflow: 'auto',
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >

    {/* Background of form inputs */}
    <Box sx = {{
            position: 'relative'
        }}
    >

    {/* Form background */}
    <Box sx = {{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#ffffff',
            opacity: 0.4,
            zIndex: 0,
            borderRadius: 5
        }}
    />

    {/* Header for form */}
    <h1 style = {{
            padding: 20,
            textAlign: 'center',
            color: '#000000'
        }}
    >
        Register Below
    </h1>

    {/* Spacing for background of form */}
    <Box sx = {{
            position: 'relative',
            zIndex: 1,
            padding: 4
        }}
    >

    {/* Text field positioning */}
    <Box sx = {{
            width: '100%',
            textAlign: 'center'
        }}
    >

    {/* First name input field */}
    <TextField sx = {{
            backgroundColor: '#ffff',
            borderRadius: 3
        }}
        margin = 'normal'
        required
        id = 'firstName'
        label = 'First Name'
        name = 'firstName'
        autoComplete = 'firstName'
        autoFocus
    />

    {/* Last name input field */}
    <TextField sx = {{
            backgroundColor: '#ffff',
            borderRadius: 3
        }}
        margin = 'normal'
        required
        id = 'lastName'
        label = 'Last Name'
        name = 'lastName'
        autoComplete = 'lastName'
    />

    {/* Email input field */}
    <TextField sx = {{
            backgroundColor: '#ffff',
            borderRadius: 3
        }}
        margin = 'normal'
        required
        id = 'email'
        label = 'Email'
        name = 'email'
        autoComplete = 'email'
    />

    {/* Password input field */}
    <TextField sx = {{
            backgroundColor: '#ffff',
            borderRadius: 3
        }}
        margin = 'normal'
        required
        name = 'password'
        label = 'Password'
        type = 'password'
        id = 'password'
        autoComplete = 'password'
    />

    {/* Confirm password input field */}
    <TextField sx = {{
            backgroundColor: '#ffff',
            borderRadius: 3
        }}
        margin = 'normal'
        required
        name = 'confirmPassword'
        label = 'Confirm Password'
        type = 'confirmPassword'
        id = 'confirmPassword'
        autoComplete = 'confirmPassword'
    />
    </Box>

    <Box sx = {{
            width: '100%',
            textAlign: 'center'
        }}
    >

    {/* Register button positioning */}
    <Button type = 'submit' fullWidth variant = 'contained' sx = {{
            marginTop: 5,
            backgroundColor: '#18A558',
            width: 190,
            fontSize: '18px',
            borderRadius: 2
        }}
    >
        REGISTER
    </Button>
    </Box>

    {/* Login button positioning */}
    <Box sx = {{
            width: '100%',
            textAlign: 'center'
        }}
    >

    <p style = {{
            marginTop: 100,
            fontSize: '22px',
            color: '#000000'
        }}
    >
        Already have an account?
    </p>

    <Button type = 'button' variant = 'contained' sx = {{
            marginBottom: 5,
            marginTop: 2,
            backgroundColor: '#18A558',
            width: 190,
            fontSize: '15px',
            borderRadius: 2
        }}
        onClick = {() => window.location.href = '/client/login'}
    >
        LOGIN
    </Button>
    </Box>
    </Box>
    </Box>
    </Box>
    </Box>
    </Container>
    </Box>
    );
}