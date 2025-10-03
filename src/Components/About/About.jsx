import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

function About() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
                color: '#E0E0E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 4, md: 8 },
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    sx={{
                        color: '#E53935',
                        fontWeight: 'bold',
                        mb: 3,
                        textAlign: 'center',
                        fontSize: { xs: '2rem', md: '3rem' },
                    }}
                >
                    About the Demon Slayer API
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.6,
                    }}
                >
                    Welcome to the <strong>Demon Slayer API</strong>, a comprehensive resource for fans and developers to explore data from the iconic Demon Slayer universe. This API provides access to characters, breathing techniques, and more, all crafted with passion for the series.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                >
                    Created by <strong>Jaider Bautista Rodriguez</strong>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                >
                    Access the API at:{' '}
                    <Link
                        href="https://demonslayerapi.com/api/v1"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: '#FF1744',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        https://www.demonslayer-api.com/
                    </Link>
                </Typography>

                <Box
                    sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <Link
                        href="https://github.com/Jaiderbr/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: '#E0E0E0',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            px: 2,
                            py: 1,
                            border: '1px solid #E53935',
                            borderRadius: '4px',
                            '&:hover': { backgroundColor: '#E53935', color: '#fff' },
                        }}
                    >
                        View on GitHub
                    </Link>
                    <Link
                        href="https://www.demonslayer-api.com/documentation"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: '#E0E0E0',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            px: 2,
                            py: 1,
                            border: '1px solid #E53935',
                            borderRadius: '4px',
                            '&:hover': { backgroundColor: '#E53935', color: '#fff' },
                        }}
                    >
                        API Documentation
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default About;