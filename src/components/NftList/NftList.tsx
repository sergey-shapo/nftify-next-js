import { Nft } from "@/types";
import { NftList } from "@/types";
import { link } from "fs";
import Image from "next/image";

const NftList = async (): Promise<React.ReactElement> => {
  const response = await fetch(`${process.env.API_URL}nfts`, {
    next: {
      revalidate: 300,
    },
  });

  const nft: NftList = await response.json();

  const { nfts } = nft;

  return (
    <ul>
      {nfts.map((nfts) => (
        <li key={nfts.id}>
          <span>{nfts.title} </span>

          <Image
            src={nfts.image}
            alt={nfts.title}
            width={300}
            height={300}
          ></Image>
        </li>
      ))}
    </ul>
  );
};

export default NftList;
