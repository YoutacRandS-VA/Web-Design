import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import logo from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/analyst.jpg';
import logo1 from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/code.jpg';
import logo2 from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/security.jpg';


// import images from '../public/images/elliot.png'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (

    <div>

<div>
      <Grid container spacing={24}>
        <Grid item md={3}>
        <Card className={classes.root}>
      <CardHeader
        title="Business Analyst"
      />
      <CardMedia
        className={classes.media}
        image={logo}
        title="Business Analyst"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Expand to to see the Job Description

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Roles and Responsibility:</Typography>
          <Typography paragraph>
          1.	Able to exercise independent judgment and take action on it
          <br></br>
2.	Excellent analytical, mathematical, and creative problem-solving skills   <br></br>
3.	Excellent listening, interpersonal, written, and oral communication skills   <br></br>
4.	Logical and efficient, with keen attention to detail   <br></br>
5.	Highly self-motivated and directed   <br></br>
6.	Ability to effectively prioritize and execute tasks while under pressure   <br></br>
7.	Strong customer service orientation   <br></br>
8.	Experience working in a team-oriented, collaborative environment   <br></br>


          </Typography>
         
        </CardContent>
      </Collapse>

      
    </Card>
        </Grid>
        <Grid item md={3}>
        <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Software Developer"
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={logo1}
        title="Software Developer"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Expand to to see the Job Description

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand1, {
            [classes.expandOpen]: expanded1,
          })}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Roles and Responsibility:</Typography>
          <Typography paragraph>
          1.	Able to exercise independent judgment and take action on it
          <br></br>
2.	Excellent analytical, mathematical, and creative problem-solving skills   <br></br>
3.	Excellent listening, interpersonal, written, and oral communication skills   <br></br>
4.	Logical and efficient, with keen attention to detail   <br></br>
5.	Highly self-motivated and directed   <br></br>
6.	Ability to effectively prioritize and execute tasks while under pressure   <br></br>
7.	Strong customer service orientation   <br></br>
8.	Experience working in a team-oriented, collaborative environment   <br></br>


          </Typography>
        </CardContent>
      </Collapse>

      
    </Card>
        </Grid>
        <Grid item md={3}>
        <Card className={classes.root}>
      <CardHeader
       
        title="Security Engineer"
      />
      <CardMedia
        className={classes.media}
        image={logo2}
        title="Security Engineer"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Expand to to see the Job Description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand2, {
            [classes.expandOpen]: expanded2,
          })}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Roles and Responsibility:</Typography>
          <Typography paragraph>
          1.	Able to exercise independent judgment and take action on it
          <br></br>
2.	Excellent analytical, mathematical, and creative problem-solving skills   <br></br>
3.	Excellent listening, interpersonal, written, and oral communication skills   <br></br>
4.	Logical and efficient, with keen attention to detail   <br></br>
5.	Highly self-motivated and directed   <br></br>
6.	Ability to effectively prioritize and execute tasks while under pressure   <br></br>
7.	Strong customer service orientation   <br></br>
8.	Experience working in a team-oriented, collaborative environment   <br></br>


          </Typography>
        </CardContent>
      </Collapse>

      
    </Card>
        </Grid>
      </Grid>
    </div>


    
    
    
    
    

    
    </div>
  );
}
