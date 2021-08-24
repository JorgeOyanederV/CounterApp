import React, { Component } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CounterApp from '../CounterApp';

describe('Pruebas de <counterApp />', () => {
   test('Debe de mostrar el valor por defecto cuando no se le envia el valor', () => {
      const wrapper = shallow(<CounterApp />);
      expect(wrapper).toMatchSnapshot();
      const valorPorDefecto = wrapper.find('h2');
      expect(valorPorDefecto.text().trim()).toBe("0");
   })

})