import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function a11yProps(index: number) {

  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

 function Header() {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, value: number) => {
    event.preventDefault()
    setValue(value);
   
    if (value === 1) {
      navigate("/apple")
    } else if (value === 2) {
      navigate("/business")
    } else if (value === 3) {
      navigate("/technology")
    } else if (value === 4) {
      navigate("/wsj")
    } else if (value === 5) {
      navigate("/us")
    }else {
      navigate("/business")
    }
    
  };


  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="News" {...a11yProps(0)}  />
          <Tab label="Apple" {...a11yProps(1)} />
          <Tab label="Business" {...a11yProps(2)} />
          <Tab label="Technology" {...a11yProps(3)} />
          <Tab label="Wall Street Journal" {...a11yProps(4)} />
          <Tab label="US" {...a11yProps(5)} />
        </Tabs>
      </AppBar>

    </Box>
  );
}
export default Header;