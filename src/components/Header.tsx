import React from 'react';
import '../styles/Header.css';
import { Grid } from '@mui/material';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <header className="header">
                <div className="header__content">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <a href="/" className="header__link">
                                Frontman
                            </a>
                        </Grid>
                    </Grid>
                </div>
            </header>
        );
    }
}
