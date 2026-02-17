'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';
import { MousePointer, Target, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function GameplayDemo() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image: '/images/block_move.gif',
      icon: MousePointer,
      title: '직관적인 드래그 앤 드롭',
      description: '손끝으로 블록을 자유롭게 움직여보세요. 원하는 위치에 정확하게 배치할 수 있는 직관적인 조작 방식을 제공합니다.',
    },
    {
      id: 2,
      image: '/images/block_remove.gif',
      icon: Target,
      title: '전략적인 영역 완성',
      description: '영역을 완전히 채우면 해당 부분이 사라지며 점수를 획득합니다. 효율적인 블록 배치로 높은 점수에 도전해보세요.',
    },
    {
      id: 3,
      image: '/images/block_end.gif',
      icon: Sparkles,
      title: '끊임없는 도전',
      description: '게임이 종료되면 새로운 영역이 생성됩니다. 지속적으로 변화하는 게임 보드가 끊임없는 재미와 도전을 제공합니다.',
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="px-2"> {/* Added padding for slider gap */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video relative mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="contain"
                  priority={index === 0}
                />
              </div>
              <div className="flex items-start space-x-3">
                <slide.icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{slide.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
