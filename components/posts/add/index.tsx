import {
  Grid,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  SelectChangeEvent,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
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

const arrCategories = [
  { label: "Lorem", value: "591cd230-3a62-43ad-969d-0cfc6260cd0a" },
  { label: "pariatur", value: "ebbf3b2b-39b4-4f89-884f-674341b15495" },
  { label: "deserunt", value: "0eb3c3d6-0434-42e3-afbe-fd275d687df6" },
  { label: "exercitationem", value: "154b4732-cea0-42e5-a82f-8aee4b9df9f1" },
];

const arrTags = [
  { label: "conceitos", value: "4edb29d6-25a7-400d-9b1e-0cc48e144cc9" },
  { label: "filosófico", value: "7a9bb9bd-1964-4204-a47f-b49501f429a8" },
  { label: "Originalmente", value: "a6466aac-18fa-4761-b118-039e4fb37b48" },
  { label: "exprimem", value: "9d3e38cf-6098-4b94-8c40-19651f72d5f1" },
];

const validationSchema = yup.object({
  title: yup
    .string()
    .max(150, "São permitidos no máximo 150 caracteres para o título")
    .required("A postagem precisa de um título"),
  sub_title: yup
    .string()
    .max(250, "São permitidos no máximo 250 caracteres para o título")
    .required("A postagem precisa de um sutítulo"),
  lead: yup.string(),
  content: yup.string().required("A postagem precisa de um conteúdo"),
  categorie: yup.array(),
  tag: yup.array(),
  visible: yup.bool(),
});

export default function AddPost() {
  const [categorie, setCategorie] = useState<string[]>([]);
  const [tag, setTag] = useState<string[]>([]);

  const handleCategorie = (event: SelectChangeEvent<typeof categorie>) => {
    const {
      target: { value },
    } = event;
    setCategorie(typeof value === "string" ? value.split(",") : value);
  };

  const handleTag = (event: SelectChangeEvent<typeof tag>) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === "string" ? value.split(",") : value);
  };

  console.log(categorie, tag);

  const formik = useFormik({
    initialValues: {
      title: "",
      sub_title: "",
      lead: "",
      content: "",
      visible: "",
      categorie: [],
      tag: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} marginTop={8} marginBottom={8}>
        <Grid item xs={12} p={2}>
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
              error={
                formik.touched.sub_title && Boolean(formik.errors.sub_title)
              }
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
        <Grid item xs={6}>
          {categorie}
        </Grid>
        <Grid item xs={6}>
          {tag}
        </Grid>
        <Grid item xs={5} p={2}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="select-categorie">Categories</InputLabel>
            <Select
              labelId="select-categorie"
              id="select-multiple-categorie"
              variant="outlined"
              placeholder="Seu texto aqui"
              multiple
              name="categorie"
              value={formik.values.categorie}
              onChange={formik.handleChange}
              input={<OutlinedInput label="Categories" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              fullWidth
            >
              {arrCategories.map((categorieItem) => (
                <MenuItem key={categorieItem.value} value={categorieItem.value}>
                  <Checkbox
                    checked={categorie.indexOf(categorieItem.value) > -1}
                  />
                  <ListItemText primary={categorieItem.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={5} p={2}>
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
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              fullWidth
            >
              {arrTags.map((tagItem) => (
                <MenuItem key={tagItem.value} value={tagItem.label}>
                  <Checkbox checked={tag.indexOf(tagItem.label) > -1} />
                  <ListItemText primary={tagItem.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} p={2}>
          <Stack justifyContent="center" alignItems="center" height="100%">
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultValue={"false"} />}
                label="Visível"
                id="visible"
                name="visible"
                value={formik.values.visible}
                onChange={formik.handleChange}
              />
            </FormGroup>
          </Stack>
        </Grid>
        <Grid item xs={12} p={2}>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
