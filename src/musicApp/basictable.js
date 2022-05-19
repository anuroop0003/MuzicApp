
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { SongProvider } from "..";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

export default function BasicTable() {
  const { Songs } = useContext(SongProvider);
  return (
    <TableContainer component={Paper} square={true}>
      <Table sx={{ minWidth: 1/2, borderRadius:0 }} aria-label="simple table">
        <TableBody>
          {Songs.map((song) => (
            <TableRow>
              <TableCell component="th" scope="row">
              <Box
                  component="img"
                  src={song.image}
                  sx={{ height: 50 }}
                ></Box>
              </TableCell>
              <TableCell align="left"><Typography>{song.title}</Typography></TableCell>
              <TableCell align="left"><Typography>{song.album}</Typography></TableCell>
              <TableCell align="left"><Typography>{song.artist}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
