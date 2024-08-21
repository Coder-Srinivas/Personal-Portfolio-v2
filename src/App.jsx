import { Container, Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { colors } from '@utilities';
import { Navbar, Footer } from '@components';
import { Home, About, Qualifications, Projects, Skills } from '@pages';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Box sx={{ backgroundColor: colors.primary, color: colors.white }}>
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                <motion.div
                    style={{
                        scaleX,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        margin: '0 auto',
                        height: '.2rem',
                        borderTopRightRadius: '100rem',
                        borderBottomRightRadius: '100rem',
                        background: `${colors.white}`,
                        transformOrigin: '0% 0%',
                        zIndex: 9999,
                    }}
                />

                <Navbar />
                <Home />
                <About />
                <Qualifications />
                <Projects />
                <Skills />
                <Footer />
            </Container>
        </Box>
    );
}

export default App;
