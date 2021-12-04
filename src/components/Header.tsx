import React from 'react';
import '../styles/Header.css';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import ServerLogin from './ServerLogin';
import { useAppSelector } from '../app/hooks';

export default function Header(): JSX.Element {
    const fixedServer = useAppSelector((state) => state.server.fixedValue);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    variant="dense"
                    className="header__bar"
                    sx={{ py: { xs: 1, md: 0.5 } }}
                >
                    <Link
                        href="/"
                        variant="h6"
                        className="title__link"
                        sx={{ mr: 2 }}
                    >
                        {fixedServer}
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            alignItems: 'center',
                            display: { xs: 'block', md: 'flex' },
                        }}
                    >
                        <ServerLogin />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
