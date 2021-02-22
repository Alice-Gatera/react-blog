import {CommentBlog} from '../../CommentBlog';
import {shallow,mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

const props={
    commments:{
            "email": "sheja@gmail.com",
            "comment": "test"
          },
}
test('Testing blogComment component ', () => {
    const wrapper= shallow(<CommentBlog {...props}/>)
    // expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('div').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
});