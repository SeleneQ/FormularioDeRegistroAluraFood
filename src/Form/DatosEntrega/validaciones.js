export const validarDireccion = (address) => {
  return address.length > 3 ? true : false;
}
export const validarCiudad = (city) => {
  return city.length > 3 ? true : false;
}
export const validarProvincia = (province) => {
  return province.length > 3 ? true : false;
}