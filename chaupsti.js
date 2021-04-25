const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
      <link rel="stylesheet" href="css/style.css">
      <title>CHAWPATTY FOOD'S</title>
  </head>
  <body>
      
      <!-- ======= scroll top ======= -->
      <a href="#" class="scrolltop scroll-top" id="scroll-top">
          <i class='bx bx-chevron-up scrolltop__icon'></i>
      </a>
      
        
      <!-- ======= header ======== -->
      <header class="l-header" id="header">
      <nav class="nav bd-container">
          <a href="#" class="nav__logo">CHAWPATTY</a>
  
          <div class="nav__menu" id="nav-menu">
             <ul class="nav__list">
                  <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                  <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                  <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                  <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                  <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
             
                  <li><i class="bx bx-moon change-theme" id="theme-button"></i></li>
              </ul>
          </div>
          <div class="nav__toggle" id="nav-toggle">
              <i class="bx bx-menu"></i>
          </div>
      </nav>
  </header>
  
      <main class="l-main">
      <!-- ==== Home ===== -->
      <section class="home section" id="home">
          <div class="home__container bd-container bd-grid">
              <div class="home__data">
                   <h1 class="home__title">Chawpatty Food</h1>
                   <h2 class="home__subtitle">Try the best food of <BR> the week.</h2>
                   <a href="#" class="button">View Menu</a>
              </div>
  
              <img src="images/burger.jfif" alt="" class="home__img">
          </div>
      </section>
  
      <!-- ==== About ===== -->
      <section class="about section" id="about">
          <div class="about__container bd-container bd-grid">
              <div class="about__data">
                  <span class="section-subtitle about__initial">About us</span>
                  <h2 class="section-title about__initial">we cook the best <br> tasty foods</h2>
                  <p class="about__description">we cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                  <a href="" class="button">Explore history</a>
              </div>
              <img src="images/panipuri.jpg" alt="" class="about__img">
          </div>
      </section>
  
      <!-- ==== Services ==== -->
      <section class="services section bd-container" id="services">
         
          <span class="section-subtitle">Offering</span>
          <h2 class="section-title">Our amazing services</h2>
          <div class="services__container  bd-grid">
              <div class="services__content">
                  <img src="images/dish.png" alt="" class="services__img" style="height: 100px;  width: 100px;">
  
                  <h3 class="services__title services__initial">Excellent food</h3>
                  <p class="services__description services__initial">We offer our clients excellent quality, services for many years, with the best and delicious food in the city.</p>
              </div>
                  <div class="services__content">
                  <img src="images/fast1.png" alt="" class="services__img" style="height: 100px;  width: 100px;">
  
                  <h3 class="services__title services__initial">Fast food</h3>
                  <p class="services__description services__initial">We offer our clients excellent quality, services for many years, with the best and delicious food in the city.</p>
                  </div>
                  <div class="services__content">
  
                  <img src="images/delivery_files/367-3674987_enjoy-quality-restaurant-meals-within-sulthan-bathery-food.png" alt="" class="services__img" style="height: 100px;  width: 120px;">
  
                  <h3 class="services__title services__initial">Delivery</h3>
                  <p class="services__description services__initial">We offer our clients excellent quality, services for many years, with the best and delicious food in the city.</p>
              </div>
              
          </div>
    
      </section> 
  
      <!-- ==== Menu ==== -->
     
      <section class="menu section bd-container" id="menu">           
               <span class="section-subtitle">Special</span>
               <h2 class="section-title">Menu of the weeek</h2>
       <div class="menu__container bd-grid">
           <div class="menu-content">
              <img src="images/sand.png" alt="" class="Menu__img">
              <h3 class="menu__name">Sandwich</h3>
              <span class="menu__detail">Delicious dish</span>
              <span class="menu__preci">Rs.50</span>
               <a href="" class="button menu__button"> <i class='bx bx-cart-alt'></i>
               </a>
          </div>
          <div class="menu-content">
               <img src="images/momo.jpg" alt="" class="Menu__img">
              <h3 class="menu__name">Momos</h3>
              <span class="menu__detail">Fantastic dish</span>
              <span class="menu__preci">Rs.40</span>
               <a href="" class="button menu__button"> <i class='bx bx-cart-alt'></i>
               </a>
          </div>     
          <div class="menu-content">
               <img src="images/egg.jfif" alt="" class="Menu__img">
              <h3 class="menu__name">Egg roll</h3>
              <span class="menu__detail">Marvelous dish</span>
              <span class="menu__preci">Rs.60</span>
               <a href="" class="button menu__button"> <i class='bx bx-cart-alt'></i>
               </a>
          </div>
      </div>
      </section>
  
      <!-- ===== APP ====== -->
      <section class="app section bd-container">
          <div class="app__container bd-grid">
              <div class="app__data">
                  <span class="section-subtitle app__initial">App</span>
                  <h2 class="section-title app__initial">App is aviable</h2>
                  <p class="app__description">Find our application and download it, you can make reservation, food orders, see yoour deliveries on the way and much more.</p>
             
                  <div class="app__stores">
                      <a href="#"><img src="images/app1.png" alt="" class="app__store"></a>
                      <a href="#"><img src="images/app2.png" alt="" class="app__store"></a>
                  </div>
               </div>
              <img src="images/app3.PNG" alt="" class="app__img">
          </div>
      </section>
  
      <!-- ========== contact us ========== -->
      <section class="contact section bd-container" id="contact">
          <div class="contact__container bd-grid">
              <div class="contact__data">
                  <span class="section-subtitle contact__initial">Let's talk</span>
                  <h2 class="section-title contact__initial">Contact us</h2>
                  <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
              </div>
              <div class="contact__button">
                  <a href="#" class="button">Contact us now</a>
              </div>
          </div>
      </section>
  
      <!-- ======== footer ======= -->
      <footer class="footer section bd-container">
          <div class="footer__container bd-grid">
              <div class="footer__content">
                  <a href="#" class="footer__logo">Chawpatty Food</a>
                  <span class="footer__description">street food</span>
  
                  <div class="icon">
                      <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                      <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                      <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                  </div>
              </div>
          <div class="footer__content">
              <h3 class="footer__title">Services</h3>
              <ul>
                  <li><a href="#" class="footer__link">Delivery</a></li>
                  <li><a href="#" class="footer__link">Pricing</a></li>
                  <li><a href="#" class="footer__link">Fast food</a></li>
                  <li><a href="#" class="footer__link">Reserve your spot</a></li>
              </ul>
          </div>
          <div class="footer__content">
              <h3 class="footer__title">Information</h3>
              <ul>
                  <li><a href="#" class="footer__link">Event</a></li>
                  <li><a href="#" class="footer__link">Contactus</a></li>
                  <li><a href="#" class="footer__link">Privacy policy</a></li>
                  <li><a href="#" class="footer__link">Terms of services</a></li>
              </ul>
          </div>
          <div class="footer__content">
              <h3 class="footer__title">Adress</h3>
              <ul>
                  <li>Jatin.Pathak</li>
                  <li>M.P - 486001</li>
                  <li>+91-8435871121</li>
                  <li>jatinpathak436@gmail.com</li>
              </ul>
          </div>
          </div>
          <p class="footer__copy">&#169; 2021 JP, All right reserved.</p>
      </footer>
  </main>
      <script src="https://unpkg.com/scrollreveal"></script>
  
  
      <!-- ===== main js===== -->
      <script src="js/main.js"></script>
  <script>
      
  /**====== scroll reveal aninmation =========== */
  var sr = ScrollReveal({
      origin:'top',
      distance: '150%',
      duration: 2000,
      reset: true
  
  });
  
  ScrollReveal().reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button, .footer__content`, sr)
  </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});