export interface Nft {
  id: number;
  title: string;
  price: number;
  description: string;
  author: string;
  user: string;
  image: string;
}

export interface NftList {
  nfts: Nft[];
  length: number;
}
