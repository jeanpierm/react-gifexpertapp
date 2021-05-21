import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Goku";
  const url = "https://localhost/goku.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("should show <GifGridItem/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un párrafo con el título", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener la imagen los props url y title como src y alt respectivamente", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = "animate__fadeIn";
    expect(div.hasClass(className)).toBe(true);
  });
});
