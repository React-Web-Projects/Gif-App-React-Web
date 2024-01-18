import { renderHook, act } from "@testing-library/react";
import { useAddCategory } from "../../src/hooks/useAddCategory";

describe("Pruebas en hook useAddCategory ", () => {
  test("debe comparar si el nombre de la categoría ya existe ", () => {
    const { result } = renderHook(() => useAddCategory());
    const { categories,onAddCategory } = result.current;

    act(() => {
      onAddCategory("naruto");
    });

    expect(result.current.categories[0]).toBe('naruto');
    expect(result.current.categories).toContain('naruto');
    expect(categories.length).toBe(1);
    console.log(categories.length);

  });

  test("debe agregar una categoría si no existe ", () => {
    const { result } = renderHook(() => useAddCategory());
    const { categories, onAddCategory } = result.current;

    act(() => {
      onAddCategory("naruto");
    });

    expect(result.current.categories).not.toContain("one piece");
    act(() => {
      onAddCategory("one piece");
    });
    expect(result.current.categories[0]).toBe('one piece');
    expect(result.current.categories).toContain('one piece');
    expect(categories.length).toBe(1);
  });
});
