import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 10000);
    alert(`Airdropped ${amount} SOL`);
  }

  return <div>
    <input id="publicKey" type="text" placeholder="Amount"></input>
    <button onClick={sendAirdropToUser}>Request Airdrop</button>
  </div>
}
