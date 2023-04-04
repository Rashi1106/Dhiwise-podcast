import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-center mb-[35px] mt-[65px] mx-auto w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-end w-[31%] md:w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start mr-auto mt-0.5 w-[43%] md:w-full">
                <Img
                  src="defaultNoData.png"
                  className="h-6 w-6"
                  alt="edit One"
                />
                <Text
                  className="font-extrabold font-nunitosans text-left text-white_A700 uppercase w-auto"
                  as="h4"
                  variant="h4"
                >
                  Blogsly
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start mr-auto w-[48%] md:w-full">
                <Img
                  src="images/img_favorite.svg"
                  className="h-5 w-5"
                  alt="favorite"
                />
                <Text
                  className="font-medium font-publicsans text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  Build with heart
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-center md:mt-0 mt-[23px] w-[43%] md:w-full">
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                Home
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                Podcast
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                Blog
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                About
              </Text>
              <Text
                className="font-light font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                Contact
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[178px] w-[11%] md:w-full">
              <Text
                className="font-bold font-publicsans text-left text-white_A700 w-auto"
                as="h5"
                variant="h5"
              >
                Follow Me on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="h-[25px] w-full"
                alt="GroupNinetyFour"
              />
            </div>
          </div>
          <Text
            className="font-light font-publicsans text-left text-white_A700 w-auto"
            variant="body1"
          >
            Powered by Blogsly
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
