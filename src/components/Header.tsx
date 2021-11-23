import React from 'react';
import '../styles/Header.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6">Frontman</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
