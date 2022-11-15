import { useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from "next/router";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Dashboard() {
    const router = useRouter();

    const [balance, setBalance] = useState(100);
    const [nger, setNger] = useState("Guilherme Amorim");

    async function logout() {
        router.push(`/login`);
    }

    return (
        <div className="flex flex-row">
            <div className="w-1/6 h-screen bg-slate-600 p-4 flex flex-col justify-between">
                <div className="flex justify-center items-center flex-col">
                    <img src="https://avatars.githubusercontent.com/u/5620529?v=4" alt="" className="rounded-full w-32 h-32" />
                    <h2>
                        {nger}
                    </h2>
                </div>
                <button className="w-full p-4 bg-gray-900 text-white hover:bg-gray-800" onClick={logout}>Sair</button>
            </div>
            <div className="w-5/6 flex flex-col gap-4 p-4">
                <div className="bg-slate-600 p-4">
                    <span>Balance: </span>
                    <span>{balance}</span>
                </div>
                <div className="bg-slate-600 p-4">
                    <input type="text" className="p-2" onChange={event => setNger(event.target.value)} />
                    <button></button>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nger</TableCell>
                                <TableCell align="right">Tipo</TableCell>
                                <TableCell align="right">Valor</TableCell>
                                <TableCell align="right">Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}