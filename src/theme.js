export const electric = '#7382ff';
export const lemon = '#F4F4B8';
export const night20 = '#CDDADA';
export const defaultFontColor = '#054344';


export const theme = {
    palette: {
        primary: {
            main: electric,
            contrastText: defaultFontColor
        },
        secondary: {
          main: lemon,
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
                backgroundColor: night20,
                color: defaultFontColor,
            }
        },
        MuiIconButton: {
          root: {
              padding: 0,
              height: 24,
              width: 24,
              '&:hover': {
                backgroundColor: '#fff'
              }
          },
        },
        MuiInput: {
            root: {
              background: '#fff',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              padding: '1em 1.5em',
              width: 284,
              height: 56,
              '& input' : {
                padding: 0
              },
              'label + & ::placeholder': {
                opacity: '0.5 !important',
              }
            },
            underline: {
              '&:after': {
                borderBottomColor: '#cddada',
                transform: 'none',
              }
            },
            error: {
              color: electric
            },
            inputType: {
              height: 'auto'
            }
        },
    },
};