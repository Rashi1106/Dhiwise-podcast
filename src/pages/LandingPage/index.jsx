import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List, Line, Input } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[90px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex items-center justify-start max-w-[1030px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-8 justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
                  <Img
                    src="images/img_cart.svg"
                    className="h-[61px] md:mt-0 mt-[66px] w-[61px]"
                    alt="cart"
                  />
                  <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="font-merriweather text-center text-gray_600 w-full"
                      as="h1"
                      variant="h1"
                    >
                      Share via writing and podcasts, hope you enjoy
                    </Text>
                    <Text
                      className="font-normal font-publicsans leading-[35.00px] not-italic text-center text-gray_601 w-[78%] sm:w-full"
                      as="h4"
                      variant="h4"
                    >
                      Increase your knowledge by reading new things and I will
                      share whatever I know for you, as long as I enjoy it
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-end ml-auto rounded-[35.5px] w-[56%] md:w-full">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[221px] not-italic text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl tracking-[0.12px] w-auto"
                    shape="RoundedBorder35"
                    size="3xl"
                    variant="OutlineIndigo90056"
                  >
                    Read More
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[271px] not-italic text-2xl md:text-[22px] text-center text-indigo_900 sm:text-xl tracking-[0.12px] w-auto"
                    shape="RoundedBorder35"
                    size="3xl"
                    variant="OutlineIndigo201"
                  >
                    Listen to Podcasts
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_ticket.svg"
                className="h-[61px] md:mt-0 mt-[205px] w-[61px]"
                alt="ticket"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start max-w-[1111px] mt-[162px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[39%] sm:w-full">
                <Button
                  className="flex h-[76px] items-center justify-center rounded-[50%] w-[76px]"
                  size="mdIcn"
                  variant="icbFillGray300"
                >
                  <Img
                    src="images/img_microphone.svg"
                    className="h-[50px]"
                    alt="microphone"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <Text
                    className="font-black font-merriweather ml-0.5 md:ml-[0] text-gray_600 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Latest Podcasts{" "}
                  </Text>
                  <Text
                    className="font-normal font-publicsans mt-[5px] not-italic text-gray_601 text-left tracking-[0.12px] w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Get started on latest episodes
                  </Text>
                </div>
              </div>
              <Text
                className="font-bold text-indigo_901 text-left tracking-[0.12px] w-auto"
                variant="body1"
              >
                See all podcasts
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1209.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      The secrets of writing a good book
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                      variant="body1"
                    >
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1210.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      The secrets of writing a good book
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                      variant="body1"
                    >
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1211.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      The secrets of writing a good book
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                      variant="body1"
                    >
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[13px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start my-[7px] rounded-[5px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex h-[207px] items-center justify-start p-[63px] md:px-10 sm:px-5 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group1212.png')",
                    }}
                  >
                    <Button
                      className="flex h-[72px] items-center justify-center mb-[9px] w-[72px]"
                      shape="icbCircleBorder38"
                      size="lgIcn"
                      variant="icbFillGray60076"
                    >
                      <Img
                        src="images/img_group.svg"
                        className="h-[35px]"
                        alt="Group Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="font-bold font-merriweather text-gray_600 text-left w-full"
                      as="h6"
                      variant="h6"
                    >
                      The secrets of writing a good book
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                      variant="body1"
                    >
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start max-w-[1110px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] justify-start w-[66%] md:w-full">
              <List
                className="flex-col gap-[50px] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-auto"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-auto"
                        variant="body1"
                      ></Text>
                    </div>
                    <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11.png"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 w-auto"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive One"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-auto"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-auto"
                        variant="body1"
                      ></Text>
                    </div>
                    <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11_390X728.png"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven One"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location One"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 w-auto"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-full">
                      <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[34%] sm:w-full">
                        <Img
                          src="images/img_ellipse5.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseFive Two"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="font-semibold text-bluegray_600 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            By Jhone Leonardo
                          </Text>
                          <Text
                            className="font-light mt-[5px] text-bluegray_600 text-left w-auto"
                            variant="body1"
                          >
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-light text-bluegray_600 text-left w-auto"
                        variant="body1"
                      ></Text>
                    </div>
                    <Text
                      className="font-merriweather italic ml-0.5 md:ml-[0] mt-[30px] text-gray_600 text-left tracking-[0.12px] w-full"
                      as="h2"
                      variant="h2"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Img
                      src="images/img_rectangle11_1.png"
                      className="h-[390px] sm:h-auto ml-0.5 md:ml-[0] mt-[30px] object-cover rounded-[5px] w-full"
                      alt="RectangleEleven Two"
                    />
                    <Text
                      className="font-light font-publicsans leading-[30.00px] ml-0.5 md:ml-[0] mt-[30px] text-bluegray_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      We all know that every person has his or her own desire to
                      work, but do you know that we can actually be consistent
                      in making works if we want, now in this article I want to
                      invite all of you to learn to be consistent in creating.
                    </Text>
                    <div className="flex sm:flex-col flex-row font-publicsans gap-[50px] items-center justify-start mt-5 w-[65%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[34%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLightblue50"
                        >
                          <Img
                            src="images/img_clock.svg"
                            className="h-[30px]"
                            alt="clock Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center w-[24%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillLime50"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[30px]"
                            alt="checkmark Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          12 Like
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[23%] sm:w-full">
                        <Button
                          className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                          size="mdIcn"
                          variant="icbFillRed50"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="h-[30px]"
                            alt="location Two"
                          />
                        </Button>
                        <Text
                          className="font-light text-black_900 text-left w-auto"
                          variant="body1"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[255px] mt-5 w-auto"
                      onClick={() => navigate("/blogdetails")}
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mt-6 mb-[23px] ml-[19px] mr-[29px]"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder5"
                      size="5xl"
                      variant="FillIndigo90067"
                    >
                      <div className="font-bold font-publicsans leading-[normal] text-indigo_900 text-left text-lg tracking-[0.12px]">
                        Continue Reading
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-center justify-end ml-auto w-[29%] md:w-full">
                <Text
                  className="bg-indigo_900 flex font-normal h-10 items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-10"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Text
                  className="bg-white_A700 flex font-normal h-10 items-center justify-center ml-5 not-italic rounded-[50%] text-center text-indigo_900 w-10"
                  as="h5"
                  variant="h5"
                >
                  2
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-between ml-10 w-[34%]">
                  <Text
                    className="font-light text-indigo_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Next
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-4 mt-[3px] w-4"
                    alt="arrowright Three"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[32%] md:w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start rounded-[5px] w-full"
                onClick={() => navigate("/bloggerdetails")}
              >
                <Img
                  src="images/img_rectangle10.png"
                  className="h-[400px] sm:h-auto object-cover rounded-[5px] w-full"
                  alt="RectangleTen"
                />
                <div className="flex flex-col items-start justify-start mt-5 w-auto md:w-full">
                  <Text
                    className="font-bold font-merriweather text-gray_600 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Jhone Leonardo
                  </Text>
                  <Text
                    className="font-medium font-publicsans mt-[5px] text-bluegray_600 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Podcaster & Blogger
                  </Text>
                </div>
                <Text
                  className="font-light leading-[30.00px] mt-[26px] text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  I want to share knowledge in my own style. I have been working
                  on various things that I think I really need to share with you
                  all. I am a jhone podcaster and blogger
                </Text>
              </div>
              <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-[56%] md:w-full">
                <Text
                  className="font-bold text-gray_600 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Follow Me On
                </Text>
                <div className="flex flex-col font-publicsans gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Img
                      src="images/img_email1.svg"
                      className="h-5 w-5"
                      alt="emailOne"
                    />
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Hellojhone@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[77%] md:w-full">
                    <Img
                      src="images/img_camera.svg"
                      className="h-5 w-5"
                      alt="camera"
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      @Johoe_Podcast
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[78%] md:w-full">
                    <Img
                      src="images/img_twitter.svg"
                      className="common-pointer h-5 w-5"
                      onClick={handleNavigate}
                      alt="twitter"
                    />
                    <Text
                      className="font-light ml-[5px] text-bluegray_600 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      @JohoeLeonardo
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-merriweather items-start justify-start w-full">
                <Text
                  className="font-bold text-gray_600 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Tranding Blog
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex h-[200px] items-center justify-start mt-5 rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_bloghead.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2.5 h-[200px] items-start justify-end p-[26px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_title.png')" }}
                  >
                    <Text
                      className="font-bold font-merriweather italic ml-3.5 md:ml-[0] mt-[71px] text-left text-white_A700 w-[91%] sm:w-full"
                      as="h5"
                      variant="h5"
                    >
                      Consistent way of working to train yourself
                    </Text>
                    <Text
                      className="font-light font-publicsans ml-3.5 md:ml-[0] text-left text-white_A700 w-auto"
                      variant="body1"
                    >
                      5 minutes ago
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-5 grid items-center mt-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_96X96.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_1.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen Two"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                    <Img
                      src="images/img_rectangle14_2.png"
                      className="h-24 md:h-auto object-cover rounded-[5px] w-24"
                      alt="RectangleFourteen Three"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="font-bold font-merriweather italic text-gray_600 text-left w-full"
                        as="h5"
                        variant="h5"
                      >
                        Consistent way of working to train yourself
                      </Text>
                      <Text
                        className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        5 minutes ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-merriweather gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold text-gray_600 text-left tracking-[0.12px] w-auto"
                  as="h5"
                  variant="h5"
                >
                  Categories
                </Text>
                <div className="flex flex-col font-publicsans items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Writing
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[0.5px] mt-2.5 w-full" />
                  <div className="flex flex-row items-center justify-between mt-[9px] w-full">
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Working
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      5
                    </Text>
                  </div>
                  <Line className="bg-bluegray_100 h-[0.5px] mt-2.5 w-full" />
                  <div className="flex flex-row items-center justify-between mt-[9px] w-full">
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Podcaster
                    </Text>
                    <Text
                      className="bg-blue_50 flex font-normal h-10 items-center justify-center not-italic rounded-[50%] text-center text-gray_600 w-10"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green_50 flex items-center justify-end max-w-[1110px] mt-[100px] mx-auto p-[50px] md:px-5 rounded-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mt-8 w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="font-light font-publicsans text-indigo_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  NEWSLETTER
                </Text>
                <Text
                  className="font-black font-merriweather mt-[5px] text-gray_600 text-left w-full"
                  as="h3"
                  variant="h3"
                >
                  Subscribe to our website newsletter to receive news and
                  updates.
                </Text>
                <Text
                  className="font-light font-publicsans mt-5 text-bluegray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Get special offers directly to your email every week!
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] justify-start w-[44%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start rounded-[5px] w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-bold leading-[normal] p-0 placeholder:text-indigo_900_79 text-indigo_900_79 text-left text-lg w-full"
                    type="email"
                    name="field"
                    placeholder="Your Email"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineIndigo900"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[137px] text-center text-lg text-white_A700 w-auto"
                    shape="RoundedBorder5"
                    size="xl"
                    variant="FillIndigo900"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button
                  className="flex h-[77px] items-center justify-center md:ml-[0] ml-[283px] mr-[77px] w-[77px]"
                  shape="icbCircleBorder38"
                  size="smIcn"
                  variant="icbOutlinePink3007f"
                >
                  <Img
                    src="images/img_ticket_77X77.svg"
                    className="h-[55px]"
                    alt="ticket One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_600 flex items-center justify-center mt-[129px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
