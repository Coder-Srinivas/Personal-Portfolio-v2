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
            img: '/Personal-Portfolio-v2/react.svg',
            text: 'React',
        },
        {
            img: '/Personal-Portfolio-v2/typescript.svg',
            text: 'TypeScript',
        },
        {
            img: '/Personal-Portfolio-v2/javascript.svg',
            text: 'JavaScript',
        },
        {
            img: '/Personal-Portfolio-v2/jest.svg',
            text: 'Jest',
        },
    ];

    const backend = [
        {
            img: '/Personal-Portfolio-v2/nodejs.svg',
            text: 'Node.js',
        },
        {
            img: '/Personal-Portfolio-v2/ruby.svg',
            text: 'Ruby',
        },
        {
            img: '/Personal-Portfolio-v2/express.svg',
            text: 'Express.js',
        },
        {
            img: '/Personal-Portfolio-v2/graphql.svg',
            text: 'Graph QL',
        },
        {
            img: '/Personal-Portfolio-v2/rest.svg',
            text: "REST API'S",
        },
    ];

    const databases = [
        {
            img: '/Personal-Portfolio-v2/mongodb.svg',
            text: 'MongoDB',
        },
        {
            img: '/Personal-Portfolio-v2/sql.svg',
            text: 'SQL',
        },
    ];

    const devOps = [
        {
            img: '/Personal-Portfolio-v2/kubernetes.svg',
            text: 'Kubernetes',
        },
        {
            img: '/Personal-Portfolio-v2/docker.svg',
            text: 'Docker',
        },
    ];

    const development = [
        {
            img: '/Personal-Portfolio-v2/git.svg',
            text: 'Git',
        },
        {
            img: '/Personal-Portfolio-v2/aws.svg',
            text: 'AWS',
        },
        {
            img: '/Personal-Portfolio-v2/java.svg',
            text: 'Java',
        },
        {
            img: '/Personal-Portfolio-v2/python.svg',
            text: 'Python',
        },
        {
            img: '/Personal-Portfolio-v2/oop.svg',
            text: 'OOP',
        },
        {
            img: '/Personal-Portfolio-v2/puppeteer.svg',
            text: 'Puppeteer',
        },
    ];

    const coding = [
        {
            img: '/Personal-Portfolio-v2/codechef.svg',
            text: '4 star Codechef',
        },
        {
            img: '/Personal-Portfolio-v2/leetcode.svg',
            text: '1852 @ Leetcode',
        },
    ];

    const ml = [
        {
            img: '/Personal-Portfolio-v2/tensorflow.svg',
            text: 'Tensorflow',
        },
        {
            img: '/Personal-Portfolio-v2/numpy.svg',
            text: 'Numpy',
        },
        {
            img: '/Personal-Portfolio-v2/pandas.svg',
            text: 'Pandas',
        },
        {
            img: '/Personal-Portfolio-v2/nlp.svg',
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
