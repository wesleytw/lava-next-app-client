///本來fetch就有問題 可能停止支援了


import { shortenAddress } from "../src/utils/shortenAddress";
import { useMoralis, useNFTBalances } from "react-moralis";
import React, { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { Navbar } from "../components"



const Account = () => {
  const [NFTs, setNFTs] = useState([]);
  const Web3Api = useMoralisWeb3Api();
  const { account, isAuthenticated, authenticate, isAuthenticating, logout, user } = useMoralis();
//GOOOOOD
  const fetchNFTs = async (setNFTs) => {
    console.log("fetchNFTs...");
    const userNFTs = await Web3Api.account.getNFTs({
      chain: "rinkeby",
      address: user.get("ethAddress"),
    });
    console.log(userNFTs.result);
    setNFTs(userNFTs)
  };
//GOOOOOD
  useEffect(() => {
    console.log('isAuthenticated?', isAuthenticated)
    if (!isAuthenticated) return
    fetchNFTs(setNFTs) //把setData當參數傳出去給async
  }, [isAuthenticated])

  return (
    <>
      <Navbar />
      <div className="bg-slate-500 pt-16 pb-40">
        <p>dd</p>
      </div>
{/* GOOOOOD */}
       {/* {NFTs.result && NFTs.result.map(nft => (
          <div>
            <p>{nft.token_address}</p>
            <p>{nft.name}</p>
            <p>{nft.image}</p>
            <img width="100" height="100" src={`${ nft.image }`} /> */}

            {/* {nft.image && 
            <img width="100" height="100" src={`${String( nft.image )}`} />
            } */}
                      {/* <img width="100" height="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHZpZXdCb3g9JzAgMCAzNTAgMzUwJz48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDI0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J2dyZWVuJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGNsYXNzPSdiYXNlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJz5zd2FyZHllbGxvd0NoaW5hPC90ZXh0Pjwvc3ZnPg==" /> */}

            {/* {nft.image && <img src="${nft.image}" />} */}
          {/* </div> */}
         {/* ))}   */}
{/* GOOOOOD */}    

{/* ///test/// */}

          {NFTs.result && 
          NFTs.result.forEach( e => {
            let url = e.token_uri;
            console.log('url', url)
            fetch(url)
            .then(response => response.json())
            .then(data => {
              // data.map(nft => (
              //   <div>
              //     <p>{nft.token_address}</p>
              //     <p>{nft.name}</p>
              //     <p>{nft.image}</p>
              //     <img width="100" height="100" src={`${ nft.image }`} />

              //     {/* {nft.image && 
              //     <img width="100" height="100" src={`${String( nft.image )}`} />
              //     } */}
              //               {/* <img width="100" height="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHZpZXdCb3g9JzAgMCAzNTAgMzUwJz48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDI0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J2dyZWVuJy8+PHRleHQgeD0nNTAlJyB5PSc1MCUnIGNsYXNzPSdiYXNlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJz5zd2FyZHllbGxvd0NoaW5hPC90ZXh0Pjwvc3ZnPg==" /> */}

              //     {/* {nft.image && <img src="${nft.image}" />} */}
              //   </div>
              // ))
              console.log('data', data)
            })
          })
          }
{/* // //test/// */}



        
      {/* ) */}
      
    </>
  )
}

export default Account

// const Account =  () =>{
//   const { account, isAuthenticated, authenticate, isAuthenticating, logout, user } = useMoralis();
//   const {  getNFTBalances, data } = useNFTBalances();
//   const { data: NFTBalances } = useNFTBalances();
//   const Web3Api = useMoralisWeb3Api();
//   // useEffect(()=>{
//   //   getNFTBalances({
//   //     params: {
//   //       chain: "rinkeby",
//   //       address: user.get("ethAddress")
//   //     }
//   //   })
//   // },[])

//   // get all NFTs in the collection
//   // useEffect(() => {
//   //   (async () => {
//   //     const nfts = await Web3Api.Web3API.account.getNFTs({
//   //       chain: "rinkeby",
//   //       address: user.get("ethAddress"),
//   //     });
//   //     setNfts(nfts)
//   //   })()
//   // }, [])


// //   const fetchNFTs = async () => {
// //     const NFTs = await Web3Api.Web3API.account.getNFTs({
// //       chain: "rinkeby",
// //       address: user.get("ethAddress"),
// //     });
// //     console.log(NFTs.result);
// //     return NFTs;
// //   };
//   // const NFTs = fetchNFTs();

//   // console.log("NFTBalances", NFTBalances);
//   return (
//     <div>
//       {isAuthenticated && (
//         <div>
//           <div className=" mx-auto bg-[#ad3a3a] mt-0 md:mt-0 h-screen px-4 py-40">
//             <h1>Account</h1>
//             <p className="bg-white px-4">
//               {shortenAddress(user.get("ethAddress"))}
//             </p>
//             <button onClick={fetchNFTs} className="bg-[#2952e3] text-sm py-2 px-4 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] shadow text-white">
//               show
//             </button>

//             {/* <div className="flex flex-wrap ">
//               {nfts.map((nftItem, id) => (
//                 <NFTCard
//                   key={id}
//                   nftItem={nftItem}
//                   title={collection?.title}
//                   listings={listings}
//                 />
//               ))}
//             </div> */}
//             <p>
//               {/* { NFTBalances } */}
//             </p>
//           </div>
//           <div className=" mx-auto bg-[#ad3a3a] mt-0 md:mt-0 h-screen py-20">
//             <h1>Account</h1>
//           </div>
//         </div>
//       )} 
//     </div>
//   );
// }
// export default Account;

