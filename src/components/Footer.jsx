import React from 'react';
import { Stack, Typography } from '@mui/material';
import { colors } from '../utilities/theme';

export const Footer = () => {
    return (
        <Stack
            id="footer"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
            borderTop={`2px solid ${colors.secondary}`}
            marginTop="5rem"
            padding="5rem 0"
        >
            <Typography>Created and Designed by</Typography>
            <Typography>Srinivas Mulagala</Typography>
        </Stack>
    );
};
