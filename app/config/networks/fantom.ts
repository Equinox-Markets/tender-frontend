export default {
  ChainId: 250,
  name: "Fantom",
  blockExplorerName: "Fantom",
  blockExplorerUrl: "https://ftmscan.com",
  secondsPerBlock: 1, // 1
  rpcUrls: ["https://rpcapi.fantom.network"],
  userExplorerUrl: "https://ftmscan.com/address/",
  graphUrl: "https://gateway-arbitrum.network.thegraph.com/api/063a2dcfd5d957670864cbe96174e598/subgraphs/id/EN8psujv6UbDVRMs4S1ZcAwWPcQ3ZU2VUk5tj81aaoSk",
  Contracts: {
    Comptroller: "0xaeCc8D03213A2cb39153Eea18B9ab2bB1aB9182b",
    //Comptroller: "0xaeCc8D03213A2cb39153Eea18B9ab2bB1aB9182b",
    PriceOracle: "0x694c23A52827D0349378A4d280956aF98BcA20CF",
    //Maximillion: "0x",
    //interestratemodel: "0x03c2cbB77ba3db103456FE401FEA7A6B52468617",
    //Unitroller: "0x330D4A50630ad2b85Aa8046780A8653b6ef6A98d"
  },
  Tokens: {
    FTM: {
      name: "WFTM",
      symbol: "WFTM",
      decimals: 18,
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", // Wrapped fantom Address
      icon: "/images/ico/fantom_network.png",
      cToken: {
        name: "eFTM",
        symbol: "eFTM",
        decimals: 8,
        address: "0x32572d9c9291b1B7C5eAC0040af86FfBe1461082", //CERC20 Immutable Contract
        isVault: false,
      },
    },
    ETH: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
      address: "0x695921034f0387eAc4e11620EE91b1b15A6A09fE", // Wrapped Ethereum Address
     icon: "/images/coin-icons/ethereum.svg",
     cToken: {
        name: "eETH",
        symbol: "eETH",
        decimals: 8,
        address: "0x29b48f04732e02Ec0afEb3Ee4Ec6CdB2D8e1fF56", //CERC20 Immutable Contract
        isVault: false,
      },
    },
    BTC: {
      name: "BTC",
      symbol: "BTC",
      decimals: 8,
      address: "0xf1648C50d2863f780c57849D812b4B7686031A3D", // Wrapped Bitcoin Address
      icon: "/images/coin-icons/bitcoin.svg",
      cToken: {
        name: "eWBTC",
        symbol: "eWBTC",
        decimals: 8,
        address: "0x70C566c5e71da54A8F5afc7fc598920D6f5dE206", //CERC20 Immutable Contract
        isVault: false,
      },
    },
    USDC: {
      name: "USDC",
      symbol: "USDC",
      decimals: 6,
      address: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf", // USDC Address
      icon: "/images/coin-icons/usdc.svg",
      cToken: {
        name: "eUSDC",
        symbol: "eUSDC",
        decimals: 8,
        address: "0x745CF370167C41efb7179d8A3a819711e79437B9", //CERC20 Immutable Contract
        isVault: false,
      },
    },

  },
};
