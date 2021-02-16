import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between'
    
//   },
//   media: {
//     height: 140
//   },
// }));

const BlogList = ({ blogs }) => {

  // const classes = useStyles();
  return (
    <Card className="blog-list">
      <CardActionArea>
      <CardContent>
      {blogs.map(blog => (
        <Typography className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>{ blog.snippet}</p>
          </Link>
        </Typography>
      ))}
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
 
export default BlogList;