import React from 'react';
import { Typography } from '@mui/material';

export const Title = ({ text, align = 'right' }) => {
    return (
        <Typography
            variant="h2"
            fontWeight={500}
            position="relative"
            textAlign={align}
        >
            {text}
        </Typography>
    );
};
