import React from "react";
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
import IconSlide from "../components/iconslide";
import Card from "../components/card";

function Home() {
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
              <a href="/Tracking">| ຕິດຕາມພັດສະດຸ</a>
            </li>
            <li>
              <a href="/">| ຄຳນວນຄ່າຂົນສົ່ງ</a>
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

            <Link className="secondButton" to="/calculateTh">
              <img src={Thai} alt="thai icon" />
              <h3>ຄ່າບໍລິການຂົນສົ່ງ ໄທ</h3>
            </Link>
            <h1>|</h1>

            <Link className="thirdButton" to="/calculateChina">
              <img src={China} alt="china icon" />
              <h3>ຄ່າບໍລິການຂົນສົ່ງ ຈີນ</h3>
            </Link>
          </div>
        </div>

        {/* <div className="loginLink">
          <Link to="/login" className="buttonLogin">
            ສະໝັກສະມາຊິກ & ເຂົ້າສູ່ລະບົບ
          </Link>
        </div> */}
      </div>

                <Card />

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

      <div className="containerAbout mx-60">
        <h1>
          <span>|</span> ພາລະກິດຂອງພວກເຮົາ
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

      <div className="contentSlide">
        <h1>
          <span>|</span> ບັນດາຄູ່ຄ້າຂອງພວກເຮົາ
        </h1>
      </div>
      <IconSlide />

      <footer>
        <div className="logo w-full h-auto mt-10">
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
              <a href="/">| ຕິດຕາມພັດສະດຸ</a>
            </li>
            <li>
              <a href="/">| ຄຳນວນຄ່າຂົນສົ່ງ</a>
            </li>
          </ul>
        </div>
        <h1>Contact</h1>
        <div className="w-full flex items-center justify-center my-10">
          <Link
            to="https://www.facebook.com/profile.php?id=61551089827548&mibextid=LQQJ4d"
            className="w-96 flex items-center justify-center py-6 bg-[#126cfd] rounded-xl "
          >
            <img src={Facebook} className="w-12 facebook" alt="facebook"></img>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
