import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en <GifGrid/>", () => {
  const category = 'One Punch';

  test("debe mostrar el loading inicialmente", () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    render(<GifGrid category={category}/>);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe mostrar items cuando se cargan imágenes en useFetchGifs', () => {

    const gifs = [
        {
            id: 'abc',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'cab',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }
    ]

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    });

    render(<GifGrid category={category}/>);
    //se usa getAllByRole() cuando se espera más de un elemento
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
