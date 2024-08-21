import { Tab, Tabs, Box, AppBar, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors } from '@utilities';

export const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const [elements, setElements] = useState([]);
    const [isHover, setIsHover] = useState(-1);

    useEffect(() => {
        setElements([
            {
                id: 'home',
                element: document.getElementById('home'),
                title: 'Home',
                val: 0,
            },
            {
                id: 'about',
                element: document.getElementById('about'),
                title: 'About',
                val: 1,
            },
            {
                id: 'qualifications',
                element: document.getElementById('qualifications'),
                title: 'Qualifications',
                val: 2,
            },
            {
                id: 'projects',
                element: document.getElementById('projects'),
                title: 'Projects',
                val: 3,
            },
            {
                id: 'skills',
                element: document.getElementById('skills'),
                title: 'Skills',
                val: 4,
            },
        ]);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elements.findIndex(
                        (element) => element.id == entry.target.id,
                    );
                    if (entry.isIntersecting) {
                        setValue(index);
                    }
                });
            },
            {
                threshold: '0.4',
            },
        );

        elements.forEach((element) => {
            observer.observe(element.element);
        });

        return () => {
            elements.forEach((element) => {
                if (element.element) {
                    observer.unobserve(element.element);
                }
            });
        };
    }, [elements]);

    const scrollIntoView = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: colors.secondary,
                borderRadius: '0 0 2rem 2rem',
                color: colors.white,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                padding="0 5rem"
            >
                <Stack justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1">
                        Srinivas Mulagala
                    </Typography>
                </Stack>
                <Tabs
                    value={value}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="navbar"
                >
                    {elements.map((element) => {
                        return (
                            <Tab
                                onMouseEnter={() => setIsHover(element.val)}
                                onMouseLeave={() => setIsHover(-1)}
                                key={element.id}
                                label={element.title}
                                onClick={() => scrollIntoView(element.id)}
                                sx={{
                                    transition: 'all 500ms ease',
                                    transform:
                                        isHover == element.val
                                            ? 'scale(1.1)'
                                            : 'scale(1)',
                                    color:
                                        isHover == element.val
                                            ? colors.tertiary
                                            : colors.white,
                                }}
                            />
                        );
                    })}
                </Tabs>
            </Stack>
        </AppBar>
    );
};
