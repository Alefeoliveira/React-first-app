import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from '.';

describe('<TextInput />', () =>{

    it('should have a value of searchValue', ()=>{
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'testando'}/>);
        const input = screen.getByPlaceholderText(/type your text/i);
        expect(input).toBeInTheDocument();

        expect(input.value).toBe('testando');
    });

   it('should call handlechange function on each key press', ()=>{
       const fn = jest.fn();
       render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

       const input = screen.getByPlaceholderText(/type your text/i);

       const value = 'o valor';

       userEvent.type(input, value);

       expect(input.value).toBe('um valor qualquer');
       expect(fn).toHaveBeenCalledTimes(value.length);
   });

   it('should match snapshot', ()=>{
    const fn = jest.fn();
    const {container} = render(<TextInput handleChange={fn} searchValue="o valor" />);

    expect(container.firstChild).toMatchSnapshot();
});

});