export default {
  ChainId: 250,
  name: "Fantom",
  blockExplorerName: "Fantom",
  blockExplorerUrl: "https://ftmscan.com/",
  rpcUrls: [
    "https://rpc.ankr.com/fantom/",
    "https://rpc.fantom.network",
  ],
  userExplorerUrl: "https://ftmscan.com/", // TODO add link
  Contracts: {
    Comptroller: "...", // TODO add address
    PriceOracle: "...", // TODO add address
  },
  Tokens: {
    ETH: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
      //   address: eth has no address
      address: "eth_has_no_address...duh", // TODO Fix it
      icon: "/images/coin-icons/ethereum.svg", // TODO Fix it
      priceDecimals: 18, // TODO Fix it
      cToken: {
        name: "tETH",
        symbol: "tETH",
        decimals: 8,
        address: "0x7C0beDaF3aD27E50dF2810B4611B5222e12696Dc",
      }, // TODO Fix it
    },
  },
};
