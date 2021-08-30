require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rifle stick million grace depth equal gaze'; 
let testAccounts = [
"0x38389051fa899a91aa7ddd10fcc9c0efe4f2a4903e866cce8efd06e6ec2d8ee8",
"0xc6dc82de3899abe66c241dfd15ac9bd62c0cbf2801de8842b4ee314bd251306d",
"0xf28ecde14e0d5e000bab85187cf8ec9388bc1eab7fa841b501b01797f02d0bf3",
"0x7973fae1fbc99a184a9278e06ac487141d0adbcb7a85e184a1cc3cbaa3d43452",
"0x825907e09fd9ae257a8af9853b23d94984719ab3947ed38f2f4fff1d62b62d35",
"0x00652fd4cc84797aea8979d4c78b9e80ba7195f90784823f3b2a7cb97f109e1a",
"0x2fcd53ed289d3a49a236e30a79185af0b81fbcce3b7e7c80959999861a7cefca",
"0x21f7c10dabc8afcdd5c2e4f1bd263faae68db4f35375cf8483d74243643bbc01",
"0x94243a8d876f48ebf41bcc2d2c33ffc98b7a2664079b721c00e46637981f192c",
"0x31548cd3a7d817197c0661ec94e15e39fa62e9882053c0d50668ff300693b267"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

