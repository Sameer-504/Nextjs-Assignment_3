import React from "react";
import Image from "next/image";
import Work from "@/app/assets/Work.png";
import Apple from "@/app/assets/Apple.png";
import Google from "@/app/assets/Google.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";
import Logo from "@/app/assets/Logo.png";

const Hero = () => {
  return (
    <>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] left-[1px] bg-[#043873] text-white flex items-center">
        <div className="w-[656px] h-[361px] gap-[60px]">
          <div className="w-[656px] h-[238px] gap-[24px]">
            <h2 className=" w-[656px] h-[154px] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em]">
              Get More Done with Whitespace
            </h2>
            <p className=" w-[656px] h-[60px] font-normal text-lg leading-[30px] tracking-[0.02em]">
              Project Management software that enables your teams to
              collaborate, plan, analyze and manage every tasks
            </p>
          </div>
          <div className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px]">
            <button className="w-[159px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[#FFFFFF]">
              Try Whitepace Free
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>

      <div className="w-[1920px] h-[1588px] top-[921px] left-[1px] gap-[100px] py-[140px] px-[220px]">
        <div className="w-[1480px] h-[547px] gap-[60px] flex items-center">
          <div className="w-[672px] h-[411px] gap-[60px]">
            <div className="w-[672px] h-[288px] gap-6">
              <h1 className=" w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]">
                Project Management
              </h1>
              <p className=" w-[672px] h-[90px] font-normal text-[18px] leading-[30px] tracking-[0.02em] text-[#212529]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div className="w-[201px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9]">
              <button className="w-[97px] h-[23px] font-medium leading-[23px] tracking-[0.02em] text-[18px] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>

        <div className="w-[1480px] h-[661px] gap-[100px] flex items-center mt-[140px]">
          <div className="w-[710px] h-[661px]">
            <Image src={Work} alt="work"></Image>
          </div>
          <div className="w-[670px] h-[294px] gap-[60px]">
            <div className="w=[670px] h-[171px] gap-6">
              <h1 className="w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em]  text-black">
                Work together
              </h1>
              <p className="w-[670px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[0.02em] mt-[25px]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <div className="w-[186px] h-[63px] rounded-md py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-[58px]">
              <p className="w-[82px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[0.02em] text-white">
                Try it now
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[759px] top-[2509px] left-[1px] py-[140px] px-[220px] gap-[98px] bg-[#043873] flex items-center">
        <div className="w-[697px] h-[294px] gap-[60px]">
          <div className="w-[697px] h-[171px] gap-6">
            <h1 className="w-[697px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] text-white">
              Use as Extension
            </h1>
            <p className="w-[697px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[0.02em] text-white">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <div className="w-[171px] h-[63px] rounded-md py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9]">
            <button className="w-[70px]  h-[23px] font-medium text-[18px] leading-[23px] tracking-[0.02em] text-white">
              Let&#39;s Go
            </button>
          </div>
        </div>
        <div className="w-[686px] h-[479px] gap-[4px]">
          <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </div>
      </div>

      <div className="w-[1921px] h-[812.09px] top-[3268px] left-[1px]  py-[140px] px-[220px] gap-[98px] flex items-center">
        <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
        <div className="w-[669px] h-[411px] gap-[60px]">
          <div className="w-[669px] h-[288px] gap-6">
            <h1 className="w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] text-black">
              Customise it to your needs
            </h1>
            <p className="w-[669px] h-[90px] font-normal text-[18px] leading-[30px] tracking-[0.02em] text-black">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
          </div>
          <div className="w-[171px] h-[63px] rounded-lg py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9]">
            <button className="w-[70px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[0.02em] text-white">
              Let&#39;s Go
            </button>
          </div>
        </div>
      </div>



      <div className="w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873]">
        <div className="w-[1481px] h-[294px] gap-[60px]">
          <div className="w-[1064px] h-[171px] gap-6 mx-auto">
            <h1 className="w-[1064px] h-[87px] font-medium text-[72px] leading-[87.14px] tracking-[0.02em] text-white">
              Your work, everywhere you are
            </h1>
            <p className="w-[1064px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[0.02em] items-center mt-[24px] text-white">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] mx-auto mt-[60px]">
            <button className="w-[91px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[0.02em] text-white">Try Taskey</button>
          </div>
        </div>
      </div>



      <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px]">
        <div className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[0.02em] text-center">Our sponsors</div>
        <div className="w-[1482px] h-[71px] flex justify-between mt-[100px]">
          <div className="w-[55.47px] h-[68px] gap-1">
            <Image src={Apple} alt="apple"></Image>
          </div>
          <div className="w-[287px] h-[62px] gap-1">
            <Image src={Microsoft} alt="microsoft"></Image>
          </div>
          <div className="w-[280px] h-[71px] gap-1">
            <Image src={Slack} alt="slack"></Image>
          </div>
          <div className="w-[211px] h-[69.81px] gap-1">
            <Image src={Google} alt="google"></Image>
          </div>
        </div>
      </div>


      <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] px-[220px] pt-[140px] pb-[32px] gap-[200px] bg-[#043873] ">
        <div className="w-[1480px] h-[289px] gap-[100px]">
          <div className="w-[1480px] h-[169px] gap-[100px] flex justify-between">
            <div className="w-[295px] h-[169px] gap-[15px]">
              <div className="w-[191px] h-[34px]">
                <Image src={Logo} alt="logo"></Image>
                <p className="w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[0.02em] text-[#F7F7EE] mt-[15]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
              </div>
              </div>
              <div className="w-[295px] h-[127px] gap-[15px] text-white">
                <ul>
                  <li className="w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[0.02em] text-white">Product</li>
                  <li className="w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em] text-[#FFE492]">Overview</li>
                  <li className="w-[50px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em] text-white">Pricing</li>
                  <li className="w-[177px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em] text-white">Customer Stories</li>
                </ul>
            </div>
            <div className="w-[295px] h-[130px] gap-4 text-white">
              <ul>
                <li className="w-[91px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[0.02em]">Resources</li>
                <li className="w-[33px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em]">Blog</li>
                <li className="w-[137px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em]">Guides & Tutorials</li>
                <li className="w-[130px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[0.02em]">Help Center</li>
              </ul>
            </div>

            <div className="w-[295px] h-[130px] gap-4 text-white">
              <ul>
                <li className="w-[83px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[0.02em]">Company</li>
                <li className="w-[90px] h-[20px] font-normal text-[18px] leading-[21.78px] tracking-[0.02em]">About Us</li>
                <li className="w-[62px] h-[20px] font-normal text-[18px] leading-[21.78px] tracking-[0.02em]">Careers</li>
                <li className="w-[99px] h-[20px] font-normal text-[18px] leading-[21.78px] tracking-[0.02em]">Media Kit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[1480px] h-[20px] flex justify-center">
              <div className="w-[169px] h-[20px] gap-[60px]">
                <p className="w-[190px] h-[20px] text-white font-normal text-[16px] leading-[20px] tracking-[0.02em]"> © 2021 Whitepace LLC.</p>
              </div>
            </div>
      </div>
    </>
  );
};

export default Hero;
