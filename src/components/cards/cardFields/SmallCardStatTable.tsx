import React from 'react';
import { Box, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

const SmallCardStatTable: React.FC<{ labels: string[]; values: string[] }> = ({ labels, values }) => {
  const rows = labels.map((label, index) => {
    return [label, values[index]];
  });
  console.log(rows);
  return (
    <TableContainer component={Box}>
      <Table aria-label="stat-table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[0]} sx={{ marginBottom: 1 }}>
              <TableCell
                key={row[0]}
                sx={{ fontWeight: 900, marginBottom: 1, paddingY: 0, paddingLeft: 0, border: 'none' }}
              >
                {row[0]}
              </TableCell>
              <TableCell key={row[1]} sx={{ padding: 0, border: 'none' }}>
                {row[1]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SmallCardStatTable;
