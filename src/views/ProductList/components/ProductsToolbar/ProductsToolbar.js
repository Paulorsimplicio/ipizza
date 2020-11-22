import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { SearchInput } from 'components';

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

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      
        <Grid container spacing='2'>
          <Grid 
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}>
            <SearchInput className={classes.searchInput} placeholder="Procurar Produto"/>
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}></Grid>
          <Grid 
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
            align='right'>           
            <Button color="primary" variant="contained" href='/CarShop'>
              Finalizar Pedido
            </Button> 
          </Grid>
        </Grid>  
     
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
