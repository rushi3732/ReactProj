import React, { useEffect } from 'react'
import axios from 'axios'
//import { Container } from 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, TextField, Button, FormLabel } from "@material-ui/core";
import "./register.css";

function Registration() {

    const userObj = {
        "firstName": '',
        "lastName": '',
        "city": '', 
        "email": '',
        "address": '',
        "state": '',
        "email": '',
        "mobile": '',
        "password": '',
    }
    const stateMessage = (false);
    const firstName = '', lastName = '', city = '', email = '', address = '', state = '', mobile = '', password = ''
    const [user, setUser] = React.useState(userObj)
    const [uservalidationF, setValidationF] = React.useState(firstName)
    const [uservalidationL, setValidationL] = React.useState(lastName)
    const [uservalidationC, setValidationC] = React.useState(city)
    const [uservalidationE, setValidationE] = React.useState(email)
    const [uservalidationA, setValidationA] = React.useState(address)
    const [uservalidationS, setValidationS] = React.useState(state)
    const [uservalidationM, setValidationM] = React.useState(mobile)
    const [uservalidationP, setValidationP] = React.useState(password)
    const onChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value })

    }
    const [showing, showingSet] = React.useState(stateMessage)

    const sendData = () => {

        if (user.firstName.length == 0) {
            setValidationF({ firstName: 'firstName should not empty' })
        }
        if (user.lastName.length == 0) {
            setValidationL({ lastName: 'lastName should not empty' })
        }
        if (user.email.length == 0) {
            setValidationE({ email: 'email should not empty' })
        }
        if (user.city.length == 0) {
            setValidationC({ city: 'city should not empty' })
        }
        if (user.address.length == 0) {
            setValidationA({ address: 'address should not empty' })
        }
        if (user.state.length == 0) {
            setValidationS({ state: 'state should not empty' })
        }
        if (user.mobile.length == 0) {
            setValidationM({ mobile: 'mobile should not empty' })
        }
        if (user.password.length == 0) {
            setValidationP({ password: 'password should not empty' })
        }
        axios.post("http://localhost:8080/register", user)
            .then(response => {

                if (response.status == 200) {
                    showingSet(true)

                    return JSON.stringify(response);
                } else {
                    console.log(response.success)
                    throw new Error('Something went wrong ...');
                }
            });

    }


    return (

        <div className="container-fluid login">

            <Container maxWidth="md" style={{ border: "40px solid #f2e9e9" }}>
                <Grid item xs={6} md={3} style={{ paddingLeft: "40%", margin: "40px" }}>
                    <FormLabel variant="contained" >Registration</FormLabel>
                </Grid>
                <form onChange={onChange} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="FirstName" variant="outlined" name="firstName" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationF.firstName ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationF.firstName}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="LastName" variant="outlined" name="lastName" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationL.lastName ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationL.lastName}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Email" variant="outlined" name="email" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationE.email ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationE.email}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="City" variant="outlined" name="city" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationC.city ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationC.city}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Address" variant="outlined" name="address" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationA.address ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationA.address}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="State" variant="outlined" name="state" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationS.state ? 'block' : 'none'), color: 'red', display: 'inline',
                        }}>{uservalidationS.state}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Mobile" variant="outlined" name="mobile" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationM.mobile ? 'block' : 'none'), color: 'red', display: 'inline'
                        }}>{uservalidationM.mobile}</p>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Password" type="password" variant="outlined" name="password" onChange={onChange} required />
                        </Grid>
                        <p style={{
                            display: (uservalidationP.password ? 'block' : 'none'), color: 'red', display: 'inline'
                        }}>{uservalidationP.password}</p>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" onClick={sendData}>Submit</Button>
                        </Grid>
                    </Grid>

                    <p style={{
                        display: (showing ? 'block' : 'none'), color: 'green', textAlign: 'center',
                    }}>{'User Details Saved Succussfully..!!'}</p>
                </form>
            </Container>
        </div >

    )

}

export default Registration