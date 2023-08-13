// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NetworkName, Networks } from "~/types/global";

import fantom from "./networks/fantom";
import arbitrum from "./networks/arbitrum";


const networks: Networks = {

  [NetworkName.fantom]: fantom,
  [NetworkName.arbitrum]: arbitrum,

};

export default networks;
