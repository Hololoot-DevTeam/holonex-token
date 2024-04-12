import { waffle } from "hardhat";
import { expect } from "chai";
import { Wallet, BigNumber } from "ethers";

import HoloNEXTokenArtifacts from "../artifacts/contracts/HoloNEX.sol/HoloNEX.json";
import { HoloNEX } from "../typechain";
import { getBigNumber } from "./utilities";

const { provider, deployContract } = waffle;

describe("HoloNEX ERC20", () => {
  const [deployer] = provider.getWallets() as Wallet[];

  let nexlToken: HoloNEX;

  const ONE_HUNDRED_MILLION_TOKENS: BigNumber = getBigNumber(100_000_000);

  async function makeSUT() {
    return (await deployContract(deployer, HoloNEXTokenArtifacts, [])) as HoloNEX;
  }

  beforeEach(async () => {
    nexlToken = await makeSUT();
  });

  it("should initialize as expected", async function () {
    const _nexlToken = await makeSUT();
    expect(await _nexlToken.name()).to.be.equal("NEXL");
    expect(await _nexlToken.symbol()).to.be.equal("NEXL");
    expect(await _nexlToken.decimals()).to.be.equal(18);
    expect(await _nexlToken.totalSupply()).to.be.equal(ONE_HUNDRED_MILLION_TOKENS);
  });

  it("should distribute tokens correctly", async function () {
    expect(await nexlToken.balanceOf(deployer.address)).to.be.equal(ONE_HUNDRED_MILLION_TOKENS);
  });
});
