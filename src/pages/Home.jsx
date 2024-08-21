import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { HeadShot } from '../components/HeadShot';
import { colors } from '../utilities/theme';
import { AnimatedInView } from '@components';
import Typewriter from 'typewriter-effect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Home = () => {
    const [isHover, setIsHover] = useState(-1);

    return (
        <Stack
            id="home"
            justifyContent="center"
            alignItems="flex-start"
            padding="5rem 0 5rem 0"
            minHeight="95vh"
            gap={5}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                width="100%"
            >
                <Stack
                    width="50%"
                    height="auto"
                    gap="5rem"
                    justifyContent="flex-start"
                >
                    <Stack
                        gap={12}
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <AnimatedInView
                            animationProps={{ y: 0 }}
                            initialProps={{ y: -100, opacity: 0 }}
                        >
                            <Stack
                                sx={{
                                    fontSize: '10rem',
                                    textShadow: '0 25px 25px black',
                                    fontWeight: '700',
                                    lineHeight: '8rem',
                                }}
                            >
                                <span>HE</span>
                                <span>LLO.</span>
                            </Stack>
                        </AnimatedInView>
                        <AnimatedInView
                            animationProps={{ x: 0 }}
                            initialProps={{ x: -100, opacity: 0 }}
                        >
                            <Stack
                                direction="row"
                                paddingLeft={1.5}
                                fontSize={24}
                                fontWeight={500}
                            >
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Nice to meet you!',
                                            'I am a Software Developer',
                                            'I am a Software Engineer',
                                            'I am a Full Stack Developer',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        cursor: '>',
                                    }}
                                />
                            </Stack>
                        </AnimatedInView>
                    </Stack>
                </Stack>

                <Stack width="35%" marginTop="auto">
                    <AnimatedInView
                        initialProps={{ scale: 0.1 }}
                        transitionProps={{ type: 'spring', stiffness: 100 }}
                    >
                        <HeadShot
                            fillColor={colors.secondary}
                            eyeColor={colors.tertiary}
                        />
                    </AnimatedInView>
                </Stack>

                <Stack
                    sx={{
                        marginTop: 'auto',
                        marginLeft: '1.5rem',
                        gap: '1rem',
                    }}
                >
                    <AnimatedInView
                        animationProps={{ x: 0 }}
                        transitionProps={{ duration: 1.6 }}
                        initialProps={{ x: 100, scale: 0.1 }}
                    >
                        <LinkedInIcon
                            onClick={() => {
                                window.open(
                                    'https://www.linkedin.com/in/srinivas-mulagala-298764191/',
                                    '_blank',
                                );
                            }}
                            sx={{
                                fontSize: '2rem',
                                cursor: 'pointer',
                                color:
                                    isHover == 0
                                        ? colors.tertiary
                                        : colors.secondary,
                                transition: 'all 500ms ease',
                                transform:
                                    isHover == 0 ? 'scale(1.2)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setIsHover(0)}
                            onMouseLeave={() => setIsHover(-1)}
                        />
                    </AnimatedInView>
                    <AnimatedInView
                        animationProps={{ x: 0 }}
                        transitionProps={{ duration: 1.4 }}
                        initialProps={{ x: 100, scale: 0.1 }}
                    >
                        <GitHubIcon
                            onClick={() => {
                                window.open(
                                    'https://github.com/Coder-Srinivas',
                                    '_blank',
                                );
                            }}
                            sx={{
                                fontSize: '2rem',
                                cursor: 'pointer',
                                color:
                                    isHover == 1
                                        ? colors.tertiary
                                        : colors.secondary,
                                transition: 'all 500ms ease',
                                transform:
                                    isHover == 1 ? 'scale(1.2)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setIsHover(1)}
                            onMouseLeave={() => setIsHover(-1)}
                        />
                    </AnimatedInView>
                    <AnimatedInView
                        animationProps={{ x: 0 }}
                        transitionProps={{ duration: 1.2 }}
                        initialProps={{ x: 100, scale: 0.1 }}
                    >
                        <AssignmentIcon
                            onClick={() => {
                                window.open('/Srinivas_Resume.pdf', '_blank');
                            }}
                            sx={{
                                fontSize: '2rem',
                                cursor: 'pointer',
                                color:
                                    isHover == 2
                                        ? colors.tertiary
                                        : colors.secondary,
                                transition: 'all 500ms ease',
                                transform:
                                    isHover == 2 ? 'scale(1.2)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setIsHover(2)}
                            onMouseLeave={() => setIsHover(-1)}
                        />
                    </AnimatedInView>
                    <AnimatedInView
                        animationProps={{ x: 0 }}
                        transitionProps={{ duration: 1 }}
                        initialProps={{ x: 100, scale: 0.1 }}
                    >
                        <EmailIcon
                            onClick={() => {
                                window.location.href =
                                    'mailto:sm250@rice.edu?subject=Hiring Inquiry&body=Hello, I would like to inquire about...';
                            }}
                            sx={{
                                fontSize: '2rem',
                                cursor: 'pointer',
                                color:
                                    isHover == 3
                                        ? colors.tertiary
                                        : colors.secondary,
                                transition: 'all 500ms ease',
                                transform:
                                    isHover == 3 ? 'scale(1.2)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setIsHover(3)}
                            onMouseLeave={() => setIsHover(-1)}
                        />
                    </AnimatedInView>
                </Stack>
            </Stack>

            <Stack marginLeft={-12}>
                <AnimatedInView
                    initialProps={{ y: -200, opacity: 0 }}
                    animationProps={{ y: 0 }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            transform: 'rotate(-90deg)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ArrowBackIcon /> Scroll Down -------------------
                    </Typography>
                </AnimatedInView>
            </Stack>
        </Stack>
    );
};
