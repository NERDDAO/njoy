import React, { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";
import { Howl, Howler } from 'howler';
import { Address } from "~~/components/scaffold-eth";
import { useAccount } from "wagmi";

type ApproveButtonProps = {
    contractName: string; // This should match the key used in your contract configurations
    spenderAddress: string; // The address that will be approved to spend tokens
};

const ApproveButton: React.FC<ApproveButtonProps> = ({ contractName, spenderAddress }) => {
    const { address: connectedAddress } = useAccount();
    const [stakeAmount, setStakeAmount] = useState(0);

    const mint = useScaffoldContractWrite({
        contractName: "gaslite_nJoy",
        functionName: "publicMint",
        args: [BigInt(stakeAmount)],
    });




    const callDeposit = async () => {
        await mint.writeAsync();
    };
    var sound = new Howl({
        src: ['clicky.mp3']
    });
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
        <div className="relative flex flex-col snap-center  w-full">

            <div className=" justify-items-center h-full w-full flex flex-col snap-center relative top-0">
                <div className="relative bg-[url(/enjoy.png)] bg-cover bg-no-repeat h-24 w-52 top-0 left-1/2 -ml-20" />
                <div className="relative bg-[url(/enjoy.png)] bg-cover bg-no-repeat h-64 w-52 top-0 left-1/2 -ml-20" >
                </div>
                <ul className="relative">
                    <button
                        className="bg-no-repeat h-24 w-52 bottom-0  border-2 bg-cover p-4 bg-[url(/vwave.jpg)] text-blue-500"
                        onClick={handleApprove}
                        disabled={isMining}
                    >
                        {isMining ? "Approving..." : "Approve"}
                    </button>

            <label className="w-80 text-rose-700 bg-sky-400 my-4 pb-5 rounded-lg border-4 ">
                Amount<input className="text-sky-400 bg-rose-700 mx-4"></input>
            </label>
        </div>
    );
};

export default ApproveButton;

//       <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
