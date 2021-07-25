require('@nomiclabs/hardhat-waffle');

const projectId = '39306eb2a19b490396f8244a16fd4c45';
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
