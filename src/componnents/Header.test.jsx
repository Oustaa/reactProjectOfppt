import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Testing", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it("should render two NavLink", () => {
    const logoHolder = wrapper.find("NavLink");
    expect(logoHolder.length).toEqual(2);
  });

  it("should render a logo with text Project", () => {
    const logoHolder = wrapper.find(".logo");
    expect(logoHolder.text()).toEqual("Project");
  });
});
