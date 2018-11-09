export const primary = '#F4F4B8';
export const secondary = '#CDDADA';
export const defaultFontColor = '#054344';


export const theme = {
    pallette: {
        primary: primary
    },
    overrides: {
        MuiButton: {
            root: {
                fonFamily: 'Montserrat',
                fontSize: 16,
                backgroundColor: primary,
                borderRadius: 0,
                color: defaultFontColor,
                height: 56,
                width: 260,
                padding: '0 30px',
                justifyContent: 'space-between',
            },
            disabled: {
                backgroundColor: secondary,
                color: defaultFontColor,
            }
        },
    },
};