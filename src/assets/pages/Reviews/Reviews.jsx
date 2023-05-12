import React from "react";

import Lottie from "lottie-react";
import review from "../../../../public/review.json";

const Reviews = () => {
  return (
    <div className="bg-gray-200 py-6">
      <h1 className="text-center mt-10 font-bold text-4xl text-purple-700">See What Our Customers Says !!!</h1>
      <div className="flex justify-center items-center flex-col  md:flex-row mx-auto mt-20">
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:mx-auto h-full mb-16 sm:h-96">
            <Lottie animationData={review} loop={true} />
          </div>
        </div>

        <div className="">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-96">
            <div className="collapse-title text-xl font-medium">
            Emily W
            </div>
            <div className="collapse-content">
              <p>
              "The Chef's Specials at Hungry Head never fail to impress me. The Grilled Salmon with Lemon-Dill Sauce was a delightful symphony of flavors. The perfectly cooked salmon paired with the zesty sauce and the side of herb-infused couscous created a truly memorable dining experience."
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-96">
            <div className="collapse-title text-xl font-medium">
            Jonn Bret
            </div>
            <div className="collapse-content">
              <p>
              "The Chef's Specials at Hungry Head never fail to impress me. The Grilled Salmon with Lemon-Dill Sauce was a delightful symphony of flavors. The perfectly cooked salmon paired with the zesty sauce and the side of herb-infused couscous created a truly memorable dining experience."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
