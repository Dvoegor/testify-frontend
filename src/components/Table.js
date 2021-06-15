import React, { useEffect, useState } from "react";
import { DataGrid, ruRU } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
    { field: 'question', headerName: 'question', width: 500 },
    { field: 'answer', headerName: 'answer', width: 150 },
    { field: 'function', headerName: 'function', width: 150 },
    { field: 'method', headerName: 'method', width: 150 },
    { field: 'area', headerName: 'area', width: 150 },
];

export default function DataGridDemo({sendDataToParent}) {
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
        <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
            <Grid item xs={12} sm={12} alignItems="center" alignContent="center" justify="center">
            <ThemeProvider theme={theme}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection={true} autoHeight={true}
                      // onRowSelected={(x) => console.log(x)}
                      onSelectionModelChange={(newSelection) => {
                          setSelectionModel(newSelection.selectionModel);
                          sendDataToParent(newSelection.selectionModel)
                      }}
                      selectionModel={selectionModel}
            />
            </ThemeProvider>
            </Grid>
        </Grid>
        </Container>
    );
}
