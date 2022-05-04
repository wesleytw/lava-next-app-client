import { shortenAddress } from "../src/utils/shortenAddress";
import { useMoralis, useNFTBalances } from "react-moralis";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components";

const Account = () => {
	const style = {
		cardWapper: 'transition: transform 0.6s ease 0.1s; transform-style: preserve-3d; width: 224.36px; height: 312px;'
	}
	const { account, isAuthenticated, authenticate, isAuthenticating, logout, user } = useMoralis();
	const { getNFTBalances, data } = useNFTBalances();

	useEffect(() => {
		console.log('isAuthenticated?', isAuthenticated)
		if (!isAuthenticated) return
		getNFTBalances({
			params: {
				chain: "rinkeby",
				address: user.get('ethAddress')
			}
		})
	}, [isAuthenticated])
	return (
		<>
			{/* px-28 pt-28 md:px-56 md:py-8 lg:px-96 lg:py-16 */}
			{/* bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer */}
			<Navbar />
			<div className="w-screen mt-0 pt-40 px-5 overflow-y-auto flex flex-wrap select-none ">
				{data && data.result.map(nft => (
					<>
						<div className="w-full md:w-1/3 lg:w-1/4 p-4 flex-shrink-0 relative">
							<div className="w-full m-auto">
								<div className="max-full m-1 mb-16 rounded-3xl hover:shadow-lg items-center border-[1px] border-slate-200">
									<div className="card-wrap relative select-none m-auto outline-none " >
										<div className="h-full py-3 flex flex-col">
											<div className="text-center px-2">
												<p className="text-black text-xl font-bold truncate">
													{`${nft.name}`}
												</p>
												<p className="text-black text-l truncate">
													#{`${nft.token_id}`}
												</p>
											</div>
											{/* <div className="max-full m-8 mb-16 rounded-lg shadow-lg items-center"> */}
											{nft.image && <img className=" object-contain w-full h-48 rounded" src={nft.image} alt={nft.name} />}
											<div className="px-6 py-4 ">
												{/* <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 break-words truncate">{`${nft.name}`} </h4> */}
												<p className="leading-normal text-gray-700 flex-wrap truncate">{`${shortenAddress(nft.owner_of)}`}</p>
											</div>
										</div>
										<div className="px-6 relative mt-1"><div class="block"><p class="text-gray-800 text-xs">On sale</p><div class="text-gray-700 text-2xl"><div class="flex items-baseline space-x-1"><div class="truncate">6.9 Ⓝ</div><div class="text-xs text-gray-500 truncate">~ $83.15</div></div></div></div><div class="flex justify-between md:items-baseline"><p class="font-bold text-white cursor-pointer hover:opacity-80 text-base md:text-base mb-1 md:mb-0">Buy Now</p><a class="text-gray-500 underline text-sm md:text-sm" href="/token/x.paras.near::145332">See Details</a></div></div>
									</div>
									{/* </div> */}
								</div>
							</div>
						</div>
					</>
				))}
				{data && console.log(data.result)}
			</div>

		</>
	)


}

export default Account



