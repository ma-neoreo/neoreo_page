'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { MousePointer, Target, Sparkles, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import Image from 'next/image';

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-white hover:bg-slate-50 rounded-full shadow-lg transition-all text-slate-600 hover:text-blue-600 flex items-center justify-center border border-slate-100"
      onClick={onClick}
    >
      <ChevronRight size={20} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-white hover:bg-slate-50 rounded-full shadow-lg transition-all text-slate-600 hover:text-blue-600 flex items-center justify-center border border-slate-100"
      onClick={onClick}
    >
      <ChevronLeft size={20} />
    </div>
  );
}

export default function GameplayDemo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 rounded-full bg-slate-200 hover:bg-blue-400 transition-colors cursor-pointer" />
    )
  };

  const slides = [
    {
      id: 1,
      image: '/images/block_move.gif',
      icon: MousePointer,
      title: 'Intuitive Controls',
      description: '손끝으로 완성하는 전략. 드래그 앤 드롭으로 블록을 자유롭게 배치하세요.',
    },
    {
      id: 2,
      image: '/images/block_remove.gif',
      icon: Target,
      title: 'Strategic Clear',
      description: '영역을 채우면 사라지는 쾌감. 당신만의 전략으로 고득점을 노리세요.',
    },
    {
      id: 3,
      image: '/images/block_end.gif',
      icon: Sparkles,
      title: 'Endless Challenge',
      description: '끊임없이 생성되는 퍼즐. 매번 새로운 도전이 기다립니다.',
    },
  ];

  return (
    <div id="gameplay" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">See It in Action</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          복잡한 규칙 없이 직관적입니다. 하지만 마스터하기는 어렵습니다.
        </p>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="px-4 focus:outline-none py-4">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 max-w-3xl mx-auto">
              {/* Mockup Frame */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 space-x-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="relative pt-8 aspect-video w-full bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                  {/* Placeholder for loading state */}
                  <Smartphone className="text-slate-300 w-12 h-12 animate-pulse" />
                </div>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-700 group-hover:scale-105 z-10"
                  priority={index === 0}
                />
              </div>

              <div className="p-8 bg-white border-t border-slate-50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <slide.icon size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{slide.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #2563eb !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
