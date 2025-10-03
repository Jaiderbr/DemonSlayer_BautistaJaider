import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';



import { Link } from "react-router-dom";
import './Cards.css'







const MultiActionAreaCard = ({ character }) => {

    return (
        <Card
            sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#121212",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
            }}
        >
            <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={character.img}
                    alt={character.name}

                    sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        objectPosition: "top",
                        "&:hover": {
                            backgroundColor: "#ff1744",
                            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.5)",
                            transform: "scale(1.05)",
                            transition: "transform 0.3s ease-in-out",                            
                        },
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#E53935", fontWeight: "bold" }}
                    >
                        {character.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "#E0E0E0" }}
                        className="card-description"
                    >
                        <div className="card-description">
                            “{character.quote}”
                        </div>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "flex-start", padding: "16px" }}>
                <Button
                    component={Link}
                    to={`/character/${character.id}`}
                    variant="contained"
                    color="error"
                    sx={{
                        textTransform: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        "&:hover": {
                            backgroundColor: "#ff1744",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                        },
                    }}
                >
                    More Info
                </Button>
            </CardActions>
        </Card>




    );
}

export default MultiActionAreaCard;
