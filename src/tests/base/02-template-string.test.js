import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
   test('get Saludo debe retornar un Hola Carlos! si no hay argumento nombre', () => {
      const saludo = getSaludo();
      expect(saludo).toBe('Hola Carlos!');
   })

})