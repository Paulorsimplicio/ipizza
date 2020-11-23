import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
        <Typography variant='h1'>
          Itens adicionados ao seu carrinho
        </Typography>
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
      <UsersToolbar/>
    </div>
  );
};

export default UserList;
