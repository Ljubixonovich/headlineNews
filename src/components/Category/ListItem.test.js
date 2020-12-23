import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem, { Wrapper, Image, ImagePlaceholder } from './ListItem';

configure({ adapter: new Adapter() });

describe('<ListItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ListItem
        title='title'
        description='description'
        urlToImage='urlToImage'
        onPress={() => {}}
      />
    );
  });

  it('should render Wrapper element', () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render Image element if urlToImage is not empty', () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  it('should render ImagePlaceholder element if urlToImage is empty', () => {
    wrapper.setProps({ urlToImage: '' });
    expect(wrapper.find(ImagePlaceholder)).toHaveLength(1);
  });
})