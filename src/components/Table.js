import React, { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Loader from './Loader';

import axios from "axios";
import axiosURL from "./config.json";

const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'question', headerName: 'question', width: 500 },
    { field: 'answer', headerName: 'answer', width: 150 },
    { field: 'function', headerName: 'function', width: 150 },
    { field: 'method', headerName: 'method', width: 150 },
    { field: 'area', headerName: 'area', width: 150 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 110,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${
    //             params.getValue(params.id, 'lastName') || ''
    //         }`,
    // },
];

export default function DataGridDemo() {
    const URL = axiosURL.axiosURL;
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(URL);
            setRows(result.data)
            setLoading(false)
            console.log("Запрос на 1к строк")
        }

        fetchData();
    }, [URL, setRows, setLoading]);

    if (loading) {
        return <Container><Loader/></Container>
    }
    return (
        <Container>
        <Grid container spacing={0} alignItems="center" alignContent="center" justify="center">
            <Grid item xs={12} sm={12} alignItems="center" alignContent="center" justify="center">
        <div style={{ height: 630, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection={true} />
        </div>
            </Grid>
            {/*<Grid item xs={12} sm={6} alignItems="center" alignContent="center" justify="center">*/}
            {/*</Grid>*/}
        </Grid>
        </Container>
    );
}
