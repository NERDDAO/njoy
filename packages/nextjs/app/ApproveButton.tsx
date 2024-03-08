import React from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";
import { Howl, Howler } from 'howler';

type ApproveButtonProps = {
    contractName: string; // This should match the key used in your contract configurations
    spenderAddress: string; // The address that will be approved to spend tokens
};
var sound = new Howl({
    src: ['clicky.mp3']
});
const ApproveButton: React.FC<ApproveButtonProps> = ({ contractName, spenderAddress }) => {
    const { writeAsync, isMining } = useScaffoldContractWrite({
        contractName: "Token",
        functionName: "approve",
        args: [spenderAddress, ethers.MaxUint256] as any,
    });

    const handleApprove = async () => {
        sound.play();
        try {
            const tx = await writeAsync();
            console.log("Transaction result:", tx);
        } catch (error) {
            console.error("Approval error:", error);
        }

    };

    return (
        <div className="relative flex flex-col snap-center">

            <button
                className="bg-no-repeat h-24 w-52 bottom-0  border-2 bg-cover p-4 bg-[url(/vwave.jpg)] text-blue-500"
                onClick={handleApprove}
                disabled={isMining}
            >
                {isMining ? "Approving..." : "Approve"}
            </button>

            <label>
                Amount<input></input>
            </label>
        </div>
    );
};

export default ApproveButton;

//       <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
