import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Post = ({
  title,
  body,
  tag,
  categories,
  slug,
  thumbnail,
}) => {

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
};

export default Post;