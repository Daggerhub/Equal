import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Button } from '../../globalStyles';
import ReactPlayer from 'react-player'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Vedio
} from './Solution.elements';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <InfoSec lightBg ='true'>
    <Container>
      <InfoRow >
        <InfoColumn>
          <TextWrapper>
          <Heading lightText=''>Solution</Heading>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{backgroundColor: "#1c2237"}}>
          <Tab label="Buddy Pair System" {...a11yProps(0)} />
          <Tab label="Group Tasks" {...a11yProps(1)} />
          <Tab label="Meetups" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}style={{backgroundColor: "#1c2237"}}>
      This will be involving various tasks related to daily life chores.  
      <br></br>
      Statistical data shows that both are expertise in random activities, involvement of the two will aid to groom up their tasks quicker.
      Providing the peers to perform those tasks, which are basically suppressed for a particular gender.
      These credited marks and remarks will aid a gender to provoke and boost to respect each and everyone’s work.  
      Tasks like-Cooking, Sewing, Participation in physical activities etc. 
      </TabPanel>
      <TabPanel value={value} index={1} style={{backgroundColor: "#1c2237"}}>
      Irrespective of any of notion, number of participants will be divided into groups and this will create following sense while performing a certain tasks:
      <br></br>
      <ul>
        <li>Respect for each other’s work</li>
        <li>Benefiting in promotion</li>
        <li>Interest development for the tasks</li>
        <li>As a helping hand to other’s work</li>
      </ul>
      </TabPanel>
      <TabPanel value={value} index={2} style={{backgroundColor: "#1c2237"}}>
      The meetup indulges clear factual points against NARROW-GAUGE people by putting up the following:
      <br></br>      
      <ul>
        <li>Girls too can be a breadwinner of a family.</li>
        <li>The remarks made from above two solutions will prove one’s power over other which if previously challenged. This will excite to take/give equal opportunities.</li>
        <li>Meetups will be collecting daily problems .</li>
      </ul>
      A community by self can influence in meetups or anyone can challenge the assigned expertise (in favor to support equality). 
      </TabPanel>
      </div>

      </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start='true'>
                {/* <Vedio> */}
                <ReactPlayer url='https://youtu.be/OUnPlEJQwgU'     width='100%'/>
               {/* </Vedio> */}
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
  );
}