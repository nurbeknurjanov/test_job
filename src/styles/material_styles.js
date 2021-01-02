import {createMuiTheme, makeStyles, fade} from "@material-ui/core/styles";
import {orange, green} from "@material-ui/core/colors";

const theme = createMuiTheme({

    overrides: {

        MuiButton: {
            root: {
                /*margin: "10px",
                padding: "50px"*/
            }
        },
        MuiToggleButton:{
            root:{
                background:"#ff4400",
                "&:hover": {
                    "background": "#ff4400"
                }
            },
        },
    },
    palette: {
        /*primary: {
            main: '#ff4400' ,
        },*/
    },
});
export {theme};
//export default theme;

export const containerStyle = theme=>{
    return {
        root: {
            maxWidth:'1224px',
            padding:'25px',
            [theme.breakpoints.down('sm')]: {
                padding:'15px',
            },
        },
    }
};

export const headerContainerStyle = theme=>{
    const styles = containerStyle(theme);
    styles.root.maxWidth = '1440px';
    styles.root.padding = '12px 15px';
    return styles;
};


export const buttonStyles = {
    root: {
        background: props =>
                        props.color === 'red'
                            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        "&:hover": {
            background: green[500],
            //background: fade(green[500], theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                background: "transparent"
            }
        }
    },
};