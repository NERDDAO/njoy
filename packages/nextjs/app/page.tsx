"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Dropup from "~~/components/DropUp";
import MintWindow from "~~/components/MintWindow";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bgimg">
        <div className="px-5">
          <p className="text-center text-lg">
            gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
            gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
            gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
            gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
            gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
          </p>
        </div>
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <p>Dropup</p>
          <Dropup contentId="8888" />
          <MintWindow />
        </div>
      </div>
    </>
  );
};

export default Home;
