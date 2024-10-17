import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    Keypair,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
}

// const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
const senderKeypair = Keypair.fromSecretKey(new Uint8Array([47, 218, 37, 133, 91, 145, 192, 208, 223, 246, 233, 246, 115, 173, 218, 221, 70, 23, 121, 232, 106, 146, 184, 221, 183, 126, 97, 123, 38, 168, 69, 19, 170, 191, 154, 233, 60, 31, 115, 134, 10, 187, 75, 31, 186, 227, 208, 218, 190, 248, 68, 177, 80, 181, 125, 68, 68, 112, 112, 150, 189, 201, 92, 226])); // Thay thế với khóa riêng của bạn


console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
console.log(`senderKeypair: ${senderKeypair.publicKey}`);

const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 1;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
]);

console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
);
console.log(`Transaction signature is ${signature}!`);