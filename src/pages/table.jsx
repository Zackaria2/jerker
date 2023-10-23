import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container,Stack,Typography,Button, Card } from '@mui/material';
import Iconify from '../components/iconify/iconify';
import UserTableToolbar from '../sections/properties/user-table-toolbar';

const columns = [
  { field: 'building', headerName: '', width: 70 },
  { field: 'byggnad', headerName: 'Byggnad',width:'70'},
  { field: 'fond', headerName: 'Fond',width:'40' },
  {
    field: 'ansvarig',
    headerName: 'Ansvarig AM',
  },
  {
    field: 'yta',
    headerName: 'Yta [m2]',
    type: 'number',
    width:'70'
  },
  {
    field: 'loa',
    headerName: 'LOA [m2]',
    type: 'number',
    width:'80'
  },  {
    field: 'bta',
    headerName: 'BTA [m2]',
    type: 'number',
    width:'70'
  },
  {
    field: 'lokal_elproduktion',
    headerName: 'Lokal elproduktion',
    width:'140'
  },
  {
    field: 'installerad_effekt',
    headerName: 'Installerad effekt [kW]',
  },
  {
    field: 'geoenergi',
    headerName: 'Geoenergi?',
  },
  {
    field: 'epc_tal',
    headerName: 'EPC-Tal',
  },

];

const rows = [
  { id: 1, byggnad: 'AOOXXO1', fond: 'Fond 1', ansvarig: 'Anders Andersson',yta:'35 400',loa:'35 400' },
  { id: 2, byggnad: 'AOOXXO2', fond: 'Fond 2', ansvarig: 'Anders Andersson',yta:'34 690',loa:'35 400' },
  { id: 3, byggnad: 'AOOXXO3', fond: 'Fond 3', ansvarig: 'Anders Andersson',yta:'34 000',loa:'35 400'},
  { id: 4, byggnad: 'AOOXXO4', fond: 'Fond 4', ansvarig: 'Anders Andersson',yta:'33 250',loa:'35 400' },
  { id: 5, byggnad: 'AOOXXO5', fond: 'Fond 5', ansvarig: 'Anders Andersson',yta:'32 500',loa:'35 400' },
  { id: 6, byggnad: 'AOOXXO6', fond: 'Fond 6', ansvarig: 'Anders Andersson',yta:'31 800',loa:'35 400' },
  { id: 7, byggnad: 'AOOXXO7', fond: 'Fond 7', ansvarig: 'Anders Andersson',yta:'32 000',loa:'35 400' },
  { id: 8, byggnad: 'AOOXXO8', fond: 'Fond 8', ansvarig: 'Anders Andersson',yta:'30 405',loa:'35 400' },
  { id: 9, byggnad: 'AOOXXO9', fond: 'Fond 9', ansvarig: 'Anders Andersson',yta:'29 690',loa:'35 400' },
];

export default function DataTable() {
  return (
    <Container>
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4">Fastighetslista</Typography>

    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
      Lägg till Byggnad
    </Button>
  </Stack>
  <Card>
  <UserTableToolbar/>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,15]}
        checkboxSelection
      />
    </div>
    </Card>
    </Container>
  );
}