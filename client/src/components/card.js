import React from "react";
import { Link } from "react-router-dom";
import BlankImg from "../assets/truck.jpg";

function Card() {
  return <div className="flex">
              <div className="service flex align-center justify-center ">
            <div class="max-w-sm bg-[#f2f8fc] border border-gray-200 rounded-lg shadow ">
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={BlankImg}
                  alt="blankimg"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#8044CC]">
                  ຂົນສົ່ງຂ້າມແດນ
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-[#8044CC] ">
                  Enter Your Content 
                </p>
              </div>
            </div>
          </div>


              <div className="service flex align-center justify-center ">
            <div class="max-w-sm bg-[#f2f8fc] border border-gray-200 rounded-lg shadow ">
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={BlankImg}
                  alt="blankimg"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#8044CC]">
                  ຈັດຊື້ສີນຄ້າ
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-[#8044CC] ">
                  Enter Your Content 
                </p>
              </div>
            </div>
          </div>



              <div className="service flex align-center justify-center ">
            <div class="max-w-sm bg-[#f2f8fc] border border-gray-200 rounded-lg shadow ">
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={BlankImg}
                  alt="blankimg"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#8044CC]">
                  ຮັບຜະລິດສີນຄ້າ(ສ້າງແບຣນ)
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-[#8044CC] ">
                  Enter Your Content 
                </p>
              </div>
            </div>
          </div>


              <div className="service flex align-center justify-center ">
            <div class="max-w-sm bg-[#f2f8fc] border border-gray-200 rounded-lg shadow ">
              <Link href="#">
                <img
                  className="rounded-t-lg"
                  src={BlankImg}
                  alt="blankimg"
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#8044CC]">
                  ໃຫ້ບໍລິການຝາກສາງສີນຄ້າ
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-[#8044CC] ">
                  Enter Your Content 
                </p>
              </div>
            </div>
          </div>
</div>;
}

export default Card;
