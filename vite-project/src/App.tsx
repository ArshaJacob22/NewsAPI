

import Apple from './sub/Header/Apple.tsx';
import business from './sub/Header/Business.tsx';
import Content from './sub/Header/Content';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import UnitedStates from './sub/Header/UnitedStates.tsx';
import Wallstreet from './sub/Header/Wallstreet.tsx';
import Technology from './sub/Header/technology.tsx';
import { createBrowserHistory } from "history";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';

import Business from './sub/Header/Business.tsx';
const history = createBrowserHistory();
function a11yProps(index: number) {

    return {    
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
export default function App() {
    const [value, setValue] = useState(0);
    const history = useHistory();
    const handleChange = (event: React.SyntheticEvent, value: number) => {
        event.preventDefault()
        setValue(value);

        if (value === 1) {
            console.log(value)
            history.push('/apple');
        } else if (value === 2) {
            history.push('/business');
         
        } else if (value === 3) {
            history.push('/technology');
            
        } else if (value === 4) {
            history.push('/wsj');
        } else if (value === 5) {
            history.push('/us');
        } else {
            history.push('/');
        }

    };


    return (
        <>
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
                        <Tab label="News" {...a11yProps(0)} />
                        <Tab label="Apple" {...a11yProps(1)} />
                        <Tab label="Business" {...a11yProps(2)} />
                        <Tab label="Technology" {...a11yProps(3)} />
                        <Tab label="Wall Street Journal" {...a11yProps(4)} />
                        <Tab label="US" {...a11yProps(5)} />
                    </Tabs>
                </AppBar>

            </Box>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/Apple" component={Apple}/>
                    <Route exact path="/business" component={business} />
                    <Route exact path="/us" component={UnitedStates} />
                    <Route exact path="/wsj" component={Wallstreet} />
                    <Route exact path="/technology" component={Technology} />
                </Switch>
            </Router>
        </>
    );
   
}