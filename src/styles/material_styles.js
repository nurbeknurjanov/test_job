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
    },
    palette: {
        primary: {
            main: '#48B6E7' ,
            contrastText:'white'
        },
        notActive: {
            main: '#F2F2F2',
            dark: '#dfe0e2',
            contrastText:'#4F4F4F'
        },
    },
});
theme.overrides.MuiToggleButton = {
    root:{
        padding:'4px 30px',
        fontSize:'12px',
        textTransform:'none',
        backgroundColor:theme.palette.notActive.main,
        color:'#4F4F4F',
        '&:hover': {
            backgroundColor:theme.palette.notActive.dark,
        },
        '&$selected': {
            backgroundColor:theme.palette.primary.main,
            color:'white',
            '&:hover': {
                backgroundColor:theme.palette.primary.dark,
            },
        },
    },
}
export {theme};

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