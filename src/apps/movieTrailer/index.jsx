import React, { useState } from "react";
import styled from "styled-components";
import { Button, CircularProgress, TextField } from "@mui/material";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";

const Container = styled.div`
    padding: 30px;
    background-color: #fff;
    color: #000;
`;

const Main = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const Heading = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
`;

const SubmitButton = styled(Button)`
    width: 200px;
    align-self: center;
`;

const PlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .react-player, iframe {
        width: 100%;
        max-width: 800px;
        aspect-ratio: 16 / 9;
        border: none;
    }
`;

const MovieTrailer = () => {
    const [trailerName, setTrailerName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [searchFallbackUrl, setSearchFallbackUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!trailerName.trim()) return;

        setIsLoading(true);
        setVideoUrl("");
        setSearchFallbackUrl("");

        try {
            const videoId = await movieTrailer(trailerName, { id: true });
            console.log("videoId:", videoId);

            if (videoId) {
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                setVideoUrl(embedUrl);
            } else {
                const query = encodeURIComponent(`${trailerName} official trailer`);
                const fallback = `https://www.youtube.com/embed?listType=search&list=${query}`;
                setSearchFallbackUrl(fallback);
                toast.info("Fallback to YouTube search results");
            }
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Container>
            <Main>
                <Heading>Movie Trailer</Heading>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        value={trailerName}
                        onChange={(e) => setTrailerName(e.target.value)}
                        label="Search trailer"
                        placeholder="Enter movie name"
                        required
                    />
                    <SubmitButton type="submit" variant="contained" disabled={isLoading}>
                        {isLoading ? <CircularProgress size={24} /> : "Search"}
                    </SubmitButton>
                </Form>

                {(videoUrl || searchFallbackUrl) && (
                    <>
                        <PlayerContainer>
                            <iframe
                                src={videoUrl || searchFallbackUrl}
                                title="Trailer"
                                allowFullScreen
                            />
                        </PlayerContainer>
                    </>
                )}

            </Main>
        </Container>
    );
};

export default MovieTrailer;
