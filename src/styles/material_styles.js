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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
};