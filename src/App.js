import React from "react";
import "./App.css";

function App() {

  // window.addEventListener("scroll", function () {
  //   document
  //     .getElementById("header")
  //     .classList.toggle("sticky", window.scrollY > 0);
  // });
    
  return (
    <div id="root">
      <header
        class="d-flex justify-content-between"
        style={{ backgroundColor: "white" }}
      >
        <div class="logo">
          <a href="/">
            <img loading="lazy" src="dose.svg" alt="Career Dose" />
          </a>
        </div>
        <div
          class="menu"
          style={{ paddingTop: "10px", height: "5rem", fontSize: "17px" }}
        >
          <ul
            class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light"
            role="menu"
            tabindex="0"
            data-menu-list="true"
            style={{
              height: "4.7rem",
              top: "1rem",
              fontSize: "19px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <li
              class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal"
              role="none"
            >
              <div
                role="menuitem"
                class="ant-menu-submenu-title"
                tabindex="-1"
                aria-expanded="false"
                aria-haspopup="true"
                data-menu-id="rc-menu-uuid-26320-7-tmp_key-0"
                aria-controls="rc-menu-uuid-26320-7-tmp_key-0-popup"
              >
                <span class="ant-menu-title-content">Language Classs</span>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"
              role="menuitem"
              tabindex="-1"
              data-menu-id="rc-menu-uuid-26320-7-Exams"
            >
              <span class="ant-menu-title-content">
                <a class="text-decoration-none my-cd-menu-color" href="/exams">
                  Exams
                </a>
              </span>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal"
              role="none"
            >
              <div
                role="menuitem"
                class="ant-menu-submenu-title"
                tabindex="-1"
                data-menu-id="rc-menu-uuid-26320-7-tmp_key-2"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="rc-menu-uuid-26320-7-tmp_key-2-popup"
              >
                <span class="ant-menu-title-content">Maths/Science</span>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal"
              role="none"
            >
              <div
                role="menuitem"
                class="ant-menu-submenu-title"
                tabindex="-1"
                data-menu-id="rc-menu-uuid-26320-7-tmp_key-3"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="rc-menu-uuid-26320-7-tmp_key-3-popup"
              >
                <span class="ant-menu-title-content">Career Guidance</span>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child my-cd-menu-color"
              role="menuitem"
              tabindex="-1"
              data-menu-id="rc-menu-uuid-26320-7-Buy A Course"
            >
              <span class="ant-menu-title-content">
                <a
                  class="text-decoration-none my-cd-menu-color"
                  href="/buy_course"
                >
                  Buy A Course
                </a>
              </span>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"
              role="menuitem"
              tabindex="-1"
              data-menu-id="rc-menu-uuid-26320-7-Study Center"
            >
              <span class="ant-menu-title-content">
                <a
                  class="text-decoration-none my-cd-menu-color"
                  href="/study_center"
                >
                  Study Center
                </a>
              </span>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal"
              role="none"
            >
              <div
                role="menuitem"
                class="ant-menu-submenu-title"
                tabindex="-1"
                data-menu-id="rc-menu-uuid-26320-7-tmp_key-6"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="rc-menu-uuid-26320-7-tmp_key-6-popup"
              >
                <span class="ant-menu-title-content">More</span>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child"
              role="menuitem"
              tabindex="-1"
              data-menu-id="rc-menu-uuid-26320-7-vistaar"
            >
              <span class="ant-menu-title-content">
                <a href="https://vistaar.careerdose.com" target="_blank">
                  <img
                    loading="lazy"
                    src="vistaar.svg"
                    alt="Career Dose French Learning"
                    height="20"
                  />
                </a>
              </span>
            </li>
            <li
              class="ant-menu-overflow-item ant-menu-overflow-item-rest ant-menu-submenu ant-menu-submenu-horizontal ant-menu-submenu-disabled"
              aria-hidden="true"
              role="none"
            >
              <div
                role="menuitem"
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
                data-menu-id="rc-menu-uuid-26320-7-rc-menu-more"
                aria-controls="rc-menu-uuid-26320-7-rc-menu-more-popup"
                aria-disabled="true"
              >
                <span
                  role="img"
                  aria-label="ellipsis"
                  class="anticon anticon-ellipsis"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="ellipsis"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                  </svg>
                </span>
                <i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
          </ul>
          <div aria-hidden="true"></div>
        </div>
        <div class="ant-back-top" >
          <div class="ant-back-top-content">
            <div class="ant-back-top-icon">
              <span
                role="img"
                aria-label="vertical-align-top"
                class="anticon anticon-vertical-align-top"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="vertical-align-top"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <div class="homepage-data">
        <div
          class="banner cd-danger-gradient"
          style={{
            background: "radial-gradient(60% 121%,#d84d5e 0,#d94d5f 100%)",
            height: "750px ",
            maxHeight: "fit-content",
            color: "white",
            position: "relative",
          }}
        >
          <div class="banner-data container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
                <p class="display-4 font-weight-bold mb-4 text-white">
                  Doing the Right Thing,
                  <br />
                  The Right Way
                </p>
                <div class="my-4 enroll">
                  <form class="enroll-tel">
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      required=""
                      pattern="[6-9]{1}[0-9]{9}"
                      value=""
                    />
                    <button
                      type="submit"
                      class="btn btn-md cd-btn-success cd-pill ml-sm-2 m-0 letter-space text-uppercase font-weight-bold"
                    >
                      Enroll<i class="fas fa-arrow-right ml-2"></i>
                    </button>
                  </form>
                </div>
                <div class="app-download-link mb-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.careerdose.learning"
                    class="btn p-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      loading="lazy"
                      src="google.svg"
                      class="img-fluid"
                      alt="android_app_link"
                    />
                  </a>
                  <a class="btn p-0" href="" download="">
                    <img
                      loading="lazy"
                      src="window.svg"
                      class="img-fluid"
                      alt="windows_app_link"
                    />
                  </a>
                </div>
                <div class="app-download-link"></div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner-img">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/home.90c0408713dc3434638d.png"
                  class="img-fluid"
                  alt="Career Dose Studying Kids"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card border-0 cd-depth cd-round-edge-sm cd-data-up">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12">
                  <video
                    class="img-fluid banner-video"
                    preload="metadata"
                    alt="Ben Cutting Promoted"
                    src="https://www.careerdose.com/static/media/ben_cutting.a13166be314ec905aae1.mp4"
                    controls
                  />
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12 cd-img-obj-left">
                  <h1 class="font-weight-bold text-cd-center">
                    <span class="cd-red-text">Compounding Efforts</span>
                    <br />
                    For Better Results
                  </h1>
                  <p class="text-cd-justify">
                    With a variety of tools that makes learning engaging and
                    less complicated, all of our classes are designed to provide
                    the best learning experience with a blend of traditional and
                    modern age teaching methods. Designed by the best teachers
                    with vast experience in teaching, sessions are created
                    keeping the end goal of high retention by the student. This
                    is to ensure that the student gets the most out of our
                    classes. Not just with academics, Career Dose stands beside
                    you all throughout your Career Cycle. We aspire to provide
                    all the necessary help to the students with which they can
                    make informed career choices. This not only includes
                    academic coaching but also by providing insight and
                    background of all the career options available to said
                    student. Also, you can always get in touch for free personal
                    evaluation for the right career selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="pb-5 mb-5">
          <div class="cd-container">
            <div class="row text-center data-card">
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/Guidance.3b1aa33f0e38cb6e14192941cc758a68.svg"
                  class="mb-2"
                  alt="Guidance"
                />
                <h3 class="h3">Top-Notch Guidance</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  We emphasize highly on guiding the students on to the right
                  path which shall lead them to have fruitful and fulfilling
                  academics and career. We don’t believe in stifling the voice
                  of the students, encouraging them to share their dreams and
                  aspirations. Then connect those dreams and aspirations with
                  the correct career path choices based on the strengths of the
                  student.{" "}
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/Focused.9997eede1252f6ac29489e0493fbb60f.svg"
                  class="mb-2"
                  alt="Focused"
                />
                <h3 class="h3">Interactive and Balanced Learning</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  At Career Dose, we strive to provide efficiently designed
                  learning modules. Modules are aimed specifically at conceptual
                  learning to help develop critical thinking among students. We
                  have well-crafted recorded classes with some of the best
                  teachers, which allow students to repeat the structured topics
                  any number of times as they need for in-depth understanding
                  before moving on to the next topic.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/safe_data.56a1e67d4c57888f7b18692495e5df20.svg"
                  class="mb-2"
                  alt="Safe Data"
                />
                <h3 class="h3">Convenient and Safe</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  Easy access to the digital content both online and offline
                  allows the students to study through live interactive classes
                  or structured recorded classes without the hassle of traveling
                  and from the safety of home. That in turn saves energy and
                  improves concentration. In this post corona world, it is
                  always safer to keep contact with outside world as less as
                  possible..
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/analytics.c2c11cf7beb425251b384b002e5c934c.svg"
                  class="mb-2"
                  alt="Analytics"
                />
                <h3 class="h3">Report and Analytics</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  Career Dose provides systematic, periodic reports to the
                  parents in an easy to comprehend format so that they remain
                  aware of their ward’s performance. We are completely
                  transparent on what material is given to students for
                  learning. We provide special sessions to students so they can
                  analyze their standing across different schools and cities
                  thus invoking a sense of healthy competition.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom data-card-color">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/live_classes.761b2a916157a4b3b74b8cd6f88e98a1.svg"
                  class="mb-2"
                  alt="Live CLass"
                />
                <h3 class="h3">Free Live Classes</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  We know your time is priceless and if anyone is investing
                  their precious time with us, we absolutely value its
                  importance. At Career Dose, our aim is to provide a
                  multi-dimensional study approach for the students. Thus we
                  have live classes for topics that can benefit from a live
                  class environment. Our live classes are fun, interactive,
                  knowledge based, and best-in-category.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12  mb-4 pt-4 px-4 rounded-lg zoom">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/face_to_face.4c3d78ddb57c0ce994567f728bf2d49a.svg"
                  class="mb-2"
                  alt="Face to Face"
                />
                <h3 class="h3">One on One Sessions</h3>
                <p
                  style={{ width: "60%", marginLeft: "6rem", fontSize: "20px" }}
                >
                  Career Dose’s one on one sessions with our highly qualified
                  teachers help the students in realizing their highest
                  potential by understanding and mitigating their weaknesses and
                  also recognize and enhance their latent talents. With the
                  precise advice of our experts, your ward will be able to
                  remove the roadblocks in their path towards academic success
                  thereby increasing their future career opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          class="cd-danger-gradient pt-5 pb-4"
          style={{
            background: "radial-gradient(60% 121%,#d84d5e 0,#d94d5f 100%)",
            height: "750px ",
            maxHeight: "fit-content",
            color: "white",
            position: "relative",
          }}
        >
          <div class="container cd-img-obj-left my-5">
            <div class="row">
              <div class="col-lg-7 col-md-12 col-sm-12 my-auto">
                <div>
                  <p class="h1 font-weight-bold m-0 text-white">
                    Watch Career Dose
                  </p>
                  <p class="display-4 font-weight-bold text-white">
                    Demo Videos
                  </p>
                  <a href="/demo_class">
                    <img
                      loading="lazy"
                      src="https://www.careerdose.com/static/media/demovid-btn.801049863bd6283c2d3d4a31097e28d9.svg"
                      class="demovid-btn"
                      alt="Watch Demo Videos"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 col-sm-12 zoom">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/demo-home.48f6c3725c85c9afba0a.png"
                  class="img-fluid"
                  alt="Career DOse Demo Videos"
                />
              </div>
            </div>
          </div>
        </section>
        <div class="cd-container timeline py-5 my-5">
          <div class="row text-center">
            <p class="font-weight-bold display-4 mb-5">How Are We Unique</p>
            <img
              loading="lazy"
              src="https://www.careerdose.com/static/media/timeline_desktop.115db99915e6dd17e289.png"
              class="desk_timeline img-fluid"
              alt="timeline"
            />
            <img
              loading="lazy"
              src="circle.jpg"
              class="mobile_timeline img-fluid"
              alt="timeline"
            />
          </div>
        </div>
        <section class="faculty bg-1">
          <div class="container">
            <p class="font-weight-bold text-center display-4 mb-5">
              Our Master Teachers
            </p>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/SN_Mishra.1254b9e42785a0b080bc.png"
                    class="card-img-top flip"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Mr. S.N. Mishra
                    </h5>
                    <p class="text-muted m-0 small">M.Tech (IIT Delhi)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Sanjay_Gill.9c8740bb421ce499b085.png"
                    class="card-img-top flip"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Mr. Sanjay Gill
                    </h5>
                    <p class="text-muted m-0 small">B.Tech (AKGIT)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Anminder_Gahlot.4fe0a95d2199014bb006.png"
                    class="card-img-top flip"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Mrs. Anminder Gahlot
                    </h5>
                    <p class="text-muted m-0 small">PhD Botany</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Shobhit_Kumar.d43dd3f1a79c22138334.png"
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Shobhit Kumar
                    </h5>
                    <p class="text-muted m-0 small">B.Tech (NIT Allahabad)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Anubhav_Mishra.ce13ec0734c345e41d1d.png"
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Anubhav Mishra
                    </h5>
                    <p class="text-muted m-0 small">M.Tech (VIT University)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Shubham_Goel.afd55a4319bb97a1685b.png"
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Shubham Goel
                    </h5>
                    <p class="text-muted m-0 small">Btech (KIIT University)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Varsha_Duhoon.7ff7701c3cc5da72655c.png"
                    class="card-img-top flip"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Varsha Duhoon
                    </h5>
                    <p class="text-muted m-0 small">PhD (GGSIPU)</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div class="card border-0 mb-4 px-4 pt-4">
                  <img
                    src="https://www.careerdose.com/static/media/Vidya_Jayakumar.852e0b5a296c7ecc5adf.png"
                    class="card-img-top"
                    loading="lazy"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold m-0">
                      Vidya Jayakumar
                    </h5>
                    <p class="text-muted m-0 small">M.Tech (DBSA University)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container">
          <div class="card border-0 cd-theme-gradient counseller cd-depth cd-round-edge my-5">
            <div class="card-body px-2 py-5 px-md-5 ">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <p class="display-4 font-weight-bold">
                    Request a Free{" "}
                    <span class="cd-red-text font-weight-bold">
                      Counselling Session
                    </span>{" "}
                    with a Mentor{" "}
                  </p>
                  <p class="my-5 h5 text-cd-justify">
                    Understand your learning pattern, get evaluated, prepare a
                    customized timetable suiting your learning style, and
                    enhance your results.
                  </p>
                  <a href="/contact_us">
                    <button class="btn font-weight-bold letter-space text-uppercase py-2 px-4 cd-pill">
                      Book a Mentor<i class="fas fa-arrow-right"></i>
                    </button>
                  </a>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <img
                    loading="lazy"
                    src="https://www.careerdose.com/static/media/counseller.0ea3329a906e0ac016aa.png"
                    class="img-fluid"
                    alt="Counseling"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="footer">
        <div class="cd-container">
          <div
            class="row pt-5 mb-5 footer-data"
            style={{ marginLeft: " 8rem", fontSize: "20px" }}
          >
            <div class="col-lg-4 col-md-12">
              <h5>Who We are</h5>
              <p>
                Career Dose aims to nurture the brains of young minds. We want
                to create a difference when it comes. In the present era, there
                are so many options available for the young generation, and as
                they say, choices often lead to confusions. We at Career Dose
                put all our efforts to make our young minds confusion-free with
                clarity on the subject and career. We aim to help in all-around
                development of minds before they hit the job battlefield.
              </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5>Syllabus</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/class6_syllabus">
                    <span>Class VI</span>
                  </a>
                </li>
                <li>
                  <a href="/class7_syllabus">
                    <span>Class VII</span>
                  </a>
                </li>
                <li>
                  <a href="/class8_syllabus">
                    <span>Class VIII</span>
                  </a>
                </li>
                <li>
                  <a href="/class9_syllabus">
                    <span>Class IX</span>
                  </a>
                </li>
                <li>
                  <a href="/class10_syllabus">
                    <span>Class X</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5>About French</h5>
              <p>
                Learning French with CAREER DOSE is an interactive adventure.
                All classes are based on a student-centered curriculum that
                accommodates each student’s interests and passions, giving
                learning the freedom to flourish.
              </p>
              <a href="/language_class/french">
                <button class="btn btn-sm cd-btn-primary text-uppercase m-0 cd-pill letter-space">
                  <i class="fas fa-eye mr-2"></i>View More
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </a>
            </div>
          </div>
          <div
            class="row pb-5 footer-data"
            style={{ marginLeft: " 8rem", fontSize: "20px" }}
          >
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h5>Company</h5>
              <ul class="list-unstyled">
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Careers</span>
                </li>
                <li>
                  <span>FAQs</span>
                </li>
                <li>
                  <a href="/contact_us">
                    <span>Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h5>Our Branches</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/our_branches/darbhanga">
                    <span>Darbhanga</span>
                  </a>
                </li>
                <li>
                  <a href="/our_branches/saharanpur">
                    <span>Saharanpur</span>
                  </a>
                </li>
                <li>
                  <a href="/our_branches/meerut">
                    <span>Meerut</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h5>What We Do</h5>
              <ul class="list-unstyled">
                <li>
                  <span>ISO Certification</span>
                </li>
                <li>
                  <span>Terms &amp; Conditions</span>
                </li>
                <li>
                  <a href="/privacy_policy">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <span>Partner with us</span>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <h5 class="mb-4">Get Social</h5>
              <div class="mb-4 social-icons">
                <div class="icon-space cd-bg-primary">
                  <a
                    href="https://www.facebook.com/careerdose/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div class="icon-space cd-bg-success">
                  <a
                    href="https://wa.me/919999155443?text=I'm%20interested"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
                <div class="icon-space cd-bg-danger">
                  <a
                    href="https://www.instagram.com/careerdose_india"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="icon-space bg-info">
                  <a
                    href="https://twitter.com/CareerDose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div class="icon-space bg-danger">
                  <a
                    href="https://careerdoseindia.tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-tumblr"></i>
                  </a>
                </div>
                <div class="icon-space bg-secondary">
                  <a
                    href="https://t.me/careerdose_india"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </div>
              </div>
              <form class="cd-form">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="mb-2"
                  placeholder="Enter Your Email"
                />

                <button
                  type="submit"
                  class="btn btn-sm cd-btn-primary text-uppercase m-0 cd-pill letter-space"
                >
                  <i class="fas fa-paperclip mr-2"></i>Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="copyright text-center py-3">
            <div class="app-download-link mb-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.careerdose.learning"
                class="btn p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/icon_playstore.0932621b77a366ea1bee0a13fc9aa525.svg"
                  class="img-fluid"
                  alt="android_app_link"
                  style={{ width: "8rem" }}
                />
              </a>
              <a class="btn p-0" href="" download="">
                <img
                  loading="lazy"
                  src="https://www.careerdose.com/static/media/icon_windowsos.461e33923d5f9beb3b2a83171a344a8f.svg"
                  class="img-fluid"
                  alt="windows_app_link"
                  style={{ width: "8rem" }}
                />
              </a>
            </div>
            <div class="app-download-link"></div>
            <p class="m-0 small mt-2">
              Copyright © 2020 All Rights Reserved&nbsp;|&nbsp;
              <a
                href="http://careerdose.com/"
                target="_blank"
                class="text-white"
                rel="noopener noreferrer"
              >
                Career Dose Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
