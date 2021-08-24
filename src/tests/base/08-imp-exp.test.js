import { getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes'
describe('Test de 08/imp/exp', () => {
   test('Debe retornar todos los heroes de DC', () => {
      const DC = heroes.filter(h => h.owner === 'DC');
      const heroesDC = getHeroesByOwner('DC');
      expect(heroesDC).toEqual(DC);
   })
   test('Debe retornar dos valores de marvel', () => {
      const heroesDC = getHeroesByOwner('Marvel').length;
      expect(heroesDC).toBe(2);
   })


})