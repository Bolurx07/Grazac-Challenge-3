import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import tabStyle from './Tabcomponent.module.css'
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({button, checkbox, comment, remember, link}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="Phone Number" {...a11yProps(0)} />
          <Tab  label="Email" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <div>
            <label className={tabStyle.label} htmlFor="phone-no">Phone Number</label>
            <br />
            <input type="phone" className={tabStyle.tabinput} name="phone-no" placeholder="Phone Number"  />
          </div>
          <div>
                <label className={tabStyle.label} htmlFor="">Password</label>
                <br />
                <input id={tabStyle.password} type="password" name="password" placeholder="Password"  />
            </div>
            <div className={tabStyle.checkboxcontainer}>
              <div >
                <input id={tabStyle.checkbox} type="checkbox" name="checkbox"  />
                <span className={tabStyle.span}>{remember}</span>
              </div>
                <span className={tabStyle.span2}>{checkbox}</span>
            </div>

            <div >
              <button id={tabStyle.login} type="submit" >{button}</button>
            </div>
          <div className={tabStyle.foot}>
            <span> {comment}</span>
            <Link to='./'>{link}</Link> 
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div>
            <label className={tabStyle.label} htmlFor="email">Email</label>
            <br />
            <input type="email" className={tabStyle.tabinput} name="email" placeholder="Email"  />
          </div>
          <div>
                <label className={tabStyle.label} htmlFor="">Password</label>
                <br />
                <input id={tabStyle.password} type="password" name="password" placeholder="Password"  />
            </div>
            <div className={tabStyle.checkboxcontainer}>
              <div >
                <input id={tabStyle.checkbox} type="checkbox" name="checkbox"  />
                <span className={tabStyle.span}>{remember}</span>
              </div>
                <span className={tabStyle.span2}>{checkbox}</span>
            </div>

            <div >
              <button id={tabStyle.login} type="submit" >{button}</button>
            </div>
          <div className={tabStyle.foot}>
            <span> {comment}</span>
            <Link to='./'>{link}</Link> 
          </div>
      </TabPanel>
      
    </Box>
  );
}
