
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { connect } from 'react-redux'
import { compose } from "redux";
const Home = () => {

  
    const {data: blogs, isPending, error} =  useFetch('http://localhost:8000/blogs')

    //COPIED TO BE USED IN custom hook in usefetch

//   const [blogs, setBlogs] = useState( null)
//     const [isPending , setIsPending] = useState(true)
//     const [error, setError] = useState(null)
//       [
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ]
  

//   const [name, setName] = useState('mario');

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }

  
// useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         if (!res.ok) { // error coming back from server
//           throw Error('could not fetch the data for that resource');
//         } 
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setBlogs(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//     }, 1000);
//   }, [])

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
// const mapStateToProps = (state) =>{
//   return{
//     blogs:state.blog.blogs
//   }
// }
 
export default Home