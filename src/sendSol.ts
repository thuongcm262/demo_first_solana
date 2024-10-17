import {
    LAMPORTS_PER_SOL,
    SystemProgram,
    Transaction,
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
    sendAndConfirmTransaction,
  } from "@solana/web3.js";
  import * as fs from "fs";
  
//   const sendSol = async (
//     sender: Keypair,
//     recipient: string,
//     amount: number
//   ) => {
//     const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  
//     const transaction = new Transaction();
  
//     const sendSolInstruction = SystemProgram.transfer({
//       fromPubkey: sender.publicKey,
//       toPubkey: new PublicKey(recipient),
//       lamports: LAMPORTS_PER_SOL * amount,
//     });
  
//     transaction.add(sendSolInstruction);
  
//     // Chữ ký giao dịch
//     const signature = await connection.sendTransaction(transaction, [sender]);
//     console.log(`Transaction signature: ${signature}`);
//   };
//     const connection = new Connection(clusterApiUrl("devnet"));
//     const sender = new PublicKey("A7JW7U72LNKU3mKk3WgYrUdtC7fdF3vrrgVXesdjqr7e");
//     const recipient = new PublicKey("A7JW7U72LNKU3mKk3WgYrUdtC7fdF3vrrgVXesdjqr7e");
//     const amount = 1

//     const transaction = new Transaction();
 
// const sendSolInstruction = SystemProgram.transfer({
//   fromPubkey: sender,
//   toPubkey: recipient,
//   lamports: LAMPORTS_PER_SOL * amount,
// });
 
// transaction.add(sendSolInstruction);

// const signature = sendAndConfirmTransaction(connection, transaction, [
//     senderKeypair,
//   ]);
  
  // Sử dụng hàm sendSol
//   (async () => {
//     // Đọc private key từ tệp JSON
//     const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync("my-wallet.json", "utf-8")));
//     const sender = Keypair.fromSecretKey(secretKey);
  
//     // Địa chỉ ví người nhận
//     const recipient = "Địa chỉ ví người nhận ở đây";
  
//     // Số lượng SOL để gửi
//     const amount = 0.1; // Ví dụ: gửi 0.1 SOL
  
//     await sendSol(sender, recipient, amount);
//   })();
  