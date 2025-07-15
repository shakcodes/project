import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";

function Card() {
  return (
    <div className="grid grid-cols-2 gap-6 bg-[linear-gradient(215deg,_#6151F0,_#000)] p-6 rounded-xl shadow-lg text-white">
      <div className="w-full mx-auto p-6 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-700 font-semibold font-inter text-lg text-white">
            Most Profitable Instrument
          </div>
          <div className="flex gap-0 border-2 border-[#6151f002] bg-[#3054d54a] rounded-lg w-22 h-10 items-center justify-between px-2">
            <div className="bg-[#CBFF04] text-black px-3 py-2 rounded-[8px] text-sm font-medium shadow-[0_0_1px_1px_#A1FA4F]">
              <FaIndianRupeeSign />
            </div>
            <div className="bg-transparant border-2 border-[#5f4ef700] text-white px-3 py-1 rounded-[5px] text-sm font-medium">
              %
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[-10px] rounded-lg ">
          <div className="text-[25px] text-white font-medium text-left pb-1">
            F&O
          </div>
          <div className="flex flex-wrap flex-row text-[12px] w-[100px] text-gray-800 text-left pl-0 text-[#CBFF04]">
            <div className="pt-0.5 text-[15px]">
              <IoMdTrendingUp className="text-[#CBFF04]" />
            </div>
            <div className="pt-1 text-[10px] pl-1 text-[#CBFF04]">
              <FaIndianRupeeSign />
            </div>
            <div className="text-[#CBFF04]">1656.64965</div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="mt-10 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[40px] bg-white/40 mr-[0px]"></div>
          <div className="mt-10 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pr-0">
              <BiSolidUpvote className="text-[#CBFF04]" />
            </div>
            <div className="flex items-center gap-0 text-sm text-[#CBFF04] ">
              <FaIndianRupeeSign className="pt-0.5" />
              56,212
            </div>
          </div>
          <div className="bg-[#6060D0] bg-transparent w-24 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            P/L
          </div>
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pr-1">
              <BiSolidDownvote className="text-red-500" />
            </div>
            <div className="flex items-center gap-0 text-sm bg-gradient-to-r from-red-500 to-transparent px-2 py-0.5 rounded text-white">
              <FaIndianRupeeSign className="pt-0.5" />
              46,432
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[40px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="mt-10 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[40px] bg-white/40 mr-[0px]"></div>
          <div className="mt-10 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pr-0">
              <BiSolidUpvote className="text-[#CBFF04]" />
            </div>
            <div className="flex items-center gap-0 text-sm text-[#CBFF04]">
              <FaIndianRupeeSign className="pt-0.5" />
              56,212
            </div>
          </div>
          <div className="bg-[#6060D0] bg-transparent w-24 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            AvgProfit
          </div>
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pl-2">
              <BiSolidUpvote className="text-[#CBFF04]" />
            </div>
            <div className="flex items-center gap-0 text-sm px-0 py-0.5 rounded text-white text-[#CBFF04]">
              <FaIndianRupeeSign className="pt-0.5" />
              46,432
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[40px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="mt-10 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[40px] bg-white/40 mr-[0px]"></div>
          <div className="mt-10 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pr-0">
              <BiSolidDownvote className="text-red-500" />
            </div>
            <div className="flex items-center gap-0 text-sm">
              <FaIndianRupeeSign className="pt-0.5" />
              56,212
            </div>
          </div>
          <div className="bg-[#6060D0] bg-transparent w-24 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            AvgProfit
          </div>
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pl-2">
              <BiSolidDownvote className="text-red-500" />
            </div>
            <div className="flex items-center gap-0 text-sm px-0 py-0.5 rounded text-white">
              <FaIndianRupeeSign className="pt-0.5" />
              46,432
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[40px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div>
          <div className="flex relative bottom-[15px] left-[29vh] gap-0 bg-[#425077] rounded-2xl w-[100px] h-15 items-center justify-center border-[10px] border-[#221D54] px-2">
            <div className="bg-[#CBFF04] text-black px-3 py-2 rounded-[8px] text-sm font-medium shadow-[-20px_15px_50px_-2px_#CBFF04]">
              <FaIndianRupeeSign />
            </div>
            <div className="bg-transparant border-2 border-[#5f4ef724] text-white px-3 py-1 rounded-[5px] text-sm font-medium">
              %
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-1 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[20px] bg-white/40 mr-[0px]"></div>
          <div className="mt-1 mb-0 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between h-16">
          <div className="flex-col justify-center items-center text-gray-700 font-semibold text-sm text-white">
            <div className="pb-2 mt-5 text-[#CBFF04] text-[20px]">Relince</div>
            <div className="flex flex-row">
              <div className="pt-1 pr-0">
                <BiSolidUpvote className="text-[#CBFF04]" />
              </div>
              <div className="flex items-center gap-0 text-sm">
                <FaIndianRupeeSign className="pt-0.5" />
                56,212
              </div>
            </div>
          </div>
          <div className="bg-[#25292A] bg-transparent w-24 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Best Trade
          </div>
          <div className="flex flex-col text-gray-700 font-semibold text-sm text-white">
            <div className="pl-3 mt-12 pt-2 text-[#CBFF04] text-[20px]">
              NIFTY
            </div>
            <span className="text-[8px] text-[#CBFF04] text-center pl-2">
                APR FUT
              </span>
            <div className="flex flex-row">
              <div className="pt-1 pl-2">
                <BiSolidUpvote className="text-[#CBFF04]" />
              </div>
              <div className="flex items-center gap-0 text-sm pb-14 py-0.5 rounded text-white">
                <FaIndianRupeeSign className="pb-0" />
                46,432
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[20px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff12] shadow-lg rounded-2xl">
        <div>
          <div className="flex relative bottom-[15px] left-[29vh] gap-0 bg-[#493DB6] rounded-2xl w-[100px] h-15 items-center justify-center border-[10px] border-[#3F359D] px-2">
            <div className="bg-[#40359B] text-white px-3 py-2 rounded-[8px] text-sm font-medium">
              <FaIndianRupeeSign />
            </div>
            <div className="bg-transparant border-2 bg-[#CBFF04] shadow-[20px_15px_50px_-2px_#CBFF04] border-[#5f4ef724] text-black px-3 py-1 rounded-[5px] text-sm font-medium">
              %
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-1 ml-5 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[20px] bg-white/40 mr-[0px]"></div>
          <div className="mt-1 mr-6 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between h-16">
          <div className="flex-col justify-center items-center text-gray-700 font-semibold text-sm text-white">
            <div className="pb-2 mt-5 text-[#CBFF04] text-[20px]">ADANIGREEN</div>
            <div className="flex flex-row">
              <div className="pt-1 ml-8">
                <BiSolidDownvote className="text-red-500" />
              </div>
              <div className="flex gap-0 text-sm">
                12%
              </div>
            </div>
          </div>
          <div className="bg-[#25292A] bg-transparent w-28 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Worst Trade
          </div>
          <div className="flex flex-col text-gray-700 font-semibold text-sm text-white">
            <div className="pl-3 mt-12 pt-2 text-[#CBFF04] text-[20px]">
              BANKNIFTY
            </div>
            <span className="text-[8px] text-[#CBFF04] text-center pl-2">
                Mar 50300PE
              </span>
            <div className="flex flex-row">
              <div className="pt-1 ml-10">
                <BiSolidDownvote className="text-red-500" />
              </div>
              <div className="flex pl-0 gap-0 text-sm pb-14 py-0.5 rounded text-white">
                40%
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[20px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff12] shadow-lg rounded-2xl">
        <div>
          <div className="flex relative bottom-[15px] left-[29vh] gap-0 bg-[#425077] rounded-2xl w-[150px] h-15 items-center justify-center border-[10px] border-[#221D54] px-2">
            <div className="bg-[#CBFF04] text-black px-4 py-2 rounded-[8px] text-sm font-medium shadow-[-20px_15px_50px_-2px_#CBFF04]">
              Days
            </div>
            <div className="bg-transparant border-2 border-[#5f4ef724] text-white px-3 py-1 rounded-[5px] text-sm font-medium">
              Trades
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-1 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[20px] bg-white/40 mr-[0px]"></div>
          <div className="mt-1 mb-0 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between h-16">
          <div className="flex-col justify-center items-center text-gray-700 font-semibold text-sm text-white">
            <div className="pb-2 mt-5 ml-3 text-[#CBFF04] text-[40px]">25</div>
              <div className="flex pl-4 mt-2 gap-0 text-sm">
                Days
            </div>
          </div>
          <div className="bg-[#25292A]  w-36 px-3 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Winning Streak
          </div>
          <div className="flex flex-col text-gray-700 font-semibold text-sm text-white">
             <div className="pb-2 mt-5 mr-4 text-[#CBFF04] text-[40px]">3</div>
              <div className="flex pr-5 mt-2 gap-0 text-sm">
                Days
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[20px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl">
        <div>
          <div className="flex relative bottom-[15px] left-[29vh] gap-0 bg-[#425077] rounded-2xl w-[150px] h-15 items-center justify-center border-[10px] border-[#221D54] px-2">
            <div className="bg-[#CBFF04] text-black px-4 py-2 rounded-[8px] text-sm font-medium shadow-[-20px_15px_50px_-2px_#CBFF04]">
              Days
            </div>
            <div className="bg-transparant border-2 border-[#5f4ef724] text-white px-3 py-1 rounded-[5px] text-sm font-medium">
              Trades
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-1 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[20px] bg-white/40 mr-[0px]"></div>
          <div className="mt-1 mb-0 w-16 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between h-16">
          <div className="flex-col justify-center items-center text-gray-700 font-semibold text-sm text-white">
            <div className="pb-2 mt-5 ml-3 text-[#CBFF04] text-[40px]">20</div>
              <div className="flex pl-4 mt-2 gap-0 text-sm">
                Days
            </div>
          </div>
          <div className="bg-[#25292A] w-36 px-3 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Lossing Streak
          </div>
          <div className="flex flex-col text-gray-700 font-semibold text-sm text-white">
             <div className="pb-2 mt-5 mr-4 text-[#CBFF04] text-[40px]">2</div>
              <div className="flex pr-5 mt-2 gap-0 text-sm">
                Days
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[20px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl border-transparent border-2">
        <div className="flex items-center justify-between">
          <div className="mt-10 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[40px] bg-white/40 mr-[0px]"></div>
          <div className="mt-10 w-16 pl-0.5 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row pl-2.5 text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1 pr-0">
              <BiSolidDownvote className="text-red-500" />
            </div>
            <div className="flex items-center gap-0 text-sm text-white">
              6%
            </div>
          </div>
          <div className="bg-[#25292A] w-30 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Avg % Return
          </div>
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="pt-1.5 pl-2">
              <BiSolidUpvote className="text-[#A1FA4F]" />
            </div>
            <div className="flex items-center gap-0 text-sm px-0 py-0.5 pr-2 rounded text-white">
              23%
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[40px] bg-white/40 mb-0"></div>
        </div>
      </div>
      <div className="w-full mx-auto p-6  pt-0 pb-2 bg-[#ffffff13] shadow-lg rounded-2xl border-transparent border-2">
        <div className="flex items-center justify-between">
          <div className="mt-10 w-16 text-[10px]">Equity</div>
          <div className="w-[1px] h-[40px] bg-white/40 mr-[0px]"></div>
          <div className="mt-10 w-16 pl-0.5 text-[10px]">F&O</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-row pl-2.5 text-gray-700 font-semibold text-sm text-white">
            <div className="flex items-center pl-3 gap-0 text-sm text-white">
              20
            </div>
          </div>
          <div className="bg-[#25292A] w-30 px-4 py-1 rounded-[8px] text-sm pt-1 mt-1 ml-6">
            Total Trades
          </div>
          <div className="flex flex-row text-gray-700 font-semibold text-sm text-white">
            <div className="flex items-center gap-0 text-sm pr-5 px-0 py-0.5 rounded text-white">
              278
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-0">
          <div className="w-[1px] h-[40px] bg-white/40 mb-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
