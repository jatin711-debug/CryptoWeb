https://eth-ropsten.alchemyapi.io/v2/TTivLyDdz0lAcxVqRRZRh9nrNOi-YjcB

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TTivLyDdz0lAcxVqRRZRh9nrNOi-YjcB',
      accounts: ['b2d728eb574512094a78347707404b8e732e55a0b6f95729350b8edcc9d091ab'],
    },
  },
};