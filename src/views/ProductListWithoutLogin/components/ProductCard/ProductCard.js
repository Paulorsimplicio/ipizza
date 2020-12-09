import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  CardHeader,
  Button,
  Popover
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/MoneyTwoTone'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const ProductCard = props => {
  const { className, product, carList, ...rest } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };  
  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={product.title}
        align='center'
      >
      </CardHeader>  
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />           
        </div>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      <div align='center'>
        <Button
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          size="small"
        >
            <AddCircleOutlineIcon />
        </Button>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Adicionar ao carrinho</Typography>
      </Popover> 
      </div>               
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <MoneyIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.price}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <DonutLargeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {product.size}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
