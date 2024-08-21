import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Title } from '@components';
import { colors } from '@utilities';
import { AnimatedInView } from '../components';

const SkillItem = ({ img, text }) => {
    return (
        <Stack justifyContent="center" alignItems="center" gap={1}>
            <div
                style={{
                    backgroundColor: colors.tertiary,
                    WebkitMask: `url(${img}) no-repeat center/contain`,
                    mask: `url(${img}) no-repeat center/contain`,
                    width: '3rem',
                    height: '3rem',
                }}
            ></div>
            <Typography variant="subtitle1">{text}</Typography>
        </Stack>
    );
};

const SkillSection = ({ title, data, alt }) => {
    return (
        <Stack
            width="45%"
            justifyContent="center"
            alignItems="flex-start"
            gap={3}
        >
            <Stack alignItems="flex-start" justifyContent="center" width="90%">
                <AnimatedInView
                    animationProps={{ x: 0 }}
                    initialProps={{ x: alt ? -100 : 100 }}
                >
                    <Typography
                        color={colors.secondary}
                        variant="h5"
                        fontWeight={500}
                    >
                        {title}
                    </Typography>
                </AnimatedInView>
            </Stack>
            <Stack direction="row" gap={3} flexWrap="wrap">
                {data.map((item) => {
                    return (
                        <AnimatedInView
                            key={item.text}
                            initialProps={{ scale: 0.1, opacity: 0 }}
                            transitionProps={{ type: 'spring', stiffness: 100 }}
                        >
                            <SkillItem img={item.img} text={item.text} />
                        </AnimatedInView>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export const Skills = () => {
    const frontend = [
        {
            img: '/react.svg',
            text: 'React',
        },
        {
            img: '/typescript.svg',
            text: 'TypeScript',
        },
        {
            img: '/javascript.svg',
            text: 'JavaScript',
        },
        {
            img: '/jest.svg',
            text: 'Jest',
        },
    ];

    const backend = [
        {
            img: '/nodejs.svg',
            text: 'Node.js',
        },
        {
            img: '/ruby.svg',
            text: 'Ruby',
        },
        {
            img: '/express.svg',
            text: 'Express.js',
        },
        {
            img: '/graphql.svg',
            text: 'Graph QL',
        },
        {
            img: '/rest.svg',
            text: "REST API'S",
        },
    ];

    const databases = [
        {
            img: '/mongodb.svg',
            text: 'MongoDB',
        },
        {
            img: '/sql.svg',
            text: 'SQL',
        },
    ];

    const devOps = [
        {
            img: '/kubernetes.svg',
            text: 'Kubernetes',
        },
        {
            img: '/docker.svg',
            text: 'Docker',
        },
    ];

    const development = [
        {
            img: '/git.svg',
            text: 'Git',
        },
        {
            img: '/aws.svg',
            text: 'AWS',
        },
        {
            img: '/java.svg',
            text: 'Java',
        },
        {
            img: '/python.svg',
            text: 'Python',
        },
        {
            img: '/oop.svg',
            text: 'OOP',
        },
        {
            img: '/puppeteer.svg',
            text: 'Puppeteer',
        },
    ];

    const coding = [
        {
            img: '/codechef.svg',
            text: '4 star Codechef',
        },
        {
            img: '/leetcode.svg',
            text: '1852 @ Leetcode',
        },
    ];

    const ml = [
        {
            img: '/tensorflow.svg',
            text: 'Tensorflow',
        },
        {
            img: '/numpy.svg',
            text: 'Numpy',
        },
        {
            img: '/pandas.svg',
            text: 'Pandas',
        },
        {
            img: '/nlp.svg',
            text: 'NLP',
        },
    ];
    return (
        <Stack
            id="skills"
            sx={{ minHeight: '95vh' }}
            gap={10}
            padding="5rem 0 2rem 0"
        >
            <AnimatedInView
                initialProps={{ opacity: 0, scale: 0.1 }}
                transitionProps={{ duration: 0.5 }}
            >
                <Title text="SKILLS" align="center" />
            </AnimatedInView>

            <Stack
                direction="row"
                gap={5}
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
            >
                <SkillSection title="FRONTEND" data={frontend} alt={true} />
                <SkillSection title="BACKEND" data={backend} alt={false} />
                <SkillSection title="DATABASES" data={databases} alt={true} />
                <SkillSection title="DEVOPS" data={devOps} alt={false} />
                <SkillSection
                    title="DEVELOPMENT"
                    data={development}
                    alt={true}
                />
                <SkillSection title="CODING" data={coding} alt={false} />
                <SkillSection title="MACHINE LEARNING" data={ml} alt={true} />
            </Stack>
        </Stack>
    );
};
