// SPDX-License-Identifier: MIT

pragma solidity 0.8.24;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import { ERC20Permit } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract HoloNEX is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("NEXL", "NEXL") ERC20Permit("NEXL") {
        _mint(msg.sender, 100_000_000 * 10 ** decimals());
    }
}
