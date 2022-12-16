import { Grid, Stack, TextField, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, FormGroup, FormControlLabel, Switch, Button, SelectChangeEvent, Alert } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from "react";

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

const validationSchema = yup.object({
    title: yup
        .string()
        .max(150, 'São permitidos no máximo 150 caracteres para o título')
        .required('A postagem precisa de um título'),
    sub_title: yup
        .string()
        .max(250, 'São permitidos no máximo 250 caracteres para o título')
        .required('A postagem precisa de um sutítulo'),
    lead: yup
        .string(),
    content: yup
        .string()
        .required('A postagem precisa de um conteúdo')
});

export default function AddPost() {
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

    const formik = useFormik({
        initialValues: {
            title: '',
            sub_title: '',
            lead: '',
            content: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} marginTop={8} marginBottom={8}>
                <Grid xs={12} p={2}>
                    <Stack spacing={2}>
                        <TextField
                            label="Título"
                            variant="outlined"
                            fullWidth
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            label="Subtítulo"
                            variant="outlined"
                            fullWidth
                            id="sub_title"
                            name="sub_title"
                            value={formik.values.sub_title}
                            onChange={formik.handleChange}
                            error={formik.touched.sub_title && Boolean(formik.errors.sub_title)}
                            helperText={formik.touched.sub_title && formik.errors.sub_title}
                        />
                        <TextField
                            label="Lead"
                            variant="outlined"
                            fullWidth
                            id="lead"
                            name="lead"
                            value={formik.values.lead}
                            onChange={formik.handleChange}
                            error={formik.touched.lead && Boolean(formik.errors.lead)}
                            helperText={formik.touched.lead && formik.errors.lead}
                        />
                        <TextField
                            label="Seu texto aqui"
                            variant="outlined"
                            multiline
                            rows={20}
                            maxRows={20}
                            fullWidth
                            id="content"
                            name="content"
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            error={formik.touched.content && Boolean(formik.errors.content)}
                            helperText={formik.touched.content && formik.errors.content}
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
                    <Button variant="contained" type="submit">Salvar</Button>
                </Grid>
            </Grid>
        </form>
    );
}