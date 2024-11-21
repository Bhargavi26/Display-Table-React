import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        width: '70%',
        margin: 'auto'
    },
    header: {
        fontWeight: 'bold'
    }
});


const UserData = () => {
    const [data, setData] = useState([]);


    const classes = useStyles();



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data)
                // Handle successful response
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    

    return (
        <div>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.header}>Name</TableCell>
                            <TableCell align="left" className={classes.header}>Email</TableCell>
                            <TableCell align="left" className={classes.header}>Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.name} className={classes.tableRow}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.website}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
               </TableContainer>

        </div>
    )
}

export default UserData;