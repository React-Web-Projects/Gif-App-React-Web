import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en <AddCategory/>", () => {

  test("debe cambiar el valor de la caja de texto ", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    //observar lo que se está testeando
    //screen.debug();
    const input = screen.getByRole("textbox");
    //disparar el evento
    fireEvent.input(input, { target: { value: "Saitama" } });
    //hacer la aserción de lo que se está esperando
    expect(input.value).toBe("Saitama");
  });

  test('debe llamar onNewCategory si el input tiene un valor ', () => {
        const inputValue = 'Saitama';
        //hacer un mock
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //validar que se envía el formulario con el valor del input
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe llamar el onNewCategory si el input está vacío ', () => {
    //hacer un mock
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory}/>);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    //también se puede así
    //expect(onNewCategory).not.toHaveBeenCalled();
  });
});
