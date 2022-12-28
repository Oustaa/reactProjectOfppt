import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorPage from "./ErrorPage";

Enzyme.configure({ adapter: new Adapter() });

describe("Test For Products Page", () => {
  it("should render the order by label", () => {
    const wrapper = shallow(<ErrorPage />);
    const ErrorMessagContent = wrapper.find("h1");
    expect(ErrorMessagContent.text()).toEqual("ERROR 404!");
  });
});
