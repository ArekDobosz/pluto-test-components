export const primary = '#F4F4B8';
export const secondary = '#CDDADA';
export const defaultFontColor = '#054344';


export const theme = {
    palette: {
        secondary: {
          main: primary,
          contrastText: defaultFontColor
        }
    },
    overrides: {
        MuiButton: {
            root: {
                fontFamily: 'Montserrat',
                fontSize: 16,
                borderRadius: 0,
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