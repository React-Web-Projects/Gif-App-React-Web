import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem/>', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('debe hacer match con el snapshot ', () => {
        // extraigo container de render
        const {container} = render(<GifItem title= {title} url= {url}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con la URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
    });
    
 });