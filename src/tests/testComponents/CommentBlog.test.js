import {CommentBlog} from '../../CommentBlog';
import {shallow,mount} from 'enzyme';


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