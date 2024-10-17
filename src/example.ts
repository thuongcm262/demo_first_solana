// import { Connection, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// console.log(connection)
// console.log(`✅ Connected!`);

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("A7JW7U72LNKU3mKk3WgYrUdtC7fdF3vrrgVXesdjqr7e");
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`✅ Finished!`);

// import {
//     Connection,
//     PublicKey,
//     clusterApiUrl,
//     LAMPORTS_PER_SOL,
// } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey("2k7bMLHVUumJ6EQ82YhDoDRCU9yiAS6H4L5xomc6ZyHH");
// const balance = await connection.getBalance(address);
// const balanceInSol = balance / LAMPORTS_PER_SOL;

// console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
// console.log(`✅ Finished!`);

