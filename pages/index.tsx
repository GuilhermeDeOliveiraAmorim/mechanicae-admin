import { AppBar, Autocomplete, Badge, Box, Button, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack, Switch, TextField, TextareaAutosize, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Head from 'next/head';
import styled from '@emotion/styled';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';

export const infos = {
	"siteInfo": {
		"title": "Mechanicae | Admin",
		"description": "Lorem ipsum dolor sit amet. Cum voluptatem doloremque aut eligendi inventore non nihil ipsum id ipsam libero ea autem dolor."
	}
};

const categories = [
	"Lorem",
	"pariatur",
	"deserunt",
	"exercitationem"
];

const tags = [
	"conceitos",
	"filosófico",
	"Originalmente",
	"exprimem"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function Home() {
	const [categorie, setCategorie] = useState<string[]>([]);
	const [tag, setTag] = useState<string[]>([]);

	const handleCategorie = (event: SelectChangeEvent<typeof categorie>) => {
		const {
			target: { value },
		} = event;
		setCategorie(
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	const handleTag = (event: SelectChangeEvent<typeof tag>) => {
		const {
			target: { value },
		} = event;
		setTag(
			typeof value === 'string' ? value.split(',') : value,
		);
	};

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
					<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" component="div">
						{infos.siteInfo.title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Grid container spacing={2} marginTop={8}>
					<Grid xs={12} p={2}>
						<Stack spacing={2}>
							<TextField
								label="Título"
								variant="outlined"
								fullWidth
							/>
							<TextField
								label="Subtítulo"
								variant="outlined"
								fullWidth
							/>
							<TextField
								label="Lead"
								variant="outlined"
								fullWidth
							/>
							<TextField
								label="Seu texto aqui"
								variant="outlined"
								multiline
								rows={20}
								maxRows={20}
								fullWidth
							/>
						</Stack>
					</Grid>
					<Grid xs={5} p={2}>
						<FormControl sx={{ width: "100%" }}>
							<InputLabel id="select-categorie">Categories</InputLabel>
							<Select
								labelId="select-categorie"
								id="select-multiple-categorie"
								variant="outlined"
								placeholder="Seu texto aqui"
								multiple
								value={categorie}
								onChange={handleCategorie}
								input={<OutlinedInput label="Categories" />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={MenuProps}
								fullWidth
							>
								{categories.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={categorie.indexOf(name) > -1} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid xs={5} p={2}>
						<FormControl sx={{ width: "100%" }}>
							<InputLabel id="select-tag">Tag</InputLabel>
							<Select
								labelId="select-tag"
								id="select-multiple-tag"
								variant="outlined"
								placeholder="Seu texto aqui"
								multiple
								value={tag}
								onChange={handleTag}
								input={<OutlinedInput label="Tags" />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={MenuProps}
								fullWidth
							>
								{tags.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={tag.indexOf(name) > -1} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid xs={2} p={2}>
						<Stack justifyContent="center" alignItems="center" height="100%">
							<FormGroup>
								<FormControlLabel control={<Switch defaultChecked />} label="Visível" />
							</FormGroup>
						</Stack>
					</Grid>
					<Grid xs={12} p={2}>
						<Button variant="contained">Salvar</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
