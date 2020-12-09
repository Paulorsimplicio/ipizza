import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid container spacing='2'>
        <Grid
        item
        lg={6}
        sm={6}
        xl={6}
        xs={12}>
            <Typography align='left'>
              Preço Total (R$): 55,00
            </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
          align='right'>
            <span className={classes.spacer} />
            <Button className={classes.exportButton}>Excluir Itens</Button>
            <Button
              color="primary"
              variant="contained"
              href='/sign-in-to-pay'
            >
              Confirmar Pedido
            </Button>
        </Grid>
      </Grid>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
