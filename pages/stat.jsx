import React, { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralis, useNFTBalances, Moralis } from "react-moralis";


const fetchTokenIdMetadata = () => {

   

	const Web3Api = useMoralisWeb3Api();
	const { account, isAuthenticated, authenticate, isAuthenticating, logout, user } = useMoralis();
	const { getNFTBalances, data } = useNFTBalances();

	//
	let demoAccount = "0x2369B8b01d0aC861027db6D53641856ffAeF3C6C"
	// 
	const options = {
		address: "0x7de3085b3190b3a787822ee16f23be010f5f8686",
		token_id: "1",
		chain: "eth",
	};
	useEffect( async () => {
		console.log('isAuthenticated?', isAuthenticated)
		getNFTBalances({
			params: {
				chain: "rinkeby",
				address: demoAccount
			}
		})
		// const tokenIdMetadata = await Web3Api.token.getTokenIdMetadata(options);
	}, [])

	// const fetchNFTs = async () => {
	// 	console.log("fetchNFTs...");
	// 	// const tokenIdMetadata = await Web3Api.token.getTokenIdMetadata(options);
	// 	// console.log(tokenIdMetadata);
	// };
  const fetchNFTs = async () => {
    console.log("fetchNFTs...");
    const userNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "rinkeby",
      address: "0x2369B8b01d0aC861027db6D53641856ffAeF3C6C",
    });
    console.log(userNFTs.result);
  };

	console.log("start...");
	fetchNFTs();
	return (
		<p>
			www
		</p>
	)
}

export default fetchTokenIdMetadata