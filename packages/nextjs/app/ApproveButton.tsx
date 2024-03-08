import React from "react";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";

type ApproveButtonProps = {
  contractName: string; // This should match the key used in your contract configurations
  spenderAddress: string; // The address that will be approved to spend tokens
};

const ApproveButton: React.FC<ApproveButtonProps> = ({ contractName, spenderAddress }) => {
  const { writeAsync, isMining } = useScaffoldContractWrite({
    contractName: "Token",
    functionName: "approve",
    args: [spenderAddress, ethers.constants.MaxUint256] as any,
  });

  const handleApprove = async () => {
    try {
      const tx = await writeAsync();
      console.log("Transaction result:", tx);
    } catch (error) {
      console.error("Approval error:", error);
    }
  };

  return (
    <button onClick={handleApprove} disabled={isMining}>
      {isMining ? "Approving..." : "Approve"}
    </button>
  );
};

export default ApproveButton;

//       <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
