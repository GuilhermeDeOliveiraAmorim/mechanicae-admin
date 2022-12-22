import {
  Grid,
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  Chip,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  tag: yup.string(),
  visible: yup.bool(),
});

const tags = ["Grid", "Switch", "Button", "Chip", "Formik"];

export default function AddTag() {
  const formik = useFormik({
    initialValues: {
      tag: "",
      visible: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} marginTop={8} marginBottom={8}>
          <Grid item xs={8} p={2}>
            <Stack spacing={2}>
              <TextField
                label="Tag"
                variant="outlined"
                fullWidth
                id="tag"
                name="tag"
                value={formik.values.tag}
                onChange={formik.handleChange}
                error={formik.touched.tag && Boolean(formik.errors.tag)}
                helperText={formik.touched.tag && formik.errors.tag}
              />
            </Stack>
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
          <Grid item xs={2} p={2}>
            <Stack justifyContent="center" alignItems="center" height="100%">
              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} p={2}>
            <Stack direction="row" gap={2}>
              {tags.map((tag) => (
                <Chip label={tag} clickable />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
