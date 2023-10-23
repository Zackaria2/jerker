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
          <Paper elevation={3} style={{ height: '100%', }}>
            {/* <iframe
      style={{ width: '100%', height: '100%', border: 'none' }}
      src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"
    ></iframe> */}
            <iframe
              style={{ width: '100%', height: '100%', border: 'none',borderRadius:'0.5rem' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162712.78350993383!2d16.339975925059633!3d62.99518378846751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46653cdb0412dccd%3A0x1a701a21e12409fb!2s840%2073%20Bispgarden%2C%20Sweden!5e0!3m2!1sen!2s!4v1697988649070!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
