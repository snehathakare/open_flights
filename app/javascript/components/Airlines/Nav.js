import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Nav = () => {
 
    return (
        <Paper square>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
          >
            <Tab label="Airline Reviews" />
            <Tab label="Airport Reviews" />
            <Tab label="Information" />
        </Tabs>
      </Paper>
        )
}

export default Nav;