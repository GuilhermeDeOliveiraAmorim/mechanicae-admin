import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import AddPost from "../../../../components/posts/add";
import AddTag from "../../../../components/tags/add";

export const infos = {
  siteInfo: {
    title: "Mechanicae | Admin",
    description:
      "Lorem ipsum dolor sit amet. Cum voluptatem doloremque aut eligendi inventore non nihil ipsum id ipsam libero ea autem dolor.",
  },
};

export default function AddTagPage() {
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
        <AddTag />
      </Container>
      <Box
        sx={{
          width: "100%",
          height: 200,
          backgroundColor: "primary.main",
        }}
      ></Box>
    </>
  );
}
