'use client';

import { Image } from '@/components/ui/image';
import { Button }  from '@/components/ui/button';
import { Text }  from '@/components/ui/text';
import { Header } from '@/components/layout/header';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import logo from '@/app/assets/images/logo.png';
import add from '@/app/assets/images/add_vector.png';
import userStar from '@/app/assets/images/user_star.png';
import tag1 from '@/app/assets/images/tag1.png';
import tag2 from '@/app/assets/images/tag2.png';
import iphone_mockup from '@/app/assets/images/iphone_mockup.png';
import klipai_image from '@/app/assets/images/klipai_image.png';
import card from '@/app/assets/images/card.png';
import unique from '@/app/assets/images/unique.png';
import unique1 from '@/app/assets/images/unique1.png';
import balance from '@/app/assets/images/balance.png';
import balance1 from '@/app/assets/images/balance1.png';
import performance from '@/app/assets/images/performance.png';
import performance1 from '@/app/assets/images/performance1.png';

import logo2 from '@/app/assets/images/logos/Logo02.png';
import logo3 from '@/app/assets/images/logos/Logo03.png';
import logo4 from '@/app/assets/images/logos/Logo04.png';   
import logo5 from '@/app/assets/images/logos/Logo05.png';

const logos = [logo2, logo3, logo4, logo5, logo2, logo3, logo4, logo5];

// const logos = [
//   'app/assets/images/logos/logo01.png',
// ];

export default function Home() {
  return (
    <>
      <Header
        logo={
          <Image
            src={logo}
            alt="logo"
            width={99}
            height={30}
            className="object-cover"
          />
        }
        navLinks={[
          { label: 'What is KlipAi', href: '/' },
          { label: 'Send KlapAI', href: '/klapAi' },
          { label: 'AI Agent', href: '/agents' },
          { label: 'Testimonials', href: '/Testimonials' },
          { label: 'Web3', href: '/web3' },
        ]}
        loginButton={
          <Button>Login</Button>
        }
      />

      <main>
        <section className="flex flex-col items-center justify-start min-h-screen hero-bg px-4 pt-10 pb-16">
          {/* Heading */}
          <div className="relative z-10 text-center">
            <Text
              tag="h1"
              size="lg"
              weight="bold"
              align="center"
              responsiveSize={{ base: 'text-xl', md: 'text-3xl', lg: 'text-5xl' }}
              responsiveWeight={{ md: 'font-bold' }}
              className="font-sora mt-10 max-w-[672px] mx-auto leading-[48px]"
            >
              AI receipts. Simple crypto. Smart control.
            </Text>
          </div>

          <div className='w-full max-w-[760px] hero-content'>
            <div className='flex items-center justify-center flex-col mt-[17px]'>
              {/* Subtext */}
              <Text
                tag="p"
                size="md"
                align="center"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-sora leading-[26px] mb-[24px] max-w-[501px] mx-auto"
              >
                Klip is your all-in-one decentralized wallet
                designed for security, flexibility, and full ownership.
              </Text>

              {/* CTA Button */}
              <Button
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                iconClasses="w-[15px] h-[15px] text-[#000000] ml-[18.7px]"
              >
                Get started
              </Button>
            </div>

            {/* Hero Image Section */}
            <div className="relative w-full flex items-center justify-center mt-10 overflow-hidden px-4 hero-content--bg">
              {/* Tag 2 (top right) */}
              <div className="sm:flex absolute top-[30%] left-[4%]">
                <Image
                  src={tag2}
                  alt="tag2"
                  width={246}
                  height={72}
                  className="object-contain hero-content--bg--card"
                />
              </div>

              {/* Main iPhone Image */}
              <div className="w-full max-w-[1200px] hero-content--bg--iphone"></div>

              {/* Tag 1 (bottom left) */}
              <div className=" sm:flex absolute top-[60%] right-[0%]">
                <Image
                  src={tag1}
                  alt="tag1"
                  width={246}
                  height={72}
                  className="object-contain hero-content--bg--card"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto px-[20px] lg:pt-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[63px] items-center bg-white rounded-xl p-[16px] lg:p-[80px] lg:border border-[#EDEDED]">
            {/* Left: Image */}
            <div className="rounded-lg overflow-hidden max-w-[668] max-h-auto[471]">
              <Image
                src={klipai_image}
                alt="tag1"
                className="object-contain"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is KlipAi</h2>
              <p className="text-gray-700 leading-relaxed">
                KlipAi Is The All-In-One Smart Wallet Layer For Web3. <br />
                We Turn Every Crypto Transaction Into A Clean, AI-Powered Receipt. <br />
                You Can Also Send Tokens Using A Simple Username. No TX Hashes. No Wallet Address Mistakes. <br />
                Just Clarity, Control, And Convenience.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-16 lg:px-20 relative">
          <div className='benfits-bg'></div>
          {/* Heading */}
          <div className="flex flex-col items-start mb-12">
            <div className="bg-[#11920030] border border-[#119200] text-[#000000] text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
              BENEFIT
            </div>
            <div className="flex items-end justify-between w-full">
              <Text
                tag="h1"
                size="lg"
                weight="bold"
                align="left"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-sora leading-[62px] max-w-[490px] mx-auto ml-0 mb-0"
              >
                Say goodbye to Wallet Addresses.
              </Text>
              <Text
                tag="p"
                size="md"
                align="left"
                weight="normal"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-montserrat leading-[26px] max-w-[301px] mx-auto mr-0"
              >
                Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.
              </Text>
            </div>

          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Large Card (1st column, spans 2 rows) */}
            <div className="lg:row-span-2 bg-black rounded-2xl px-[43px] py-[30] flex flex-col justify-between relative token-support">
              <Button
                variant='ghost'
                size='sm'
                className='absolute top-[24px] right-[24px] px-0 py-0'
              >
                <Image
                  src={add}
                  alt="add_vector"
                  width={35}
                  height={35} 
                  className="object-contain"
                />
              </Button>
              <Image
                src={userStar}
                alt="user_star"
                width={55}
                height={55} 
                className="object-contain"
              />
              <Text
                tag="h2"
                size="ms"
                weight="normal"
                align="left"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-sora text-white max-w-[224px] mx-auto ml-0 mb-0"
              >
                Token Support
              </Text>
              <Image
                src={iphone_mockup}
                alt="iphone_mockup"
                width={1000}
                className="object-none h-[630px] mb-[10px] z-2"
              />
            </div>

            {/* Top Right Card 1 */}
            <div className="bg-black rounded-2xl flex flex-col justify-between relative">
              <Text
                tag="h2"
                size="ms"
                weight="normal"
                align="left"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-sora text-white w-full mx-auto ml-0 mb-0 px-[43px] py-[30]"
              >
                Secure Transfers
              </Text>
              <Image
                src={card}
                alt="iphone_mockup"
                className="object-fill w-full"
              />
            </div>

            {/* Top Right Card 2 */}
            <div className="bg-black rounded-2xl px-[43px] py-[50] flex flex-col justify-between relative">
              <Button
                variant='ghost'
                size='sm'
                className='absolute top-[24px] right-[24px] px-0 py-0'
              >
                <Image
                  src={add}
                  alt="add_vector"
                  width={35}
                  height={35} 
                  className="object-contain"
                />
              </Button>
              <Image
                src={performance1}
                alt="iphone_mockup"
                className="object-fill w-[313px] h-[241px] mb-[80px]"
              />
              <Image
                src={performance}
                alt="iphone_mockup"
                className="object-fill w-[202px] max-h-[173px] absolute bottom-[35px] right-[21px]"
              />
            </div>

            {/* Bottom Right Card 1 */}
            <div className="bg-black rounded-2xl px-[43px] py-[50] flex flex-col justify-between relative">
              <Button
                variant='ghost'
                size='sm'
                className='absolute top-[24px] right-[24px] px-0 py-0'
              >
                <Image
                  src={add}
                  alt="add_vector"
                  width={35}
                  height={35} 
                  className="object-contain"
                />
              </Button>
              <Image
                src={balance1}
                alt="iphone_mockup"
                className="object-fill w-[313px] h-[241px] mb-[70px]"
              />
              <Image
                src={balance}
                alt="iphone_mockup"
                className="object-fill absolute w-[239px] h-[184px] bottom-[35px] right-[21px]"
              />
            </div>

            {/* Bottom Right Card 2 */}
            <div className="bg-black rounded-2xl pt-[30] py-[0] flex flex-col justify-between relative z-2">
              <Button
                variant='ghost'
                size='sm'
                className='absolute top-[24px] right-[24px] px-0 py-0'
              >
                <Image
                  src={add}
                  alt="add_vector"
                  width={35}
                  height={35} 
                  className="object-contain"
                />
              </Button>
              <Text
                tag="h2"
                size="ms"
                weight="normal"
                align="center"
                responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
                responsiveWeight={{ md: 'font-bold' }}
                className="font-sora text-white w-full mx-auto ml-0 mb-0"
              >Unique Identity</Text>

              <Image
                src={unique}
                alt="iphone_mockup"
                className="object-fill w-[380px] h-[300px] ml-[10px] z-1"
              />
              <Image
                src={unique1}
                alt="iphone_mockup"
                className="object-fill absolute w-[330px] h-[300px] bottom-[0px] right-[33px]"
              />
            </div>
          </div>
        </section>
        <section className='px[100px] py-[100px]'>
          <Text
            tag="p"
            size="ma"
            align="center"
            responsiveSize={{ base: 'text-sm', md: 'text-base', lg: 'text-lg' }}
            responsiveWeight={{ md: 'font-bold' }}
            className="font-sora text-[#C4C4C4] leading-[26px] mb-[64px] mx-auto w-[320px] lg:w-full"
          >
            Partnered with worldwide leading companies
          </Text>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: true,
            }}
            speed={1200}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {logos.map((logo, idx) => (
              <SwiperSlide
                key={idx}
                className="w-auto flex justify-center items-center"
              >
                <Image
                  src={logo}
                  alt="tag1"
                  width={246}
                  height={72}
                  className="object-contain hero-content--bg--card"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>




    </>
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    // <Button>Default</Button>
    // <Button variant="outline">Outline</Button>
    // <Button variant="destructive">Delete</Button>
    // <Button size="md">Learn more</Button>
    // <Button size="lg" icon={ArrowRight} iconPosition="right">Large</Button>
    // <Button icon={Trash2} iconPosition="right" size="icon"> </Button>
    // <Image
    //   src="/images/example.jpg"
    //   alt="Example"
    //   width={400}
    //   height={300}
    //   rounded
    //   shadow
    //   bordered
    //   className="object-cover"
    // />
    // </div>
  );
}
