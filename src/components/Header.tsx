import React from 'react';
import '../styles/Header.css';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import ServerLogin from './ServerLogin';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense" className="header__bar">
                        <Link href="/" variant="h6" className="title__link">
                            Frontman
                        </Link>
                        <Box
                            sx={{
                                flexGrow: 1,
                                ml: 2,
                            }}
                        >
                            <ServerLogin />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
