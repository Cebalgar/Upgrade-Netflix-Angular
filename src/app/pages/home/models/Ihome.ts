

export interface Ihome{

  header: Iheader;
  main:Imain;
  hero: Ihero;
  gallery: Igallery;
  footer: Ifooter;

}

export interface Iimg{
  src: string;
  alt:string;
}


export interface Iheader{
  logo: Iimg;
  menu: string[];
  options:Iimg[];
}
export interface Imain{
  banner:Iimg;
}

export interface Ihero{

  title:string;
  movies: Iimg[];
  position:number[];
}

export interface Igallery{
  title:string;
  movies: Iimg[];

}

export interface Ifooter{

  rrss: Iimg[],
  services: string[];
  copyright: string;

}
