import React, { useState } from 'react';
import { duration, Stack, Typography } from '@mui/material';
import { Title } from '@components';
import { colors } from '@utilities';
import { AnimatedInView } from '../components';

const Technologies = ({ technologies, isHover, alt }) => {
    return (
        <Stack
            padding="1rem"
            justifyContent={alt ? 'flex-start' : 'flex-end'}
            width="80%"
            color={colors.tertiary}
            flexWrap="wrap"
            direction="row"
            gap="0rem 1rem"
            sx={{
                transition: 'all 500ms ease',
                transform: isHover
                    ? alt
                        ? 'translateX(10%)'
                        : 'translateX(-10%)'
                    : alt
                        ? 'translateX(-100%)'
                        : 'translateX(100%)',
            }}
        >
            {technologies.map((technology) => {
                return <Typography key={technology}>{technology}</Typography>;
            })}
        </Stack>
    );
};

const Description = ({ desc, isHover, alt }) => {
    return (
        <Stack
            width="90%"
            borderRadius=".5rem"
            bgcolor={colors.secondary20}
            padding="2rem"
            sx={{
                transition: 'all 500ms ease',
                transform: isHover
                    ? alt
                        ? 'translateX(10%)'
                        : 'translateX(-10%)'
                    : alt
                        ? 'translateX(-100%)'
                        : 'translateX(100%)',
            }}
        >
            <Typography textAlign="justify">{desc}</Typography>
        </Stack>
    );
};

const ProjectTitle = ({ title, alt, isHover }) => {
    return (
        <Stack
            alignItems="flex-start"
            zIndex="3"
            sx={{ transform: alt ? 'translateX(-30%)' : 'translateX(30%)' }}
        >
            <Typography
                bgcolor={colors.secondary}
                padding="1rem"
                borderRadius=".2rem"
                variant="h4"
                sx={{
                    transition: 'all 500ms ease',
                    transform: isHover ? 'scale(1.1)' : 'scale(1)',
                }}
            >
                {title}
            </Typography>
        </Stack>
    );
};

const ProjectItem = ({ img, desc, title, technologies, alt, link }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Stack
            height="25rem"
            direction="row"
            justifyContent={alt ? 'flex-start' : 'flex-end'}
            alignItems="flex-start"
            sx={{ cursor: 'pointer' }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => window.open(link, 'blank')}
        >
            {!alt ? (
                <Stack
                    padding="2rem 0"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    gap={3}
                >
                    <ProjectTitle title={title} isHover={isHover} alt={alt} />
                    <Description desc={desc} isHover={isHover} alt={alt} />
                    <Technologies
                        technologies={technologies}
                        isHover={isHover}
                        alt={alt}
                    />
                </Stack>
            ) : (
                ''
            )}
            <img
                src={img}
                width="50%"
                height="100%"
                style={{
                    zIndex: '2',
                    borderRadius: '.5rem',
                    transition: 'all 500ms ease',
                    transform: isHover ? 'scale(1.1)' : 'scale(1)',
                    filter: isHover ? 'none' : 'grayscale(1)',
                }}
            />
            {alt ? (
                <Stack
                    padding="2rem 0"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={3}
                >
                    <ProjectTitle title={title} isHover={isHover} alt={alt} />
                    <Description desc={desc} isHover={isHover} alt={alt} />
                    <Technologies
                        technologies={technologies}
                        isHover={isHover}
                        alt={alt}
                    />
                </Stack>
            ) : (
                ''
            )}
        </Stack>
    );
};

export const Projects = () => {
    const projects = [
        {
            img: '/Personal-Portfolio-v2/ipl-auction.png',
            desc: 'An application built by using: 1) RSS feeds to fetch the news. 2) Web Scraping to get the squad data. Used the RS256 algorithm and HTTP-only cookie to sign and store the JSON web token securely.',
            title: 'IPL AUCTION',
            technologies: [
                'React',
                'Node.js',
                'JavaScript',
                'Express.js',
                'MongoDB',
                'Socket.io',
            ],
            link: 'https://github.com/Coder-Srinivas/Ipl-Auction',
        },
        {
            img: '/Personal-Portfolio-v2/pixplate.png',
            desc: 'An Innovative app providing personalized recipes based on dietary needs. Users can select products or upload fridge photos. Utilizes TensorFlow for object detection and LLMs for tailored context - based recommendations based on liked recipes.',
            title: 'PIX PLATE',
            technologies: [
                'Generate AI',
                'LLM',
                'React',
                'Node.js',
                'JavaScript',
                'MongoDB',
                'Python',
                'Machine Learning',
            ],
            link: 'https://github.com/Coder-Srinivas/PixPlate',
        },
        {
            img: '/Personal-Portfolio-v2/annonimity.png',
            desc: 'Worried about your privacy? Well, cometh the hour cometh the app, Annonimity. Annonimity is a chat application which allows users to chat with others while staying anonymous. Get to know other without revealing your true self.',
            title: 'ANNONIMITY',
            technologies: [
                'Node.js',
                'JavaScript',
                'Express.js',
                'MongoDB',
                'Socket.io',
            ],
            link: 'https://github.com/Coder-Srinivas/Annonimity',
        },
        {
            img: '/Personal-Portfolio-v2/melasma.png',
            desc: 'Melasma is a serious skin condition characterized by facial pigmentation, often affecting darker-skinned individuals. This paper aims to compare different neural network techniques to identify the most effective approach for addressing melasma.',
            title: 'MELASMA DETECTION',
            technologies: [
                'Python',
                'Machine Learning',
                'Neural Networks',
                'Tensorflow',
                'sci-kit learn',
                'matplotlib',
            ],
            link: 'https://ieeexplore.ieee.org/abstract/document/9823495',
        },
    ];
    return (
        <Stack id="projects" minHeight="95vh" gap={10} padding="5rem 0 0 0">
            <Title text="PROJECTS" align="left" />
            <Stack gap={10}>
                {projects.map((project, index) => {
                    return (
                        <AnimatedInView
                            key={project.title}
                            initialProps={{ opacity: 0, scale: 0.5 }}
                            transitionProps={{
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100,
                            }}
                        >
                            <ProjectItem alt={index % 2 == 0} {...project} />
                        </AnimatedInView>
                    );
                })}
            </Stack>
        </Stack>
    );
};
