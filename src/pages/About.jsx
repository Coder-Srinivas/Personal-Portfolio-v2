import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { colors } from "@utilities";
import { Title } from "@components";
import { AnimatedInView } from "@components";
import { CallReceived } from "@mui/icons-material";

export const About = () => {
    const [isHover, setHover] = useState(false);
    return (
        <Stack
            id="about"
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            height="95vh"
            width="100%"
            gap={15}
            position="relative"
        >
            <Stack
                position="absolute"
                top="15rem"
                left="20rem"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {" "}
                <AnimatedInView
                    transitionProps={{
                        type: "spring",
                        stiffness: 100,
                        ease: "linear",
                    }}
                >
                    <Typography marginLeft={3}>Hover Over Me</Typography>{" "}
                    <CallReceived />{" "}
                </AnimatedInView>
            </Stack>
            <AnimatedInView
                transitionProps={{
                    type: "spring",
                    stiffness: 100,
                    ease: "linear",
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
                            aspectRatio: "1/1.1",
                            transition: "transform 500ms ease",
                            transform: isHover ? "scale(1.1)" : "scale(1)",
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
                                width: "100%",
                                bottom: "-10%",
                                position: "relative",
                                display: "block",
                                zIndex: "2",
                                transition:
                                    "transform 500ms ease, filter 500ms ease-in",
                                filter: isHover ? "none" : "grayscale(1)",
                                transform: isHover
                                    ? "translateY(-12%)"
                                    : "translateY(0)",
                            }}
                        />

                        <div
                            style={{
                                width: "100%",
                                height: "90%",
                                bottom: "-10%",
                                position: "absolute",
                                objectFit: "cover",
                                borderRadius: "50%",
                                aspectRatio: "1/1",
                                transform: "scale(0.95)",
                                transition: "all 500ms ease",
                                backgroundColor: isHover
                                    ? colors.tertiary
                                    : colors.secondary,
                            }}
                        ></div>
                    </Box>
                </Stack>
            </AnimatedInView>

            <Stack justifyContent="space-between" gap={10} textAlign="justify">
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
                    <Typography>
                        I'm a versatile software developer with expertise in
                        Full Stack Development and Machine Learning, blending
                        technical proficiency with a deep curiosity for software
                        development. My coding journey began with a fascination
                        for how things work, which naturally led me to explore
                        and master various technologies. Over the years, I’ve
                        developed a knack for optimizing APIs, enhancing web
                        application performance, and creating insightful
                        technical content.
                    </Typography>
                    <br />
                    <Typography>
                        Currently, I’m pursuing a Master’s in Computer Science
                        at Rice University. and My passion for Software
                        Development extends into competitive coding, where I
                        enjoy pushing my limits and refining my skills.
                    </Typography>
                    <br />
                    <Typography>
                        Outside of my academic and professional pursuits, I
                        maintain a balanced lifestyle by staying active through
                        regular workouts. I believe that physical fitness
                        sharpens my mental focus, helping me approach coding
                        challenges with a fresh perspective. This balance
                        between physical and mental activities fuels both my
                        creativity and productivity.
                    </Typography>
                    <br />
                    <Typography>
                        I'm always eager to connect with like-minded
                        professionals, explore new opportunities, and continue
                        growing in my career.
                    </Typography>
                </AnimatedInView>
            </Stack>
        </Stack>
    );
};
