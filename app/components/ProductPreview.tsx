'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Star, Zap, Puzzle } from 'lucide-react'
import GameplayDemo from '../components/GamePlaydemo'

export default function ProductPreview() {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            게임 소개
          </span>
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 -mr-32 -mt-32 transform rotate-45"></div>
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 기존 이미지 대신 GameplayDemo 컴포넌트를 표시 */}
              <GameplayDemo />
            </motion.div>
            <div className="lg:w-1/2 lg:pl-12">
              <motion.h3
                className="text-3xl font-bold mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AREA TETRIS
              </motion.h3>
              <motion.p
                className="mb-6 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                고정된 영역을 블록으로 채워 나가는 독특한 퍼즐 게임입니다. 드래그 앤 드롭으로 블록을 배치하고, 전략적 사고로 높은 점수를 노려보세요!
              </motion.p>
              <motion.h4
                className="text-xl font-semibold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                주요 특징
              </motion.h4>
              <motion.ul
                className="grid grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <li className="flex items-center space-x-2 text-gray-700">
                  <Puzzle className="w-5 h-5 text-blue-500" />
                  <span>간단한 조작</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span>깊이 있는 전략</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <Star className="w-5 h-5 text-blue-500" />
                  <span>시각적 즐거움</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <Download className="w-5 h-5 text-blue-500" />
                  <span>중독성 있는 플레이</span>
                </li>
              </motion.ul>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link
                  href="/product"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  자세히 보기
                </Link>
                <a
                  href="https://apps.apple.com/kr/app/area-tetris/id6737521199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  iOS 다운로드
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
