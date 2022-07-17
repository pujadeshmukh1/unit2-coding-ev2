import navbar from "../components/navbar.js";
console.log(navbar());

document.getElementById('navbar').innerHTML=navbar();

let food_data=[
    {
      image_url:
        "https://th.bing.com/th/id/R.ce23da6ae049bef1aa6c15e6be77fd0c?rik=KrVkt6VImXW0%2fQ&riu=http%3a%2f%2fbestanimations.com%2fFood%2ffood-animated-gif-6.gif&ehk=mOwbXku11NY%2fODGa51qvci0F2GiG%2bxvKDzBlmBtDVKY%3d&risl=&pid=ImgRaw&r=0"
     
    },
    {
      image_url:
        "https://th.bing.com/th/id/R.1410605eb12fe2460fc056bbfd7767b2?rik=uN6klFs%2fivw7PA&riu=http%3a%2f%2fbestanimations.com%2fFood%2fpancakes-animated-gif-2.gif&ehk=Db603o3Pb%2ftZuO1wPxrk1AMV4r6CJ3%2b1X5%2b%2b8yGB3zk%3d&risl=&pid=ImgRaw&r=0"
     
    },
    {
      image_url:
        "https://th.bing.com/th/id/R.35b96e07d9ffd62c0751aabca5285f1d?rik=3BLj9J6tjY9B5g&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2ft_original%2fom24ea1w0zqg8hurhvfg.gif&ehk=5u88sOExAthleEKUuKyt%2b3BLBW1M2BRvKNu93G95b0s%3d&risl=&pid=ImgRaw&r=0"
     
    },
    {
      image_url:
        "https://th.bing.com/th/id/R.49da95725d10dfdf24bade5ffb288799?rik=JEGtWmA9LpNA7Q&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f07%2fbreakfast-gif-24.gif&ehk=nddrYrvFIfmCRp0yaqvusY4TwDJDvRpICrQ9fHw4Yl0%3d&risl=&pid=ImgRaw&r=0"
     
    },
    {
      image_url:
        "https://i.kinja-img.com/gawker-media/image/upload/t_original/wojsrqpmxrfhjajjzaz6.gif"
     
    },

]


slideShows()
let i=0;
function slideShows(){

let slideshows=document.getElementById("slideshow")
setInterval(function(){
    
    console.log(i)
          if(i==food_data.length){
           i=0;
      }
      let img=document.createElement("img")
      img.src=food_data[i].image_url
      
      slideshows.innerHTML=null;
      slideshows.append(img);
      i++;
      },2000)
   }
   