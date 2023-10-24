import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AppCurrentVisits from '../app-current-visits';
import { Paper } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hej Jerker 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={5}>
          <AppCurrentVisits
            title="Uppdelning av fastigheter"
            chart={{
              series: [
                { label: 'Fond 1', value: 95500 },
                { label: 'Fond 2', value: 77300 },
                { label: 'Fond 3', value: 144895 },
                { label: 'Fond 4', value: 163550 },
                { label: 'Fond 5', value: 103090 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={7}>
          <Paper elevation={3} style={{ height: '440px',overflow:'hidden' }}>
            {/* <iframe
      style={{ width: '100%', height: '100%', border: 'none' }}
      src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"
    ></iframe> */}
             <iframe src="https://www.google.com/maps/d/embed?mid=13mTG0Rw3beWeAbvr5xgRG1eN__Sj5Jk&ehbc=2E312F" style={{width:'100%',border:0,marginTop: '-200px',height:'880px'}}></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
