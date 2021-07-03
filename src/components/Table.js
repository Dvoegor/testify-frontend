import React, { useEffect, useState } from "react";
import { DataGrid, ruRU } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Loader from './Loader';

import axios from "axios";
import axiosURL from "./config.json";

const theme = createMuiTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    ruRU,
);

const columns = [
    { field: 'question', headerName: 'Вопрос', width: 500 },
    { field: 'answer', headerName: 'Ответ', width: 150 },
    // { field: 'function', headerName: 'function', width: 150 },
    // { field: 'method', headerName: 'method', width: 150 },
    { field: 'area', headerName: 'Область', width: 150 },
];

export default function DataGridDemo({sendIdsToParent}) {
    const URL = axiosURL.axiosURL;
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [selectionModel, setSelectionModel] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(URL);
            setRows(result.data)
            setLoading(false)
        }

        fetchData().then();
    }, [URL, setRows, setLoading]);

    if (loading) {
        return <Container><Loader/></Container>
    }
    return (
        <Container>
        <Grid container spacing={0} alignItems="left" alignContent="left" justify="left">
        <Typography variant="h5" component="h2" align="left" style={{ marginBottom: 20}}>
                    Выберите вопросы, которые вы бы хотели видеть в тесте:
                    </Typography>
            <Grid item xs={12} sm={12} alignItems="center" alignContent="center" justify="center">
            <ThemeProvider theme={theme}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection={true} autoHeight={true}
                      // onRowSelected={(x) => console.log(x)}
                      onSelectionModelChange={(newSelection) => {
                          setSelectionModel(newSelection.selectionModel);
                          sendIdsToParent(newSelection.selectionModel)
                      }}
                      selectionModel={selectionModel}
            />
            </ThemeProvider>
            </Grid>
        </Grid>
        </Container>
    );
}
