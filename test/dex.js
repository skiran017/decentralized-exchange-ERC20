const Dai = artifacts.require('mocks/Dai.sol');
const Bat = artifacts.require('mocks/Bat.sol');
const Zrx = artifacts.require('mocks/Zrx.sol');
const Rep = artifacts.require('mocks/Rep.sol');
const Dex = artifacts.require('Dex.sol');

contract('Dex', () => {
  let dai, bat, rep, zrx;

  beforeEach(async () => {
    [dai, bat, rep, zrx] = await Promise.all([
      Dai.new(),
      Bat.new(),
      Rep.new(),
      Zrx.new(),
    ]);
    const dex = await Dex.new();
  });
});
