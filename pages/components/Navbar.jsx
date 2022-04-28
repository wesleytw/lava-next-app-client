import React, { useContext, useRef, useState }from "react";
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";

import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'


import { shortenAddress } from "../../src/utils/shortenAddress";
import { useMoralis } from "react-moralis";
// import Identicon from "../components/Identicon";
const style = {
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-black px-4 font-semibold text-[#000000] hover:text-[#2952e3] cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-[#2952e3] cursor-pointer`,
}
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer hover:text-[#1256bd] ${classprops}`}>
  {/* <a className={`mx-4 cursor-pointer hover:text-[#1256bd] ${classprops}`} href = " '/login-web3/pages/' + '/title'">{title}</a> */}
  {title}
  </li>
);


const Navbar = () => {
  const { account, isAuthenticated, authenticate, isAuthenticating, logout, user } = useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Login LAVA🌋" })
        .then(function (user) {
          console.log("logged in user:", user);
          
          console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
      console.log(error);
      });
    }
  };
  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  // const {account} = useContext(ConnectMoralis);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  // fixed bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex
  // fixed w-full flex md:justify-center justify-between items-center p-4
  

  return (
    <nav className="fixed bg-[#ffffff] w-full md:justify-center justify-between items-center p-4 flex shadow">
      <div className={`md:flex-[0.5] flex-initial justify-center items-centercursor-pointer`}>
        <Link href="/" className={` ml-[0.8rem] text-black font-bold font-mono text-3xl`} >
          <a>
            LAVA🌋
          </a>
        </Link>
      </div>
      <div className={style.headerItems}>
        <Link href="/" className={style.headerItem} > Market </Link>
        <Link href="/account" className={style.headerItem} > Account </Link>
        <Link href="/" className={style.headerItem} > Stats </Link>
        <div className={style.headerItem}> Create </div>
      </div>

  
      <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial font-semibold">
        {/* {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        {!isAuthenticated && (
        <button onClick={login} className="bg-[#2952e3] text-sm py-2 px-4 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] shadow text-white">
          Connect Wallet
        </button>
        )} 
        {isAuthenticated && (
          // <button onClick={logOut} className="bg-[#2952e3] text-sm py-2 px-4 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] shadow text-white">
          //   {shortenAddress(user.get("ethAddress"))}
          // </button>
          <li>
            <div className="mx-4 cursor-pointer hover:text-[#1256bd] text-black md:flex hidden list-none flex-row justify-between items-center flex-initial underline">

            <div className="mx-1 w-4 h-4 rounded-full border border-[#000000] flex justify-center items-center">
                <SiEthereum fontSize={10} color="#000" />
              </div>
            <p >
              {/* <div className="mx-1 w-4 h-4 rounded-full border border-black flex justify-center items-center">
                <SiEthereum fontSize={10} color="#000000" />
              </div> */}
              {shortenAddress(user.get("ethAddress"))}
            </p>
            </div>
          </li>

        // {/* <Identicon /> */}

        )} 
        {isAuthenticated && (
          <div>
            <button onClick={logOut} className="bg-[#2951e300] text-sm py-2 px-4 mx-4 rounded-full cursor-pointer hover:bg-[#ff000038] shadow eth-card ">
            <IoLogOutOutline  color="#fff" size="17"/>
            </button>
          </div>
        )} 
      </ul>

      
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 "><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}

      </div>
    </nav>
    
  );
};

export default Navbar;


// ////opensea clone
// const style = {
//   wrapper: `fixed bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
//   logoContainer: `flex items-center cursor-pointer`,
//   logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
//   searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
//   searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
//   searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
//   headerItems: ` flex items-center justify-end`,
//   headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
//   headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
// }
// const Navbar = () => {
//   return (
//     <div className={style.wrapper}>

//       <div className={style.searchBar}>
//         <div className={style.searchIcon}>
//           <AiOutlineSearch />
//         </div>
//         <input
//           className={style.searchInput}
//           placeholder="Search items, collections, and accounts"
//         />
//       </div>
//       <div className={style.headerItems}>

//         <div className={style.headerItem}> Stats </div>
//         <div className={style.headerItem}> Resources </div>
//         <div className={style.headerItem}> Create </div>
//         <div className={style.headerIcon}>
//           <CgProfile />
//         </div>
//         <div className={style.headerIcon}>
//           <MdOutlineAccountBalanceWallet />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar;