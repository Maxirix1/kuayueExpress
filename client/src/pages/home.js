import React , {useState} from "react";
import "../style/home.css";
import "../style/main.css";
import "../style/responsive.css";
import Logo from "../assets/logo.png";
import Banner from "../assets/banner.png";
import Thai from "../assets/thailand.png";
import China from "../assets/china.png";
import Branch from "../assets/branch.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [settings] = useState({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
      });
  return (
    <div className="maincontainer">
      <header>
        <nav>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="/">| Home</a>
            </li>
            <li>
              <a href="/">| About</a>
            </li>
            <li>
              <a href="/Tracking">| ติดตามพัสดุ</a>
            </li>
            <li>
              <a href="/">| คำนวณค่าขนส่ง</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="headBanner">
        <img src={Banner} alt="logo" />
      </div>

      <div className="containerContent">
        <div className="contentBelow">
          <div className="search">
            <h1>ຕິດຕາມພັດສະດຸຂອງທ່ານ</h1>

            <div className="inputSearch">
              <input name="search" placeholder=" ໝາຍເລກພັດສະດຸຂອງທ່ານ" />

              <a href="/link" className="submitSearch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                ຄົ້ນຫາ
              </a>
            </div>
          </div>
          <div className="buttonLink">
            <a className="firstButton" href="/link">
              <img src={Branch} alt="branch icon" />
              <h3>ຂໍ້ມູນສາຂາທັງໝົດ</h3>
            </a>

            <h1>|</h1>

            <a className="secondButton" href="/link">
              <img src={Thai} alt="thai icon" />
              <h3>ຄ່າບໍລິການຂົນສົ່ງ ໄທ</h3>
            </a>
            <h1>|</h1>

            <a className="thirdButton" href="/link">
              <img src={China} alt="china icon" />
              <h3>ຄ່າບໍລິການຂົນສົ່ງ ຈີນ</h3>
            </a>
          </div>
        </div>

        <div className="loginLink">
          <Link to="/login" className="buttonLogin">
            ສະໝັກສະມາຊິກ & ເຂົ້າສູ່ລະບົບ
          </Link>
        </div>
      </div>

      <div className="weService">
        {/* <div className="serviceDetails">
            
            <h1><span>|</span> ລາຍລະອຽດສາງຂົນສົ່ງ</h1>

            <div className="serv"></div>

        </div> */}
        <div className="containerDetails">
          <h1>
            <span>|</span> ລາຍລະອຽດສາງຂົນສົ່ງ
          </h1>

          <div className="contentButtonPosition">
            <section className="first">
              <div className="buttonFirst">
                <a href="/">ທີ່ຢູ່ສາງປະເທດ ໄທ</a>
              </div>
              <div className="buttonSecond">
                <a href="/">ທີ່ຢູ່ສາງປະເທດ ຈີນ</a>
              </div>
            </section>

            <section className="second">
              <div className="buttonThird">
                <a href="/">ທີ່ຢູ່ສາງປະເທດ ລາວ</a>
              </div>
              <div className="buttonFour">
                <a href="/">ທີ່ຢູ່ສາງປະເທດ ຫວຽດນາມ</a>
              </div>
            </section>
          </div>
        </div>

        <div className="containerAbout">
          <h1>
            <span>|</span> ລາຍລະອຽດສາງຂົນສົ່ງ
          </h1>

          <div className="content">
            <p>
              &emsp;
              ພວກເຮົາມີຄວາມມຸງໝັ້ນທີ່ຈະສ້າງເຄືອຄ່າຍຜູ້ໜອງສີນຄ້າຈາກຕ່າງປະເທດໃຫ້ມີຄຸນະພາບທີ່ສຸດເພື່ອໃຫ້ລູກຄ້າໄດ້ຮັບຜົນປະໂຫຍດສູງສຸດຈາກການໃຊ້ບໍລິການກັບພວກເຮົາ
              ໂດຍເຮົາເນັ້ນການເຊື່ອມໂຍງກັບບັນດາກຸ່ມປະເທດອ້ອມຂ້າງໃນທຸກມິຕິຂອງການຂົນສົ່ງ
              ແລະ ການຈັດຫາສິນຄ້າພ້ອມບໍລິການເພື່ອໃຫ້ບັນລຸ 3 ເງື່ອນໄຂດັ່ງລຸ່ມນີ້:
              <br />
              <br />
              ຕົ້ນທຶນຕໍ່າທີ່ສຸດ &gt; ຄຸນະພາບດີທີ່ສຸດ &gt; ການຂົນສົ່ງໄວທີ່ສຸດ
              ພວກເຮົາສາມາດກະຈາຍສິນຄ້າພາຍໃນປະເທດໄດ້ຢ່າງມີປະສິດທິພາບ ສະດວກ
              ປອດໄພພ້ອມກົງຕໍ່ເວລາ
            </p>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        <div>
          <img src="path/to/icon1.png" alt="Icon 1" />
        </div>
        <div>
          <img src="path/to/icon2.png" alt="Icon 2" />
        </div>
        <div>
          <img src="path/to/icon3.png" alt="Icon 3" />
        </div>
        {/* เพิ่ม icon ที่ต้องการ */}
      </Slider>

      <footer>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navfooter">
          <ul>
            <li>
              <a href="/">| Home</a>
            </li>
            <li>
              <a href="/">| About</a>
            </li>
            <li>
              <a href="/">| ติดตามพัสดุ</a>
            </li>
            <li>
              <a href="/">| คำนวณค่าขนส่ง</a>
            </li>
          </ul>
        </div>
        <h1>Contact</h1>
        <Link
          to="https://www.facebook.com/profile.php?id=61551089827548&mibextid=LQQJ4d"
          className="flex items-center justify-center pt-9"
        >
          <img src={Facebook} className="w-12" alt="facebook"></img>
        </Link>
      </footer>
    </div>
  );
}

export default Home;
