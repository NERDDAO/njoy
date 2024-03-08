import React from "react";
import Image from "next/image";
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
        args: [spenderAddress, ethers.MaxUint256] as any,
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
        <div className="flex flex-col">
            <div className="p-12 bg-backdrop-blur-20 border-6 border-black">
                <Image src="/temp.jpg" className="relative left-1/2 -ml-28" alt="Enjoy" width={252} height={400} />
            </div>
            <button className="relative  bg-cover bg-no-repeat h-24 w-52 bottom-0 left-1/2 -ml-20 border-2 bg-cover p-4 bg-[url(/vwave.jpg)] text-blue-500" onClick={handleApprove} disabled={isMining}>
                {isMining ? "Approving..." : "Approve"}
            </button>

            <label className="relative left-1/2 -ml-32 top-12" >Amount<input></input></label>
        </div>
    );
};

export default ApproveButton;

//       <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
