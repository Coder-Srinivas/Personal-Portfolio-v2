import React, { useState } from 'react';
import { Typography, Stack } from '@mui/material';
import {
    CalendarMonth,
    Opacity,
    SchoolRounded,
    WorkRounded,
} from '@mui/icons-material';
import { Title, AnimatedInView } from '@components';
import { colors } from '@utilities';

const DotAndLine = ({ last }) => {
    return (
        <Stack
            position="absolute"
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="5rem"
        >
            <div
                style={{
                    borderRadius: '50%',
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: colors.tertiary,
                }}
            ></div>
            {last ? (
                <div
                    style={{
                        width: '2px',
                        height: '12rem',
                        backgroundColor: colors.white,
                    }}
                ></div>
            ) : (
                ''
            )}
        </Stack>
    );
};

const QualificationTitleComponent = ({ title, subtitle, duration }) => {
    return (
        <Stack justifyContent={'center'} alignItems="center">
            <Stack width="11rem" gap={1}>
                <Typography variant="subtitle1" fontWeight={500}>
                    {title}
                </Typography>
                <Stack>
                    <Typography color={colors.tertiary} variant="body1">
                        {subtitle}
                    </Typography>
                    <Stack
                        direction="row"
                        color={colors.tertiary}
                        justifyContent="flex-start"
                        alignItems="center"
                        gap={1}
                    >
                        <CalendarMonth fontSize="1rem" />
                        <Typography variant="body2">{duration}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
const QualificationItem = ({
    title,
    subtitle,
    duration,
    desc,
    alt,
    last = false,
}) => {
    const [isHover, setHover] = useState(false);

    return (
        <Stack
            width="100%"
            gap={5}
            position="relative"
            direction="row"
            justifyContent={'center'}
            sx={{ cursor: 'pointer' }}
        >
            <DotAndLine last={last} />
            {alt ? <Stack width="50%"></Stack> : ''}
            <Stack width="50%" overflow="hidden">
                <Stack
                    direction="row"
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    gap={2}
                    padding="1.5rem"
                    borderRadius=".5rem"
                    minHeight="12rem"
                    maxHeight="12rem"
                    bgcolor={colors.secondary20}
                    sx={{
                        transition: 'all 500ms ease',
                        transform: isHover
                            ? 'translateX(0%)'
                            : !alt
                                ? 'translateX(62%)'
                                : 'translateX(-60%)',
                    }}
                >
                    {!alt ? (
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            gap={2}
                            width="100%"
                        >
                            <QualificationTitleComponent
                                title={title}
                                subtitle={subtitle}
                                duration={duration}
                            />
                            <Typography textAlign="justify" variant="body2">
                                {desc}
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            gap={3}
                            width="100%"
                        >
                            <Typography textAlign="justify" variant="body2">
                                {desc}
                            </Typography>
                            <QualificationTitleComponent
                                title={title}
                                subtitle={subtitle}
                                duration={duration}
                            />
                        </Stack>
                    )}
                </Stack>
            </Stack>
            {!alt ? <Stack width="50%"></Stack> : ''}
        </Stack>
    );
};

export const Qualifications = () => {
    const work = [
        {
            title: 'Software Development Intern',
            subtitle: 'OpenStax',
            duration: 'June 2024 - Present',
            desc: 'Optimized the learner study section by redesigning the code architecture, resulting in reduced page load times from 20 seconds to 2 seconds; this enhancement increased user satisfaction scores and platform retention by 20%.',
        },
        {
            title: 'Research Scientist',
            subtitle: 'Rice University',
            duration: 'June 2024 - Aug 2024',
            desc: 'Led the development and deployment of a community-based web application, delivering a functional prototype within a 3-month timeframe. Managed the full software development lifecycle, from requirement gathering through to deployment and maintenance.',
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'Rice University',
            duration: 'Jan 2024 - May 2024',
            desc: 'Collaborated with Prof. Joyner in Computer Security, enhancing students’ skills in software security through targeted exercises. Enabled mastery of offensive/defensive tactics, significantly improving course engagement and comprehension.',
        },
        {
            title: 'Software Development Intern',
            subtitle: 'MPB Ark Exim',
            duration: 'Mar 2023 - Aug 2023',
            desc: 'Engineered and optimized scalable APIs and background processes, achieving 25ms response times. Significantly improving data exchange efficiency between front-end and back-end systems, enhancing user experience.',
        },
        {
            title: 'Machine Learning Intern',
            subtitle: 'Bluepad',
            duration: 'Jan 2023 - Aug 2023',
            desc: 'Leveraged advanced data mining and analytical techniques with Matplotlib, Seaborn, Tableau, and Python, driving strategic decisions by uncovering key user behavior trends. This analytical approach led to a 15% improvement in content curation.',
        },
        {
            title: 'Technical Content Intern',
            subtitle: 'GeeksForGeeks',
            duration: 'Oct 2020 - Mar 2023',
            desc: 'Authored a multitude of in-depth articles focused on emerging technologies such as React and Node.js. Attained the prestigious distinction of Bronze Technical Writer within the organization.',
        },
        {
            title: 'Software Development Intern',
            subtitle: 'R2i2 Technologies',
            duration: 'June 2021 - Sep 2021',
            desc: 'Enhanced web application responsiveness by closely collaborating with UX/UI designers, translating designs into pixel-perfect components. Delivered a 16% reduction in page load times by optimizing code and implementing asynchronous asset loading.',
        },
    ];

    return (
        <Stack
            id="qualifications"
            justifyContent="center"
            alignItems="center"
            minHeight="95vh"
            padding="5rem 0 0 0"
            gap={10}
        >
            <AnimatedInView
                initialProps={{ opacity: 0, scale: 0 }}
                transitionProps={{ duration: 0.5 }}
            >
                <Title text="QUALIFICATIONS" />
            </AnimatedInView>

            <Stack minWidth="100%">
                {work.map((qualification, index) => {
                    return (
                        <Stack width="100%" direction="column" key={index}>
                            <AnimatedInView
                                animationProps={{ x: 0 }}
                                initialProps={{
                                    x: index % 2 == 0 ? -100 : 100,
                                    opacity: 0,
                                }}
                                transitionProps={{
                                    type: 'spring',
                                    stiffness: 100,
                                }}
                            >
                                <QualificationItem
                                    {...qualification}
                                    alt={index % 2 != 0}
                                    last={index != work.length - 1}
                                />
                            </AnimatedInView>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
};
