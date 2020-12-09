import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { SearchInput } from 'components';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -13,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
        <Grid container>
          <Grid 
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}>
            <SearchInput className={classes.searchInput} placeholder="Procurar Produto"/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}></Grid>
          <Grid 
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
            align='right'>           
            <Button variant='contained' color='primary' aria-label="cart" href='/CarShopWithouLogin' >
              <StyledBadge color="secondary" >
                <ShoppingCartOutlinedIcon color='inherit'/>
              </StyledBadge>
            </Button> 
          </Grid>
        </Grid>  
     
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string,
  mockCarShopList: PropTypes.number
};

export default ProductsToolbar;
