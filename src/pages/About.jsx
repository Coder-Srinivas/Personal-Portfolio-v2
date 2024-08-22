import React, { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { colors } from '@utilities';
import { Title } from '@components';
import { AnimatedInView } from '@components';
import { CallReceived } from '@mui/icons-material';

export const About = () => {
    const [isHover, setHover] = useState(false);
    return (
        <Stack
            id="about"
            direction="row"
            alignItems="center"
            height="95vh"
            width="100%"
            gap={15}
            position="relative"
        >
            <Stack
                position="absolute"
                top="30%"
                left="25rem"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {' '}
                <AnimatedInView
                    transitionProps={{
                        type: 'spring',
                        stiffness: 100,
                        ease: 'linear',
                    }}
                >
                    <Typography marginLeft={3}>Hover Over Me</Typography>{' '}
                    <CallReceived />{' '}
                </AnimatedInView>
            </Stack>
            <AnimatedInView
                transitionProps={{
                    type: 'spring',
                    stiffness: 100,
                    ease: 'linear',
                }}
            >
                <Stack position="relative" marginTop="-5rem">
                    <Box
                        position="relative"
                        borderRadius="0 0 100vw 100vw"
                        display="grid"
                        justifyContent="center"
                        alignItems="end"
                        overflow="hidden"
                        width="25rem"
                        sx={{
                            aspectRatio: '1/1.1',
                            transition: 'transform 500ms ease',
                            transform: isHover ? 'scale(1.1)' : 'scale(1)',
                        }}
                        onMouseOver={() => {
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            setHover(false);
                        }}
                    >
                        <img
                            src="/Personal-Portfolio-v2/headshot-no-bg.png"
                            style={{
                                width: '100%',
                                bottom: '-10%',
                                position: 'relative',
                                display: 'block',
                                zIndex: '2',
                                transition:
                                    'transform 500ms ease, filter 500ms ease-in',
                                filter: isHover ? 'none' : 'grayscale(1)',
                                transform: isHover
                                    ? 'translateY(-12%)'
                                    : 'translateY(0)',
                            }}
                        />

                        <div
                            style={{
                                width: '100%',
                                height: '90%',
                                bottom: '-10%',
                                position: 'absolute',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                aspectRatio: '1/1',
                                transform: 'scale(0.95)',
                                transition: 'all 500ms ease',
                                backgroundColor: isHover
                                    ? colors.tertiary
                                    : colors.secondary,
                            }}
                        ></div>
                    </Box>
                </Stack>
            </AnimatedInView>

            <Stack justifyContent="space-between" gap={10}>
                <AnimatedInView
                    animationProps={{ x: 0 }}
                    initialProps={{ x: 100, opacity: 0 }}
                >
                    <Title text="ABOUT" />
                </AnimatedInView>
                <AnimatedInView
                    animationProps={{ x: 0 }}
                    initialProps={{ x: 100, opacity: 0 }}
                >
                    <Typography textAlign={'justify'}>
                        I'm a versatile software developer with expertise in
                        Machine Learning and Full Stack Development. My
                        experience includes optimizing APIs, enhancing web
                        application performance, creating pixel perfect
                        components, designing full stack applications and many
                        more. I'm currently pursuing a Master's in Computer
                        Science at Rice University, and my passion for
                        problem-solving extends to competitive coding. I'm
                        excited to contribute my skills and drive to any
                        technology project.
                    </Typography>
                </AnimatedInView>
            </Stack>
        </Stack>
    );
};
