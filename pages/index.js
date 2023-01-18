// import { useState, useEffect } from "react";
// import { Magic } from "magic-sdk";
// import { ConnectExtension } from "@magic-ext/connect";
// import Web3 from "web3";
// import { toast } from 'react-toastify';
// import axios from "axios";
// // import {useRouter} from 'next/router';
export default function Home() {
  return (
    <div>
      WRONG URL
    </div>
  )
}
// export default function Home() {
//   const [valid, setValid] = useState("NA");
//   const [account, setAccount] = useState(null);
//   const [NFT, setNFT] = useState("");
//   // const router = useRouter()
//   let magic, web3;
  
//   // const data = {
//   //   "CONTRACT_ADDRESS" : "0x25157ee83975203a89f61a5860159da869bcef19",
//   //   "NFT_NAME" : "Yuvan NFT ticket "
//   // }
//   const data2 = JSON.parse(atob('eyJDT05UUkFDVF9BRERSRVNTIiA6ICIweDI1MTU3ZWU4Mzk3NTIwM2E4OWY2MWE1ODYwMTU5ZGE4NjliY2VmMTkiLCJORlRfTkFNRSIgOiAiWXV2YW4gTkZUIHRpY2tldCAifQ=='));

//   const CONTRACT_ADDRESS = data2.CONTRACT_ADDRESS;
//   const NFT_NAME = data2.NFT_NAME;
  
//   const bg = valid === "NA" ? "flex flex-col bg-black text-slate-100 h-screen items-center justify-center text-center " :
//     (valid === "Valid" ?
//       "flex flex-col bg-green-300 text-slate-100 h-screen items-center justify-center text-center " :
//       "flex flex-col bg-red-400 text-slate-100 h-screen items-center justify-center text-center ");

//   const login = async () => {
//     web3.eth
//       .getAccounts()
//       .then((accounts) => {
//         setAccount(accounts?.[0]);
//         toast.success('User Successfully Logged In', {
//           position: "bottom-left",
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           theme: "dark",
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//         });
//       })
//       .catch((error) => {
//         toast.error(error.message, {
//           position: "bottom-left",
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           theme: "dark",
//           pauseOnHover: false,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//   };
//   const disconnect = async () => {
//     await magic.connect.disconnect().then(res => toast.success('User Logged out', {
//       position: "bottom-left",
//       autoClose: 3000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       theme: "dark",
//       pauseOnHover: false,
//       draggable: true,
//       progress: undefined,
//     })).catch((e) => {
//       toast.error(e.message, {
//         position: "bottom-left",
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         theme: "dark",
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//       });
//     });
//     setAccount(null);
//     setValid("NA")
//   };
//   const check = () => {
//     const baseURL = `https://polygon-mumbai.g.alchemy.com/v2/aTuU6E5SYQgEFmhg73GOMklTrzLK5bw6`;
//     const url = `${baseURL}/getNFTs/?owner=${account}`;
//     const config = {
//       method: 'get',
//       url: url,
//     };
//     axios(config).then(response => 
//       {
//         console.log(account)
//         console.log(response.data.ownedNfts);
//         // setValid("Valid")
//         // if(Math.random() > 0.5) {
//         //   setValid("Valid")
//         // }
//         // else {
//         //   setValid("Invalid")
//         // }
//         console.log(data2)
//         console.log(typeof data2)
//         for (let i = 0; i < response.data.ownedNfts.length; i++) {
//           console.log(response.data.ownedNfts[i].contract.address , response.data.ownedNfts[i].metadata.name);
//           if (response.data.ownedNfts[i].contract.address === CONTRACT_ADDRESS && response.data.ownedNfts[i].metadata.name === NFT_NAME) {
//             console.log("valid")
//             setValid("Valid")
//             setNFT(response.data.ownedNfts[i].media.gateway)
//             break
//           }
//           else {
//             console.log("invalid")
//             setValid("Invalid")
//           }
//         }
//     }).catch(error => console.log('error', error));
//   }
//   useEffect(() => {
//     magic = new Magic("pk_live_73AAE8A5F81B1CF3", {
//       network: "rinkeby",
//       locale: "en_US",
//       extensions: [new ConnectExtension()],
//     });
//     web3 = new Web3(magic.rpcProvider);
//   });


//   return (
//     <div className={bg}>
//       {
//         account && (
//           <>
//             <p className={valid !== "NA" ? "text-xl font-bold text-black" : "text-xl font-bold text-white"} onClick={() => console.log(account)}>Wallet :
//               <span className="contents md:hidden">{account.slice(0, 4)}...{account.slice(38)}</span>
//               <span className="hidden md:contents"> {account}</span>
//             </p>
//             {
//               valid === "NA" ? 
//               <button
//               className="w-40 px-4 py-2 text-white bg-blue-500 border border-gray-400 rounded-md hover:bg-blue-700"
//               onClick={check}
//             >
//               Check
//             </button> :
//                 (valid === "Valid" ?
//                   <><span className="text-9xl">✅<br /><p className="p-5 text-xl font-bold text-black" >{valid}</p></span></> :
//                   <><span className="text-9xl">❌<br /><p className="p-5 text-xl font-bold text-black" >{valid}</p></span></>)
//             }
//             <button
//               className="w-40 px-4 py-2 text-white bg-black border border-gray-100 rounded-md hover:bg-black"
//               onClick={disconnect}
//             >
//               Sign Out
//             </button>
//           </>
//         )

//       }
//       {!account && (
//         <button
//           type="submit"
//           className="w-40 px-4 py-2 text-white bg-blue-500 border border-gray-400 rounded-md hover:bg-blue-700"
//           onClick={login}
//         >
//           Sign In
//         </button>
//       )}
//     </div>
//   )
// }
