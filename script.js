const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", function () {
  // toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});

/*
const swiper = new Swiper(".slider-wrapper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/

var pages = {
  home: `<section class="hero-section">
        <div class="section-content">
          <div class="hero-details">
            <h2 class="title">Research. Innovation. Discover.</h2>
            <h3 class="subtitle">One-Place for Your Innovative Ideas</h3>
            <p class="description">
              We are a place where together can learn new things and be
              innovative, and where all can feel comfortable to take risks and
              grow. To learn innovative things, we first adopt
              culture,Changes,methods,skills and many more
            </p>
            <div class="buttons">
              <a href="#" class="button view-more">View More</a>
              <a href="#" class="button contact-us">Contact Us</a>
            </div>
          </div>

          <div class="hero-image-wrapper">
            <img src="./images/hero.jpg" alt="hero" class="hero-mage" />
          </div>
        </div>
      </section>
`,
  services: `<section id="services" class="service-section">
        <div class="section-content">
          <div class="service-details">
            <h2 class="section-title">Our Services and Activities</h2>
            <p class="text">
              We use best practices in our process and development activities,
              and available team always work on the utilities to develope for
              our team , helping them to imporove their productivity
              collaborating in team activities and also build test cases for
              their work to test with our customers giving our utilities as
              value added services
            </p>
          </div>

          <div class="service-items">
            <ul class="section-list">
              <li class="service-item">
                <img
                  src="./images/services/api.png"
                  alt="ssm"
                  class="service-image"
                />
                <div class="service-detail">
                  <h3 class="name">Rest API & Web Application Development</h3>
                  <p class="text">
                    We have experience in developing Rest APIs using different
                    cross platform technologies, which will help web
                    applications more scalable , flexible and easily
                    mentainable. Our goal is to adhere to customer technology
                    requirements to develope webapplications and mobile
                    applications and also we make sure , use of technologies who
                    have larger community support in future mentainance.
                  </p>
                </div>
              </li>
              <li class="service-item">
                <img
                  src="./images/services/ssm.png"
                  alt="ssm"
                  class="service-image"
                />
                <div class="service-detail">
                  <h3 class="name">Software Services & Mentainance</h3>
                  <p class="text">
                    Our core activities includes Software maintenance,Software
                    Project Management,Customer relationship management,Software
                    support and maintenance,Outsourcing software development
                  </p>
                </div>
              </li>
              <li class="service-item">
                <img
                  src="./images/services/websitedesign.png"
                  alt="ssm"
                  class="service-image"
                />
                <div class="service-detail">
                  <h3 class="name">Responsive Web Designing</h3>
                  <p class="text">
                    We design websites to adapt to customers devices. The motive
                    is to develope websites to retain their optimal usability
                    and appearance regardless of the devices on which they are
                    displayed
                  </p>
                </div>
              </li>
              <li class="service-item">
                <img
                  src="./images/services/st.png"
                  alt="ssm"
                  class="service-image"
                />
                <div class="service-detail">
                  <h3 class="name">On-the-Job Training</h3>
                  <p class="text">
                    We train existing and new employees on new applicable skills
                    for their role or for business need in our workplace while
                    performing their current activities. The training is not
                    specific to any technologies
                  </p>
                </div>
              </li>
              <li class="service-item">
                <img
                  src="./images/services/mad.png"
                  alt="ssm"
                  class="service-image"
                />
                <div class="service-detail">
                  <h3 class="name">Mobile Application Development</h3>
                  <p class="text">
                    We create software for mobile devices, such as smartphones,
                    tablets, and digital assistants
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>`,
  products: `  <section id="products" class="product-section">
        <h2 class="section-title">Our Product Experiments<h2>
        <div class="section-content">       
           <ul class="product-list">
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/ecommerce-webapp.jpeg"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">E-Commerce web-Applications</h3>
                  <p class="text">
                    These will allows people to buy and sell physical goods,
                    services, and digital products over the internet rather than
                    at a brick-and-mortar location. Through an e-commerce
                    website, a business can process orders, accept payments,
                    manage shipping and logistics, and provide customer service.
                  </p>
                </div>
              </li>
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/mobileapps.jpeg"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">E-Commerce Mobile Apps</h3>
                  <p class="text">
                    We Develope Mobile apps as per customer requirements
                    covering most of the features to target their bussiness in
                    hand. Now days Smartphone users are increasing by leaps and
                    bounds. According to Market Statistics, currently billions
                    of people worldwide use smartphones to achieve their
                    day-to-day needs, be it cab booking, online ticket
                    purchasing, reading news, shopping, and managing businesses
                    or Mobile Commerce.
                  </p>
                </div>
              </li>
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/api.png"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">Rest API Development</h3>
                  <p class="text">
                    We have been inloved in developing rest APIs for our
                    customer services. We choose technologies based on customer
                    requirements to develope APIs, Our few of the services built
                    using Node Express js , .Net Web-API, .Net Core Web-API, PHP
                    , wcf and others.
                  </p>
                </div>
              </li>
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/wdesign.png"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">Responsive Web Designing</h3>
                  <p class="text">
                    We have a team to create responsive and dynamic Websites/Web
                    applications using latest technologies on mobie and other
                    devices.
                  </p>
                </div>
              </li>
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/IOT.png"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">Embeded software Development</h3>
                  <p class="text">
                    We have also involved in building IOT for real time usage of
                    industrial devices like QR Code Scanners,BarCode Scanners,
                    Turnstile Machines,household devices, and also doing
                    innovative work on IOTs to levelege current new technologies
                    into practice.
                  </p>
                </div>
              </li>
              <li class="product-item">
                <img
                  src="./images/Ecommerce Images Mobile and web/ctrain.png"
                  alt="ssm"
                  class="product-image"
                />
                <div class="product-details">
                  <h3 class="name">Corporate Training</h3>
                  <p class="text">
                    We are also involved in training the employees of
                    organizations starting from small team to bigger in many
                    technoliges as per their current market requirements. We
                    train to employees become precious assets to their company
                    with new technologies and other soft spoken skills.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>`,
  about: ` <section class="about-section">
        <div class="about-details">
          <h2 class="section-title">About Team Activists</h2>
          <p class="text">  
            Founder has taken the initiation of this IT and services firm
            horzontally alligned with their other operations sectors. As a team
            we set the Vision and directions of the company. So that, we can
            take up the decisions collectively to achieve the goals set. Some
            time CEO and HR infulences some strategies in effiecient ways which
            help all employees to achieve their goals. The company promotes and
            help employees to attend training programs and seminars to
            understand the upcoming technologies and innovatives done by experts
            , which helps in improving ongoing assignemnts and helps in
            delivering quality work.
          </p>
          <p class="text">
            We have young and dynamic operational team with technical
            expertises, and have more than 15 years of industrial experience ,
            worked with more than 25 clients from all over the globe. The team
            has high influenced technical people to work around with our
            innovations.
          </p>
        </div>

        <div class="section-content">
          <div class="slider-container">
            <div class="slider-wrapper">
              <ul class="about-list">
                <li class="about">
                  <div class="about-item">
                    <i class="fa-solid fa-user user-image"></i>
                    <h2 class="name">Santosh B</h2>
                    <h3 class="position">Project Manager</h3>
                    <p class="text">
                      20+ Years experience in Managing products in small and
                      large scale industries. He is great market expert and handles business
                      analysis to improve the company growth with emerging ideas and technologies
                    </p>
                  </div>
                </li>

                <li class="about">
                  <div class="about-item">
                    <i class="fa-solid fa-user user-image"></i>
                    <h2 class="name">Guru Prasad</h2>
                    <h3 class="position">Technical Architect</h3>
                    <p class="text">
                      More than 15 Years of experience in Microsoft stack ,
                      Micro Services Architeture and Open Source Technologies,
                    </p>
                  </div>
                </li>

                <li class="about">
                  <div class="about-item">
                    <i class="fa-solid fa-user user-image"></i>
                    <h2 class="name">Pavithra</h2>
                    <h3 class="position">Project Manager</h3>
                    <p class="text">
                      10+ Years of Experience in handling teams across globe ,
                      and also helping our clients to build their teams
                    </p>
                  </div>
                </li>

                <li class="about">
                  <div class="about-item">
                    <i class="fa-solid fa-user user-image"></i>
                    <h2 class="name">Satish Modipalli</h2>
                    <h3 class="position">Azure Cloud Operational Manager</h3>
                    <p class="text">
                      18+ Years experience in Managing all our products on cloud
                      services, and he is Azure certified person with deep
                      knowledge on Azure cloud applications configurations
                    </p>
                  </div>
                </li>

                <li class="about">
                  <div class="about-item">
                    <img
                      src="./images/people/manasa.jpg"
                      alt="User"
                      class="pic"
                    />
                    <h2 class="name">Manasa U</h2>
                    <h3 class="position">HR & Operations</h3>
                    <p class="text">
                      19+ Years of experiencce in handling Human resource department,
                      Great with recritment strategies , training HR, and excellent financial decision maker.
                    </p>
                  </div>
                </li>

                <li class="about">
                  <div class="about-item">
                    <img
                      src="./images/people/CEO.JPG"
                      alt="User"
                      class="pic"
                    />
                    <h2 class="name">Bhagyalaxmi G</h2>
                    <h3 class="position">Managing Director & CEO</h3>
                    <p class="text">
                      Person with 40+ Years of experiencce in handling many self
                      owned sectors and BPG techno domain is
                      one of their IT firm
                    </p>
                  </div>
                </li>
              </ul>               
            </div>
          </div>
        </div>
      </section>`,
};

function mainLoad() {
  //menuOpenButton.click();
  console.log("main about to load...");
}

function getContent(page) {
  var contentToReturn;

  switch (page) {
    case "home":
      console.log("home about to load...");
      contentToReturn = pages.home;
      //menuOpenButton.click();
      //menuCloseButton.click();
      break;
    case "services":
      contentToReturn = pages.services;
      menuCloseButton.click();
      console.log("services about to load...");
      break;
    case "products":
      contentToReturn = pages.products;
      menuCloseButton.click();
      console.log("products about to load...");
      break;
    case "about":
      contentToReturn = pages.about;
      menuCloseButton.click();
      console.log("About page to load...");
      break;
    default:
      contentToReturn = pages.home;
      console.log("default about to load...");
      menuCloseButton.click();
      break;
  }
  document.getElementById("content").innerHTML = contentToReturn;
}
