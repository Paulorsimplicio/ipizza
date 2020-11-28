import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [value, setValue] = React.useState('Dinheiro');

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA',
  });

  const handleChange = event => {
    setValues({...values, [event.target.name]: event.target.value});
    setValue(event.target.value);
  };

  
  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Insira as informações para entrega do seu pedido"
          title="Endereço de entrega"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor, insira o nome da rua, avenida e bairro."
                label="Endereço"
                margin="dense"
                onChange={handleChange}
                required
                value=''
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número"
                margin="dense"
                onChange={handleChange}
                required
                value=''
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Complemento"
                margin="dense"
                onChange={handleChange}
                required
                value=''
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número de telefone"
                margin="dense"
                onChange={handleChange}
                required
                value=''
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}>
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
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            href='/PaymentFeedBack'
          >
            Confirmar compra
          </Button>
        </CardActions>       
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
