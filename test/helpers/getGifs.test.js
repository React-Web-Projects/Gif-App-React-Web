import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {
  test('debe retornar un arreglo de gifs', async()=>{
    const gifs = await getGifs('One Punch');
    //console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
        //evalúo que tenga las propiedades de mi objeto
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
    });
  });
});
