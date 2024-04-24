import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Explore Morocco Tours - Best Sightseeing Packages</title>
        <meta
          name="description"
          content="Discover the best Morocco sightseeing tours with breathtaking views. Enjoy promotions on our exclusive tour packages, starting at just $500. Book your adventure today!"
        />
      </Helmet>

      {/* main content section */}
      <div className="relative h-[600px] w-full bg-white-A700 px-[22px] sm:px-5">
        {/* promotion section */}
        <div className="absolute left-[22.00px] top-[16.15px] m-auto flex w-[55%] flex-col items-start">
          <Heading size="xs" as="h1" className="uppercase tracking-[1.80px] !text-red-400">
            Promotion
          </Heading>
          <Heading size="s" as="h2" className="mt-[41px] !font-volkhov leading-[71px] !text-blue_gray-900">
            We Provide You Best Morocco Sightseeing Tours
          </Heading>
          <Text
            as="p"
            className="relative z-[1] mt-[25px] w-[86%] !font-normal leading-[26px] !text-black-900 md:w-full"
          >
            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non
            quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut
            optio quibusdam!
          </Text>
          <Button shape="round" className="ml-[9px] md:ml-0 sm:px-5">
            View Packages
          </Button>
        </div>

        {/* tour packages section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] m-auto flex h-max w-full max-w-[1828px] items-center justify-center md:relative md:flex-col">
          <div className="mb-4 flex flex-1 gap-[77px] self-end md:flex-col md:self-stretch">
            <div className="relative h-[193px] flex-1 md:h-auto md:w-full md:flex-none">
              <Img
                src="images/img_rectangle_19295.png"
                alt="image"
                className="h-[193px] w-full rounded-[10px] object-cover"
              />
              <div className="absolute right-[18.85px] top-[12.25px] m-auto flex w-[36%] justify-center rounded-[14px] bg-gradient px-[5px] pt-[5px]">
                <Text as="p">$700</Text>
              </div>
            </div>
            <div className="flex w-[23%] items-start md:w-full">
              <Img
                src="images/img_rectangle_19297.png"
                alt="image"
                className="h-[194px] w-[73%] rounded-[10px] object-cover"
              />
              <div className="relative ml-[-58px] mt-3 flex w-[27%] justify-center rounded-[14px] bg-gradient px-[5px] pt-[5px]">
                <Text as="p">$500</Text>
              </div>
            </div>
            <div className="relative h-[193px] flex-1 md:h-auto md:w-full md:flex-none">
              <Img
                src="images/img_rectangle_19296.png"
                alt="image"
                className="h-[193px] w-full rounded-[10px] object-cover"
              />
              <div className="absolute right-[15.37px] top-[17.15px] m-auto flex w-[36%] justify-center rounded-[14px] bg-gradient px-[5px] pt-[5px]">
                <Text as="p">$800</Text>
              </div>
            </div>
            <div className="relative h-[193px] flex-1 md:h-auto md:w-full md:flex-none">
              <Img
                src="images/img_rectangle_19297_193x268.png"
                alt="image"
                className="h-[193px] w-full rounded-[10px] object-cover"
              />
              <div className="absolute right-[14.21px] top-[12.25px] m-auto flex w-[36%] justify-center rounded-[14px] bg-gradient px-[5px] pt-[5px]">
                <Text as="p">$500</Text>
              </div>
            </div>
          </div>

          {/* gallery section */}
          <div className="relative z-[3] ml-[-128px] flex w-[33%] items-center justify-center gap-[9px] md:ml-0 md:w-full sm:flex-col">
            <div className="relative h-[599px] flex-1 sm:w-full sm:flex-none sm:self-stretch">
              <Img
                src="images/img_rectangle_19299.png"
                alt="image"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[599px] w-full object-cover"
              />
              <Img
                src="images/img_image_50.png"
                alt="imagefifty_one"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[582px] w-full rounded-tl-[278px] rounded-tr-[278px] object-cover"
              />
            </div>
            <Heading as="h2" className="w-[12%] rotate-[90deg] self-end !text-[51.19px] leading-[67px] sm:w-full">
              Breath Taking Viewes
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
