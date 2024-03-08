import React, { useState } from "react";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";

type MintButtonProps = {
  contractName: string;
  mintAmount: number;
  mintPrice: string;
  value: string;
};

const MintButton: React.FC<MintButtonProps> = ({ contractName, mintAmount, mintPrice, value }) => {
  const [mintAmountSelected, setMintAmountSelected] = useState<number>(1); // Default mint amount is 1
  //   const mintPrice = "0.02"; // Default mint price per token in ETH
  const [isMinting, setIsMinting] = useState(false);

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "gaslite_nJoy",
    functionName: "publicMint",
    args: [BigInt(mintAmount)],
    value: BigInt((parseFloat(mintPrice) * mintAmountSelected).toString()),
  });

  const handleMint = async () => {
    setIsMinting(true);
    try {
      const tx = await writeAsync();
      console.log("Mint transaction successful:", tx);
    } catch (error) {
      console.error("Mint transaction error:", error);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={mintAmount}
        onChange={e => setMintAmountSelected(parseInt(e.target.value, 10))}
        min="1"
      />
      <button onClick={handleMint} disabled={isMinting || mintAmount < 1}>
        {isMinting ? "Minting..." : "Mint"}
      </button>
    </div>
  );
};

export default MintButton;
