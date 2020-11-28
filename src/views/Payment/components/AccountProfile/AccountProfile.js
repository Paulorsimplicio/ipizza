import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
    margin: theme.spacing(1),
    width: '25ch',
    },
  },
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [value, setValue] = React.useState('Dinheiro');

  const handleChange = (event) => {
    setValue(event.target.value);
};

  const user = {
    name: 'Shen Zhi',
    city: 'São Paula',
    country: 'BRA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              Paula Arshavin
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
        <div className={classes.row}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Opções de pagamento:</FormLabel>
              <RadioGroup aria-label="Forma de pagamento" name="Forma de pagamento1" value={value} onChange={handleChange}>
                <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
                <form className={classes.root} noValidate autoComplete="off">                    
                  <TextField id="troco" label="Troco para:" />
                </form>
                <FormControlLabel value="Cartão" control={<Radio />} label="Cartão" />
                <form className={classes.root} noValidate autoComplete="off">                    
                  <TextField id="bandeira" label="bandeira do cartão:" />
                </form>
              </RadioGroup>
            </FormControl>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
