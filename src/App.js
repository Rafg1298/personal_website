import './App.css';
import './BlogPage';
/* import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'; 
 */


function show() {
  var reveals = document.querySelectorAll('.summary');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*
function reveal() {
  var reveals = document.querySelectorAll('.card');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
*/

function App() {
  return (
    <div className="App">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <link rel='shortcut icon' type='image/x-icon' href='https://res.cloudinary.com/dxgndie5o/image/upload/v1679644058/unnamed_lx4swa.png'/>
      </head>
      <body>
        <header>
          <nav className="navbar">
            <img align='left' className='logo' src='https://res.cloudinary.com/dxgndie5o/image/upload/v1679644058/unnamed_lx4swa.png' alt='logo' /> 
            <span className='links'>
              <a className='home' href='C:\Users\riley\OneDrive\Desktop\personal web\my-webpage\src\App.js'>Home</a> &nbsp; 
              {/*<a className='blogpage' href='C:\Users\riley\OneDrive\Desktop\personal web\my-webpage\src\BlogPage.js'>Blog</a> &nbsp;  */}
              <a className='resume-button' href='src\Riley_Resume_updated.pdf' download>Resume</a> &nbsp; 
              <a className='email' href='mailto:riley9460@gmail.com'>Contact me</a>
            </span>
          </nav>
          <span className='welcome'>
            <h5 className='h5'>Hi there, my name is</h5>
            <h2>Riley Golden</h2>
            <p className='intro'>I am currently a Data Science student at Western Governors University, learning and posting my projects consisting of web design to data jupyter notebooks here on my website!</p>
            
            </span> 
        </header>
        <div className='about'>
          <div className='summary'>
          <img className='portrait' src='https://res.cloudinary.com/dxgndie5o/image/upload/c_limit,q_82,r_0,w_328/v1679037684/itsme-min_s38bgg.jpg' alt='me in hawaii'/> 
          <h2 className='me'>About me</h2>
          <span className='text'>
            <p>Current Data Science student based in Washington state, with 2 years of web development experience working on projects.</p>
            <p>I started learning coding as a whole through web development first, and transitioned to more data-centric development after I took a data science class.</p>
            <p>I really enjoy data-based projects because there are datasets for everything, from daily prices of a fruit to most streamed songs of all time.  </p> 
            <p>In my free time, I enjoy other hobbies such as cooking, playing with my pets, video games, and snowboarding.</p> 
            </span>
          </div>
        </div>
        <div className='social' >
          <a className='linked' href='https://www.linkedin.com/in/rileygolden/' target='_blank' rel='noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='currentcolor' d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 
        32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 
        38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>&nbsp; 
            <a className='git' href='https://github.com/Rafg1298/' target='_blank' rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill='currentcolor' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 
            1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 
            8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 
            38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
            62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 
            457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 
            35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
        </div>
        {/* 
        <div className='card'>
        <section className='card-1'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href='' target='_blank'>
            <CardMedia  component="img" height="140" image="https://res.cloudinary.com/dxgndie5o/image/upload/v1679728282/graph_t4uxku.png" alt="green iguana"/>
            <CardContent className='article-card'>
              <Typography gutterBottom variant="h5" component="div" color="white">
                  Lizard
              </Typography>
              <Typography variant="body2" color="white">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </section>
        
        <section className='card-2'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href='' target='_blank'>
            <CardMedia component="img" height="140" image="https://res.cloudinary.com/dxgndie5o/image/upload/v1679728282/graph_t4uxku.png" alt="green iguana"/>
            <CardContent className='article-card'>
              <Typography gutterBottom variant="h5" component="div" color="white">
                  Lizard
              </Typography>
              <Typography variant="body2" color="white">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </section>

        <section className='card-3'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href='' target='_blank'>
            <CardMedia component="img" height="140" image="https://res.cloudinary.com/dxgndie5o/image/upload/v1679728282/graph_t4uxku.png" alt="green iguana"/>
            <CardContent className='article-card'>
              <Typography gutterBottom variant="h5" component="div" color="white">
                  Lizard
              </Typography>
              <Typography variant="body2" color="white">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card> 
        </section>
        </div>
      */}
      </body>
      <footer>
  </footer>

    </div>
  );
}

/* window.addEventListener("scroll", reveal); */
window.addEventListener("scroll", show);

export default App;
