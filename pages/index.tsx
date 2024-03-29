import {
  AppBar,
  Autocomplete,
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  TextareaAutosize,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import Head from "next/head";
import styled from "@emotion/styled";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import AddPost from "../components/posts/add";
import Footer from "../components/footer";

export const infos = {
  siteInfo: {
    title: "Mechanicae | Admin",
    description:
      "Lorem ipsum dolor sit amet. Cum voluptatem doloremque aut eligendi inventore non nihil ipsum id ipsam libero ea autem dolor.",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{infos.siteInfo.title}</title>
        <meta name="description" content={infos.siteInfo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {infos.siteInfo.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <AddPost />
      </Container>
      <Footer />
    </>
  );
}
