import React, { Component } from 'react'
import ExcelToJson from './seleccionArchivo'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import '../styles/estilos.css'
import '../styles/styles.css'


class Modulo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.definirValue = this.definirValue.bind(this);
  }

  definirValue(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const page =
      <div className='imagen'>
        <img alt='Logo comsistelco' className='imagen2' src='https://www.comsistelco.com/assets/images/logo_web.png' />
        <h2 className='titulo'>Valide el archivo</h2>
        <div className='contenedor-formulario'>
          <form>
          <FormControl >
          <InputLabel style={{color:'rgb(218, 214, 214)'}} id="label">Seleccione un modulo</InputLabel>
            <Select labelId="label"
            style={{color:'rgb(218, 214, 214)'}}
              className='select'
              value={this.state.value}
              onChange={this.definirValue}
              required>
              <MenuItem value='Analisis'>Analisis </MenuItem>
              <MenuItem value='Balance macromedicion'> Balance macromedicion</MenuItem>
              <MenuItem value='Hallazgos'> Hallazgos</MenuItem>
              <MenuItem value='Informativas'>Informativas </MenuItem>
              <MenuItem value='Liquidacion'>Liquidacion </MenuItem>
              <MenuItem value='Novedades'>Novedades </MenuItem>
              <MenuItem value='Storia'> Storia</MenuItem>
            </Select><br />
          </FormControl>
            <ExcelToJson modulo={this.state.value} />
          </form>
        </div>
      </div>;
    return (page)
  }
}
export default Modulo