require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind assault hunt kiwi blue shield'; 
let testAccounts = [
"0x27bc082d88336b876435ccf1e78b32644d58b2a27b5180e5f973cb3a2de536cb",
"0x37b261dfcf7ea86de4a76b068b62c3e844f232ddcb6d430d0e07c66fe02fd057",
"0x3ebaa4d17d85d6a70347cd04d469c18402720ce951e67ea001f3eb2747712b1d",
"0xab322311cf3cce5e71c340d37ed1ab31a389a4130186bb83a8ded86f0882665b",
"0x886590a021aa42caaffce7226452f81139672bf81e5f01b8e3daeadc6c9bdf4d",
"0xf56bdfee1a3ba594c751a58b0f1fff289bea1cedaeb5233785f3c59ebd1b6c86",
"0xf7b9564a34e556359ff3aa2e3218e3d5f50f9823db064e2145ad19d973380b40",
"0xd643ca30168433c6c418479fbf3d26f5bde04d90050ddb19daf01078437ba543",
"0x92b5087affeb1c25fe9fc4c81e37d5fb297f0253be9313b6ac9c9b1f0ff5ebd8",
"0xa5b8f2e6e69f4604e202b6778498388f0d9062b3efb68c310de22a16d7254b5d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


