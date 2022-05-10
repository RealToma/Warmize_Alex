const IS_MAINNET = process.env.REACT_APP_NETWORK === 'mainnet';

const CONTRACTS = IS_MAINNET
  ? {
    WARMIZ_TOKEN: '0x4E7442132eBCA4a6e1Ab15764082B3CBB384DE93',
    WARMIZ_ETOKEN: '0xd199a97C8fD3FBBFdbB446dB77De3DF001FA8EDE',
    WARMIZ_STOKEN: '0x5e4630D999F04e4666E3aCE5e6386ad315B0a71a'
  } : {
    WARMIZ_TOKEN: '0x4E7442132eBCA4a6e1Ab15764082B3CBB384DE93',
    WARMIZ_ETOKEN: '0xd199a97C8fD3FBBFdbB446dB77De3DF001FA8EDE',
    WARMIZ_STOKEN: '0x5e4630D999F04e4666E3aCE5e6386ad315B0a71a'
  }


const HTTP_PROVIDER_URL = IS_MAINNET ? "https://bsc-dataseed.binance.org/" : "https://data-seed-prebsc-1-s1.binance.org:8545/";

export {
  IS_MAINNET,
  CONTRACTS,
  HTTP_PROVIDER_URL
}
