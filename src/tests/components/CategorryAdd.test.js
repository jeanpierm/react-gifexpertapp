import { shallow } from "enzyme";
import CategoryAdd from "../../components/CategoryAdd";

describe("Pruebas en el componente", () => {
  const setCategories = jest.fn();
  const generateWrapper = () =>
    shallow(<CategoryAdd setCategories={setCategories} />);
  let wrapper = generateWrapper();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = generateWrapper();
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const newValue = "hello world";
    const e = {
      target: {
        value: newValue,
      },
    };
    input.simulate("change", e);
    const { value } = wrapper.find("input").props();
    expect(value).toBe(newValue);
  });

  test("debe de no postear la información en submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    // simula inputChange
    const input = wrapper.find("input");
    const value = "hello world";
    input.simulate("change", { target: { value } });

    // simula submit
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: function () {} });

    // valor final
    const { value: finalValue } = wrapper.find("input").props();

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(finalValue).toBe("");
  });
});
