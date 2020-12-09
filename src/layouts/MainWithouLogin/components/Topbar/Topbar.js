import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Button, Typography, Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SingUpIcon from '@material-ui/icons/PermContactCalendar';
import LoginIcon from '@material-ui/icons/PermIdentityOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signInButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo-chapa-quente.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Typography color='inherit'>                   
          Tel: (34) 4002-8922
        </Typography>
        <Hidden mdDown>
          <IconButton
            className={classes.signInButton}
            color="inherit"
            href='/sign-up'
          >
            <SingUpIcon />
          </IconButton>

          <IconButton
            className={classes.signInButton}
            color="inherit"
            href='/sign-in'
          >
            <LoginIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
