import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container,Stack,Typography,Button, Card,IconButton,Popover,MenuItem } from '@mui/material';
import Iconify from '../components/iconify/iconify';
import UserTableToolbar from '../sections/properties/user-table-toolbar';
import building1 from '/assets/images/properties/property1.jpg'
import building2 from '/assets/images/properties/property2.jpg'
import building3 from '/assets/images/properties/property3.jpg'
import building4 from '/assets/images/properties/property4.jpg'
import building5 from '/assets/images/properties/property5.jpg'
import '../global.css';


const columns = [
  { field: 'building', headerName: '', width: 140,   renderCell: (params) => (
    <img
        src={params.row.image} // Use the image source from the row data
        alt="Building"
        style={{ width: '100%', height: '80px', borderRadius: '0.5rem' }}
      />
  ), headerClassName: 'custom-header' },
  { field: 'byggnad', headerName: 'Byggnad',width:'90', headerClassName: 'custom-header',},
  { field: 'fond', headerName: 'Fond',width:'70',headerClassName: 'custom-header' },
  {
    field: 'ansvarig',
    headerName: 'Ansvarig AM',
    cellClassName: 'wrap-text', headerClassName: 'custom-header'
  },
  {
    field: 'yta',
    headerName: 'Yta [m2]',
    type: 'number',
    width:'70',
    headerClassName: 'custom-header'
  },
  {
    field: 'loa',
    headerName: 'LOA [m2]',
    type: 'number',
    width:'80',
    headerClassName: 'custom-header'
  }, 
   {
    field: 'bta',
    headerName: 'BTA [m2]',
    type: 'number',
    width:'70',
    headerClassName: 'custom-header'
  },
  {
    field: 'lokal_elproduktion',
    headerName: 'Lokal elproduktion',
    width:'140',
    headerClassName: 'custom-header',
    renderCell: (params) => {
        const value = params.value;
        let backgroundColor = 'transparent';
        let color = 'transparent'
  
        if (value === 'Ja') {
          backgroundColor = '#CFEAE3';
          color='#3C998B'
        } else if (value === 'Nej') {
          backgroundColor = '#F7DDD9';
          color='#BB2A25'
        }
  
        return (
          <div
            style={{
              width: '100%',
              marginLeft:'2rem',
              marginRight:'2rem',
              borderRadius:'0.5rem',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor,
              color,
            }}
          >
            {value}
          </div>
        );
    }
  },
  {
    field: 'installerad_effekt',
    headerName: 'Installerad effekt [kW]',
    width:'160',
  headerClassName: 'custom-header',
  renderCell: (params) => {
    const value = params.value;
        return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {value}
      </div>
    );
}
  },
  {
    field: 'geoenergi',
    headerName: 'Geoenergi?',
    headerClassName: 'custom-header',
    renderCell: (params) => {
        const value = params.value;
        let backgroundColor = 'transparent';
        let color = 'transparent'
  
        if (value === 'Ja') {
          backgroundColor = '#CFEAE3';
          color='#3C998B'
        } else if (value === 'Nej') {
          backgroundColor = '#F7DDD9';
          color='#BB2A25'
        }
  
        return (
          <div
            style={{
              width: '100%',
              marginLeft:'1rem',
              marginRight:'1rem',
              borderRadius:'0.5rem',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor,
              color,
            }}
          >
            {value}
          </div>
        );
    }
  },
  {
    field: 'epc_tal',
    headerName: 'EPC-Tal',
    headerClassName: 'custom-header',
    width:'70',
    renderCell: (params) => {
        const value = params.value;
            return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {value}
          </div>
        );
    }
  },
  {
    field: 'actions', // This is a custom field for the icon button
    headerName: '',
    headerClassName:'custom-header',
    width: 122,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
        const [open, setOpen] = useState(null);

const handleOpenMenu = (event) => {
  setOpen(event.currentTarget);
};

const handleCloseMenu = () => {
  setOpen(null);
};
return(
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
      <IconButton
      onClick={handleOpenMenu}
      >
       <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
      </div>
    );
    }
  },

];

const rows = [
  { id: 1,image: building1, byggnad: 'AOOXXO1', fond: 'Fond 1', ansvarig: 'Anders Andersson',yta:'35 400',loa:'34 425',bta:'36 450',lokal_elproduktion:'Ja',installerad_effekt:'122',geoenergi:'Ja',epc_tal:'1' },
  { id: 2,image:building2, byggnad: 'AOOXXO2', fond: 'Fond 2', ansvarig: 'Anders Andersson',yta:'34 690',loa:'27 000',bta:'29 700',lokal_elproduktion:'Ja',installerad_effekt:'106',geoenergi:'Ja',epc_tal:'1' },
  { id: 3,image:building3, byggnad: 'AOOXXO3', fond: 'Fond 3', ansvarig: 'Anders Andersson',yta:'34 000',loa:'30 090',bta:'31 860',lokal_elproduktion:'Nej',installerad_effekt:'-',geoenergi:'Ja',epc_tal:'1'},
  { id: 4,image:building4, byggnad: 'AOOXXO4', fond: 'Fond 4', ansvarig: 'Anders Andersson',yta:'33 250',loa:'29 500',bta:'31 221',lokal_elproduktion:'Nej',installerad_effekt:'-',geoenergi:'Nej',epc_tal:'1'},
  { id: 5,image:building5, byggnad: 'AOOXXO5', fond: 'Fond 5', ansvarig: 'Anders Andersson',yta:'32 500',loa:'28 900',bta:'30 600',lokal_elproduktion:'Ja',installerad_effekt:'125',geoenergi:'Nej',epc_tal:'1' },
  { id: 6,image:building1, byggnad: 'AOOXXO6', fond: 'Fond 6', ansvarig: 'Anders Andersson',yta:'31 800',loa:'28 250',bta:'29 925',lokal_elproduktion:'Ja',installerad_effekt:'100',geoenergi:'Nej',epc_tal:'1' },
  { id: 7,image:building2, byggnad: 'AOOXXO7', fond: 'Fond 7', ansvarig: 'Anders Andersson',yta:'32 000',loa:'27 625',bta:'29 250',lokal_elproduktion:'Nej',installerad_effekt:'-',geoenergi:'Ja',epc_tal:'1' },
  { id: 8,image:building3, byggnad: 'AOOXXO8', fond: 'Fond 8', ansvarig: 'Anders Andersson',yta:'30 405',loa:'27 000',bta:'28 620',lokal_elproduktion:'Ja',installerad_effekt:'95',geoenergi:'Nej',epc_tal:'1' },
  { id: 9,image:building4, byggnad: 'AOOXXO9', fond: 'Fond 9', ansvarig: 'Anders Andersson',yta:'29 690',loa:'27 200',bta:'28 800',lokal_elproduktion:'Nej',installerad_effekt:'-',geoenergi:'Nej',epc_tal:'1' },
];

export default function DataTable() {
  return (
    <Container maxWidth="xl">
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4">Fastighetslista</Typography>

    <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
      Lägg till Byggnad
    </Button>
  </Stack>
  <Card>
  <UserTableToolbar/>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => 100}
        autoHeight
        headerHeight={90}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,15]}
        columnHeaderHeight={70}
      />
    </Card>
    </Container>
  );
}