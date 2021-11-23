import React from 'react';
import '../styles/Header.css';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ServerLogin from './ServerLogin';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6">Frontman</Typography>
                        <Box sx={{ ml: 2 }}>
                            <ServerLogin />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
