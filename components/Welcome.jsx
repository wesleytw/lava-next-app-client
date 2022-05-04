//_rfce 
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Welcome = () => {

  return (
    <div className="gradient-bg-welcome">
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 mt-40 mb-40">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 py-4">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-4">
              LAVA NFT
            <br /> Rental Protocol
          </h1>
            <p className="text-left mt-5 text-[#505050] font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          </div>

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 py-4">
            <div className="p-3 flex justify-center items-center flex-col rounded-xl h-50 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <p className="text-white font-semibold text-lg">
                  LAVA is now Live on Rinkeby Testnet
                </p>
                <p className="text-white font text-sm mt-2">
                  Every NFT collection live on the Rinkeby Test Network is supported.
                </p>
                <a href={`https://wesleytw.github.io/epic-nft-dist/`} target="_blank" rel="noreferrer">
                  <p className="text-white font-semibold text-sm mt-9 underline cursor-pointer" href="https://code.visualstudio.com/docs/supporting/troubleshoot-terminal-launch">
                    Rinkeby NFT Faucet↗︎
                  </p>
                </a>
                {/* <BsArrowUpRightSquare fontSize={20} className="text-black md:hidden cursor-pointer" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}
export default Welcome;
