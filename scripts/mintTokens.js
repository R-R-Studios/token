const utils = require("./utils.js");
require("dotenv").config();
const hre = require("hardhat");
const ethers = hre.ethers;
const deployments = hre.deployments;


const DECIMALS = 18;
const DAO_PRE_MINE = ethers.utils.parseUnits("652560", DECIMALS);
const TEAM_ALLOCATION = {
  "0x1D0c8C3e2Ce611E9D85fBB44F0Ec9eeef2549191" : ethers.utils.parseUnits("500", DECIMALS),
  "0x022Cec2911Dbb3E49e1375B7c9eaa94F5cc7c8Bd" : ethers.utils.parseUnits("500", DECIMALS),
  "0x4aC83585B497D50B7e187919aD85a522A452586e" : ethers.utils.parseUnits("250", DECIMALS),
  "0x5805b9Ef3A7E6b26B8CF1CEa42b06EfE598C526A" : ethers.utils.parseUnits("100", DECIMALS),
  "0xf481f3a48696f1f20679707fed3f680e4a84be0b" : ethers.utils.parseUnits("100", DECIMALS), 
  "0xa2dfA6120e342C2287d613Ca7896A7F34f7bCA56" : ethers.utils.parseUnits("50", DECIMALS), 
  "0x5aFDB0508F34A72139e4fA5F5672fFadee8a5Aa6" : ethers.utils.parseUnits("10", DECIMALS),
}

const PRESEED_ETH_TOTAL = ethers.utils.parseUnits("346.64136978919566665", DECIMALS);
const PRESEED_ETH_CONTRIBUTIONS = {
  "0x01228d70a0980d85a103d9a753707104757f69bc":"0.290657862068965",
  "0x022cec2911dbb3e49e1375b7c9eaa94f5cc7c8bd":"0.0746611574846838",
  "0x02ed20b32d81401fd8ef0346cca966c8708ee848":"0.663745148408105",
  "0x0d1555531622cf39cc623dca214972bd8e587715":"3.06513409961685",
  "0x0d5827544b77ff8ad59d9de52c9d1ddee90a7e9d":"0.460626345940761",
  "0x10d7d39f771c9b564fdd750e0abe37206c961b3d":"0.0945736786411604",
  "0x1200eb4fa3df9903fc6eff1d7a4a5d17502329b2":"0.428439067839407",
  "0x16b9acfd374474fab6cda050896719c8bbd0d70a":"0.24239895897952",
  "0x1c1a6497068a8a0b1dba39420a846a6c12d350e8":"1.16143988416082",
  "0x1de8beb3f82df1bb42cf49599f1aaa6c5049ef9e":"9.76986026811031",
  "0x1f032a27b369299c73b331c9fc1e80978db45b15":"15.7666419072018",
  "0x2021d157d58ad60fb4ff3ba8bd42a447dbf0ecee":"5.31811496283703",
  "0x2067bed542762d26e2755ce7d8776728f3429f48":"0.313832017756376",
  "0x20eadfcaf91bd98674ff8fc341d148e1731576a4":"20.386354152595",
  "0x210115ef28885ad6a692eef218a05670818c6360":"0.127458334991279",
  "0x2399c77ff6fa7d0d182fc75769e47619ef86fe0c":"0.0476671145864755",
  "0x28d804bf2212e220bc2b7b6252993db8286df07f":"46.4113868849049",
  "0x2be830c9c4a3eb3f9ebf736eed948e9ec1f1f33b":"0.418620262632456",
  "0x31926916a7123ca55ed7abefb930591da2a5ea8d":"1.53831372098546",
  "0x3330f2205afc9236c49f5257210187678e8a6285":"5.99243809558343",
  "0x35c3ccbbfcd78f2b3581260c5464a74e58d27049":"1.53256704980842",
  "0x35f105e802da60d3312e5a89f51453a0c46b9dad":"0.0702371995122669",
  "0x368c54973bb89c6419330020fa1a8d67b8c7c544":"0.242422315958248",
  "0x3845b28a99d312199e8821128bf62705bbff0d68":"0.469879888606404",
  "0x3c4067c854bbce9da217032197e4c38601a850b3":"0.306513409961685",
  "0x3fd1ddf28f604cfe5fefa3adc38e38be2f7208d6":"16.7105858157715",
  "0x3fdccd59070d44a1560ac3d6757df197bb087f1e":"0.632271386587207",
  "0x434ded09939b64cd76baa81f9a394283d4c71f05":"0.2",
  "0x4ac25bf2d1cd447ae75659b90a665cc497991daf":"4.35249042145593",
  "0x4d5a7716d0c4eedb7f6b64f89ab7ab383c94d9b9":"0.0772467789770896",
  "0x54574aabd769664935ea3ca1cac48ade40530438":"1.37961685823754",
  "0x54d4a26df1b02020c34a10fb7d1d9bf188dab12b":"0.337005130829907",
  "0x5583bbda575f142993c10a335daf29dc7510e8f2":"0.26937209371002",
  "0x56446712b219fcc34a5604f5e7af5d50d65b6647":"3.65823754789272",
  "0x588a07fdb3ddaff7e32b7fe20828afab7d3387e7":"25",
  "0x5afdb0508f34a72139e4fa5f5672ffadee8a5aa6":"14.3802448861766",
  "0x605daaf43d31b56a0abdcf8aedbd4e9f74723aea":"21.455938697318",
  "0x6106e7b682296e3e67de45df3294a706b36a51a6":"0.508436650753719",
  "0x62151c0e69d03e2fb1f16b7657d12e0f4eff1cee":"0.5",
  "0x633e9aa71802b5b8c003f0022de7c85246cc1a43":"4.62625110962158",
  "0x679b0220d744aa2b5ae994f0a2bc7eed33fc8802":"0.710749862814925",
  "0x6884d601f171fe31fc3d4a1feef65b586fe83406":"1.33243153409473",
  "0x697ccd97c8419ebba7347cef03a0cd02804ebf54":"0.562705260422345",
  "0x6c098683c9d5877c22867b8fa4b59d5d60ac0f3a":"0.3",
  "0x7184a38ce27bffc75c7eb87d8ce847c3f68c583c":"1.99",
  "0x73aa447a8fbb316ba2572e992552eef99fd51e5d":"1.09005839986409",
  "0x7532a9e3e9475337c8a907428e35932a20959fdf":"0.275402022309639",
  "0x7bc952b9622316b3a934fabeaa35bb32ef9b80bb":"1.31",
  "0x7e16d7f1b6056e790eeb3efc03b1015eee5436a1":"2.73771500370685",
  "0x800651c617132512126c6e6809f1ffd5e5c46d89":"0.12152520106259",
  "0x80af73feef1b9d0f2ef230a548d752e7dc984646":"0.00822458681993095",
  "0x81126a84c39ad325c7484bda4afe6048018abc96":"2.61220604677976",
  "0x8740d9ec65b40be5ebb84bd22607e81260fe3a3a":"0.39124088471697",
  "0x894d8502aa32714b2ec0ea6956f26fae3dd2a551":"0.27424763026246",
  "0x8c33f4e49088ac743777fc167a32f56c2eb32291":"1.68859735495692",
  "0x949decf07c83d99ab63b9d68c93ab16cdeed6cfd":"0.0935106590038314",
  "0x95a4350e1cb5e795d3ebe8bee63d9183de5449d1":"5.05115632183908",
  "0x96c53dbe55a62287ea4e53360635caf1ccce467d":"0.217452844434153",
  "0x970dafec8079e8b7500177a7d66873bf7d01f7af":"0.137365609514185",
  "0x98ad0678e4489ee453104d38b6bd626557c0bb9c":"0.486166547136061",
  "0x9a14e7045bf7dcfe6b0002d72ec1674b5ccc50e6":"1.17186115862652",
  "0x9ad2fdc0c515c2fe5358acd8b641f799e64e0c5c":"0.734766660087843",
  "0xa23cb68780be74b254a5f7210ec6cf1c76289953":"3",
  "0xa2c0a1f3c74b2f1184a273bafa8aa148af90b661":"0.693221725845488",
  "0xa2c62a66f6660166838b95db60f234dfb59e765e":"26.1447363186412",
  "0xa423687ddf458a3a0ae4b738dc2cca3c4312a742":"4.52988522072631",
  "0xa5f158e596d0e4051e70631d5d72a8ee9d5a3b8a":"0.2",
  "0xa6d52bd150a551f084f7c8420448ec19ce868055":"0.4432312877123",
  "0xa9cdf0542a1128c5caca1e81521a09aec8abe1a7":"0.541711824880702",
  "0xa9d339e64576dc10b6f277be43b4989ebf36d3ad":"0.193072194632309",
  "0xabbb9eb2512904123f9d372f26e2390a190d8550":"0.5",
  "0xac3c2f091edea973f666173b3ebd242a80fe411c":"1.50275467141477",
  "0xae1b18ccbe2f8f4a28caa99ecb60429dd7813723":"0.182065464123229",
  "0xb1620c0547744dedd30f40a863c09d1964532f8c":"0.338882443839936",
  "0xb203df26af3666f4214661f7f903c46edf9403b0":"0.405135635701258",
  "0xb404bebdb830b89f2a344fcc2544fc5b3af8f003":"12.0565933448467",
  "0xb7275dd78e005d7d191fee57ed9448feabf708ef":"5.31811496283703",
  "0xbb05060af1e2f4cb81e741cf19caa1ae9900382b":"0.0111649754562245",
  "0xbc5faa39e67b0fe089d2b7183a8c6889cc555c10":"2.65329384052167",
  "0xbdd9e7c90cf0cfadef265e7efd4641a330350ea2":"0.203994287462643",
  "0xc6c8aecb1d9ca59a09d691cda8539992655dbfb3":"20",
  "0xcb832aabdf803befca84716bfcb8f832a76a9922":"0.551724137931034",
  "0xcd51be3eb3e13d1c144a7fa2536c12a4040a8e29":"0.35",
  "0xcec590f5b40b1556bd68acc8d9696f375f1484bc":"0.281680802835355",
  "0xcf5b5b76c327fae151ca810146ecc7b51b6767dd":"0.592920963391068",
  "0xd2efc04d97f3d3dc0cd36f54ba20ba103c132434":"5.45454392275974",
  "0xd3d6246415a26a8732fe0c1f39ac530aeabf33fb":"0.210965517241379",
  "0xd51cb479c26d304a32b3a1be5a5ab8331f227c57":"1",
  "0xd84e11bee5d555ccd905817cb8cbbd5b6e6c4f0d":"0.0517312338258336",
  "0xdfe2b668c6d4a3fa785f86cb2c64e54e30c16cb0":"0.488354329956119",
  "0xe2cea50ba5a302a691b93692e74786d6484db295":"18.0914841079671",
  "0xe5ca65d94c83892dc41f6923b14c90e83dff0099":"0.309183555820087",
  "0xe95c621e026c605b80f51fe02cccbfa389689c6a":"0.206919490327586",
  "0xedabdc26e7e56111e1b5af3556ceda589ddad592":"0.5",
  "0xee0ec6abd49d224f6fc50805d2517795c7335dd8":"1.33062894206307",
  "0xef3488e6e16d9dd841d43ee8a5b3701471ddbac8":"0.02",
  "0xf1c30d30e07e6940d1c12ea25502e2c40d752171":"3.98041897714209",
  "0xf272aa5fe0589c8acc0db9a5f81ffc6e3da7bcf7":"0.182192446370184",
  "0xf8ed0c75174753b0d264e67331818e89dadf0f69":"0.952194558987925",
  "0xfb4a5ae508dc15e2e1172bae69fb8ad18cc81d73":"0.102183975844403",
  "0xfb664b13d4cd3956b3bb165fd9c8fdf64820df79":"0.487319873134415"
};

/**
 * Script to pre-mine DAO tokens as well as mint needed TIME tokens
 */
async function main () {

  // Sanity check  pre-seed contributions before we start!
  const summedContributions = Object.values(PRESEED_ETH_CONTRIBUTIONS).reduce((sum, contribution) => {
    return sum.add(ethers.utils.parseUnits(contribution, DECIMALS))
  }, ethers.BigNumber.from("0"));
  
  if(!summedContributions.eq(PRESEED_ETH_TOTAL)) {
    throw new Error(`Incorrect Contribution Total ${summedContributions.toString()}`);
  }
  // mint tokens
  accounts = await ethers.getSigners();

  const TicToken = await deployments.get("TicToken");
  const TimeTokenDAO = await deployments.get("TimeTokenDAO");
  const TimeTokenTeam = await deployments.get("TimeTokenTeam");
  const TimeTokenPreSeed = await deployments.get("TimeTokenPreSeed");

  const ticToken = new ethers.Contract(
    TicToken.address,
    TicToken.abi,
    accounts[0]
  );
  const timeTokenDAO = new ethers.Contract(
    TimeTokenDAO.address,
    TimeTokenDAO.abi,
    accounts[0]
  );
  const timeTokenTeam = new ethers.Contract(
    TimeTokenTeam.address,
    TimeTokenTeam.abi,
    accounts[0]
  );
  const timeTokenPreSeed = new ethers.Contract(
    TimeTokenPreSeed.address,
    TimeTokenPreSeed.abi,
    accounts[0]
  );

  console.log(`Pre-mining TIC Tokens to DAO:${process.env.AVAX_GOVERNANCE_ADDRESS}`);
  await ticToken.mint(process.env.AVAX_GOVERNANCE_ADDRESS, DAO_PRE_MINE); 
  await utils.delay(2000);

  console.log(`Minting TIME Token to DAO:${process.env.AVAX_GOVERNANCE_ADDRESS}`);
  await timeTokenDAO.mint(process.env.AVAX_GOVERNANCE_ADDRESS, ethers.utils.parseUnits("1", 18));
  await utils.delay(2000);

  console.log('Minting TIME Token to team');
  for (var address of Object.keys(TEAM_ALLOCATION)) {
    console.log(`Minting team token to:${address}`);
    await timeTokenTeam.mint(address, TEAM_ALLOCATION[address]);
    await utils.delay(2000);
  }

  console.log('Minting TIME Token to pre-seed...');
  for (var address of Object.keys(PRESEED_ETH_CONTRIBUTIONS)) {
    const amount = ethers.utils.parseUnits(PRESEED_ETH_CONTRIBUTIONS[address], DECIMALS);
    console.log(`Minting ${PRESEED_ETH_CONTRIBUTIONS[address]} pre-seed TIME token to:${address}`);
    await timeTokenPreSeed.mint(address, amount);
    await utils.delay(2000);
  }
};


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });