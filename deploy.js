import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

async function main() {
  const wsProvider = new WsProvider("wss://rococo-rpc.polkadot.io");
  const api = await ApiPromise.create({ provider: wsProvider });

  const keyring = new Keyring({ type: "sr25519" });
  const alice = keyring.addFromUri("//Alice");

  console.log("Deploy listo, cuenta de Alice:", alice.address);
}

main().catch(console.error);
