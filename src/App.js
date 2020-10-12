import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #fe6bbb, #ff8e53)',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: 'white',
        padding: '15px 30px'
    }
})

const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: 36,
            marginBottom: 15
        }
    },
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: orange[400],
        }
    }
})

function ButtonStyled() {
    const classes = useStyles(); // call the useStyle here
    return <Button className = { classes.root } > Test Styled Button < /Button>
}

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    return ( <
        FormControlLabel control = { < Checkbox
            checked = { checked }
            icon = { < DeleteIcon / > }
            checkedIcon = { < SaveIcon / > }
            onChange = {
                (e) => setChecked(e.target.checked)
            }
            inputProps = {
                { 'aria-label': 'secondary checkbox' }
            }
            />  }
            label = "Testing Checkbox" /
            >
        )
    }

    function App() {
        return ( <
            ThemeProvider theme = { theme } >
            <
            div className = "App" >
            <
            header className = "App-header" >
            <
            Typography variant = "h2"
            component = "div" >
            Welcome to Material UI <
            /Typography>  <
            Typography variant = "subtitle1" >
            Learn how to use Material UI <
            /Typography> 

            <
            ButtonStyled / >
            <
            TextField variant = "filled"
            color = "secondary"
            type = "email"
            label = "Contact Email"
            placeholder = "test@test.com" / >
            <
            CheckboxExample / >
            <
            ButtonGroup variant = "contained"
            color = "primary" >
            <
            Button startIcon = { < SaveIcon / > } >
            Save <
            /Button> 

            <
            Button endIcon = { < DeleteIcon / > } >
            Discard <
            /Button> 

            <
            /ButtonGroup>

            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >


            <
            /header>  < /
            div > <
            /ThemeProvider>
        );
    }

    export default App;

    // onClick = {() => alert('Hello World!') }