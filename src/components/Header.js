import React, { useContext, Consumer } from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    MuiThemeProvider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { LoginDetails } from './Login';
import { ReactSession } from 'react-client-session';


const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    var jwt = require('jsonwebtoken');
    const data = ReactSession.get("userData");
    console.log(jwt.decode(ReactSession.get("userData"), "context data"))

    return (

        <MuiThemeProvider>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Navbar

                    </Typography>
                    {isMobile ? (
                        <DrawerComponent />
                    ) : (
                        <div className={classes.navlinks}>
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                            <Link to="about" className={classes.link}>
                                About
                            </Link>
                            <Link to="contact" className={classes.link}>
                                Contact
                            </Link>
                            <Link to="faq" className={classes.link}>
                                FAQ
                            </Link>
                            {/* <Link to="signup" className={classes.link} >
                                Signup
                            </Link>
                            <Link to="login" className={classes.link}>
                                Login
                            </Link> */}
                            <Link to="logout" className={classes.link}  >
                                Logout
                            </Link>
                            <LoginDetails.Consumer>

                                {data => {
                                    console.log(data, "info data")

                                    //let { token } = data;
                                    //console.log(jwt.decode(data, "infot data"))
                                    // return (
                                    //     <div style={menuStyle}>
                                    //         <h1>Test</h1>
                                    //         <Menu />
                                    //         <InfoBar />
                                    //     </div>
                                    // )
                                }}
                            </LoginDetails.Consumer>
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>

    );
}
export default Header;