import React from "react";

import Header from "components/Header";
import { Img, Text, Button, List } from "components";
import Footer from "components/Footer";

const BlogDetailsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-publicsans gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1330px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <Img
                src="images/img_rectangle20.png"
                className="h-[500px] mx-auto object-cover rounded-[25px] w-full"
                alt="RectangleTwenty"
              />
              <div className="bg-white_A700 flex items-center justify-end mt-[-132px] mx-auto p-12 md:px-10 sm:px-5 rounded-[25px] shadow-bs3 w-[84%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                  <Text
                    className="font-light font-publicsans text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  ></Text>
                  <Text
                    className="font-merriweather italic mt-[27px] text-gray_600 text-left tracking-[0.12px] w-full"
                    as="h2"
                    variant="h2"
                  >
                    How to write a book properly and correctly by paying
                    attention to various parts to support the story
                  </Text>
                  <div className="flex sm:flex-col flex-row font-publicsans sm:gap-10 items-center justify-between mt-[50px] w-full">
                    <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[31%] sm:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                        alt="EllipseFive"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="font-semibold text-bluegray_600 text-left w-auto"
                          as="h4"
                          variant="h4"
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
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[191px] sm:mt-0 my-1 w-auto"
                      leftIcon={
                        <Img
                          src="images/img_signal.svg"
                          className="ml-[29px] mr-2.5 my-4"
                          alt="signal"
                        />
                      }
                      shape="RoundedBorder5"
                      size="2xl"
                      variant="OutlinePink300"
                    >
                      <div className="font-medium leading-[normal] text-left text-lg text-pink_300">
                        Share Now
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[74%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="font-light font-publicsans leading-[35.00px] text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-[50px] w-[97%] md:w-full">
                  <Img
                    src="images/img_trash.svg"
                    className="h-10 w-10"
                    alt="trash"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="font-bold font-merriweather italic text-bluegray_600 text-left w-full"
                      as="h3"
                      variant="h3"
                    >
                      There is a way out of every box, a solution to every
                      puzzle; it’s just a matter of finding it.
                    </Text>
                    <Text
                      className="font-light font-publicsans text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      JEAN-LUC PICARD
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[50px] text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                ></Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-2.5 text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard.
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-2.5 text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <Text
                  className="font-bold font-merriweather mt-[42px] text-bluegray_600 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Lorem Ipsum Dolor Sit Amet
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-5 text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] rounded-[15px] w-full">
                  <Img
                    src="images/img_rectangle23.png"
                    className="md:flex-1 h-[334px] sm:h-auto object-cover rounded-[15px] w-auto md:w-full"
                    alt="RectangleTwentyThree"
                  />
                  <Img
                    src="images/img_rectangle24.png"
                    className="md:flex-1 h-[334px] sm:h-auto object-cover rounded-[15px] w-auto md:w-full"
                    alt="RectangleTwentyFour"
                  />
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-[50px] text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  What’s a knock-out like you doing in a computer-generated gin
                  joint like this? But the probability of making a six is no
                  greater than that of rolling a seven. I guess it’s better to
                  be lucky than good.
                </Text>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-2.5 text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Damage report! I’ve had twelve years to think about it. And if
                  I had it to do over again, I would have grabbed the phaser and
                  pointed it at you instead of them. Some days you get the bear,
                  and some days the bear gets you. Ensign Babyface! I’m afraid I
                  still don’t understand, sir. Mr. Crusher, ready a collision
                  course with the Borg ship. Yesterday I did not know how to eat
                  gagh. You’re going to be an interesting companion.
                </Text>
                <div className="flex flex-col font-publicsans items-start justify-end md:ml-[0] ml-[30px] mt-5 pr-2 py-2 w-1/2 md:w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-start mr-auto w-[54%] md:w-full">
                    <div className="bg-bluegray_600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mr-auto mt-4 w-[72%] md:w-full">
                    <div className="bg-bluegray_600 h-2.5 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      At vero eos et accusamus et iusto odio.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mr-auto mt-[19px] w-[88%] md:w-full">
                    <div className="bg-bluegray_600 h-2.5 sm:mt-0 my-[3px] rounded-[50%] w-2.5"></div>
                    <Text
                      className="font-light text-bluegray_600 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Excepteur sint occaecat cupidatat non proident.
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light font-publicsans leading-[35.00px] mt-5 text-bluegray_600 text-left w-full"
                  as="h5"
                  variant="h5"
                >
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[50px] rounded-[5px] w-[52%] md:w-full">
                <Text
                  className="font-medium text-bluegray_600 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Tags
                </Text>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between rounded-[5px] w-full">
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[96px] text-bluegray_600 text-center text-lg w-auto"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Writing
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[97px] text-bluegray_600 text-center text-lg w-auto"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[93px] text-bluegray_600 text-center text-lg w-auto"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    How to
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-bluegray_600 text-center text-lg w-auto"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    Book
                  </Button>
                  <Button
                    className="cursor-pointer font-thin leading-[normal] min-w-[77px] text-bluegray_600 text-center text-lg w-auto"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillGray200"
                  >
                    2020
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] justify-start md:ml-[0] ml-[153px] mt-[66px] w-[64%] md:w-full">
                <div className="md:h-[120px] h-[153px] relative w-full">
                  <Img
                    src="images/img_group_blue_51.svg"
                    className="absolute h-[83px] left-[0] top-[0] w-[17%]"
                    alt="Group"
                  />
                  <Text
                    className="absolute bottom-[0] font-light leading-[40.00px] right-[0] text-bluegray_600 text-center w-[92%] sm:w-full"
                    as="h4"
                    variant="h4"
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-end ml-auto w-[38%] md:w-full">
                  <Img
                    src="images/img_ellipse5.png"
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
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
                      Podcaster & Blogger
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[27.39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1356px] mt-[150px] mx-auto md:px-5 rounded-[5px] w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-7 sm:px-5 rounded-[5px] w-full"
              style={{ backgroundImage: "url('images/img_list.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-[3px] mt-[126px] w-auto md:w-full">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-[25px] sm:px-5 rounded-[5px] w-full"
              style={{ backgroundImage: "url('images/img_list_273X433.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-1.5 mt-32 w-auto md:w-full">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 h-[273px] items-start justify-end p-[25px] sm:px-5 rounded-[5px] w-full"
              style={{ backgroundImage: "url('images/img_list_1.png')" }}
            >
              <div className="flex flex-col gap-[23px] items-start justify-start mb-1.5 mt-32 w-auto md:w-full">
                <Text
                  className="font-bold font-merriweather italic text-left text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Consistent way of working to train yourself
                </Text>
                <Text
                  className="font-light font-publicsans text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  5 minutes ago
                </Text>
              </div>
            </div>
          </List>
          <Footer className="bg-gray_600 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
