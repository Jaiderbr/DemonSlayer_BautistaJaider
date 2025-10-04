import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./CardsDetail.css";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';
import noImg from '../../assets/noImg.jpg';


const IconButtons = ({ icon, onClick }) => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton onClick={onClick}>
                {icon}
            </IconButton>
        </Stack>
    );
};


const CardsDetail = ({ character }) => {


    const [contImages, setContImages] = React.useState(0);
    const handleClickbk = () => {
        if (contImages < (character.combat_style?.length ?? 1) - 1) setContImages(contImages + 1);
        else setContImages(0);
    };

    const handleClick = () => {
        if (contImages > 0) setContImages(contImages - 1);
        else setContImages((character.combat_style?.length ?? 1) - 1);
    };



    return (
        <div className="cardsDetailContainer">
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    backgroundColor: "#121212",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                    "&:hover": {


                        transform: "none",
                        transition: "none",
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image={character.img ? character.img : noImg}
                    alt={character.name ? character.name : "unknown"}
                    sx={{
                        width: { xs: "100%", md: 350 },
                        objectPosition: "top",
                        height: { xs: 350, md: "auto" },
                        objectFit: "cover",
                        backgroundColor: "#000000",
                        "&:hover": {
                            backgroundColor: "#ff1744",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                            transform: "scale(1.05)",
                            transition: "transform 0.3s ease-in-out",
                        },
                    }}
                />

                <CardContent sx={{ flex: 1, padding: "24px" }}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        sx={{ color: "#E53935", fontWeight: "bold" }}
                    >
                        {character.name ? character.name : "unknown"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "#E0E0E0", marginBottom: "16px" }}
                    >
                        {character.description ? character.description : "unknown"}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                        <strong>Edad:</strong> {character.age ? character.age : "unknown"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                        <strong>Género:</strong> {character.gender ? character.gender : "unknown"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                        <strong>Raza:</strong> {character.race ? character.race : "unknown"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0BEC5" }}>
                        <strong>Afiliación:</strong> {character.affiliation?.name ? character.affiliation.name : "unknown"}
                    </Typography>

                    <blockquote style={{ color: "#FFCDD2", marginTop: "20px" }}>
                        "{character.quote ? character.quote : "unknown"}"
                    </blockquote>
                </CardContent>
            </Card>



            <Accordion sx={{
                marginTop: "1rem", backgroundColor: "#121212"
            }}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon sx={{ color: "#E53935" }} />}
                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <Typography sx={{
                        color: "#E53935",
                        fontWeight: "bold"
                    }}>
                        Combat Style
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Card sx={{
                        maxWidth: 400,
                        margin: "0 auto",
                        backgroundColor: "#121212",
                        "&:hover": {
                            transform: "none",
                            boxShadow: "none",
                        }

                    }}>
                        <CardMedia
                            component="img"
                            image={character?.combat_style?.[contImages]?.img ? character?.combat_style?.[contImages]?.img : noImg}
                            alt={character?.name ?? "character.quote "}
                            sx={{
                                width: "100%",
                                height: 250,
                                objectFit: "cover",
                                margin: 0,
                                borderTopRightRadius: "15px",
                                borderTopLeftRadius: "15px",
                            }}
                        />

                        <CardContent sx={{
                            backgroundColor: "rgba(50, 50, 50, 0.85)",
                            padding: 2,
                        }}>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                                {character.combat_style[contImages]?.name ?? "Unknown"}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#ddd", marginTop: 1 }}>
                                “{character.combat_style[contImages]?.description ?? "No description"}”
                            </Typography>
                        </CardContent>


                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ backgroundColor: "#B71C1C", padding: 1 }}
                        >

                            <IconButtons icon={<NavigateBeforeIcon sx={{ color: "#fff" }} />} onClick={handleClick} />
                            <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                                {character?.combat_style?.length ? contImages + 1 : 0} / {character?.combat_style?.length ?? 0}
                            </Typography>
                            <IconButtons icon={<NavigateNextIcon sx={{ color: "#fff" }} />} onClick={handleClickbk} />
                        </Stack>
                    </Card>
                </AccordionDetails>

            </Accordion>
        </div>
    );
};

export default CardsDetail;
