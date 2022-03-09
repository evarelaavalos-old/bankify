import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Navbar from './components/Navbar';

function App() {
    let [slideIn, isSlideIn] = useState(false);

    useEffect(() => {
        isSlideIn(true);
        console.log(`Sliding in...`);
    }, []);

    let theme = createTheme({
        typography: {
            h1: {
                fontFamily: `'Lato', sans-serif`,
                fontWeight: 700,
                textAlign: 'center',
                margin: '0 auto',
                maxWidth: '20ch',
            }
        }
    });
    theme = responsiveFontSizes(theme);

    return (
        <div className="App">
            <Container maxWidth="lg">
                <Navbar />
                <div style={{ marginTop: '8rem' }}></div>
                <main>
                    <ThemeProvider theme={theme}>
                        <Slide
                            direction="up"
                            in={slideIn}
                            mountOnEnter
                            unmountOnExit
                            timeout={600}
                        >
                            <Typography variant="h1">
                                The simpler, safer way to pay and get paid.
                            </Typography>
                        </Slide>
                    </ThemeProvider>
                </main>
            </Container>
        </div>
    );
}

export default App;
