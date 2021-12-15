import { Component, OnInit } from '@angular/core';
import { Ihome, Igallery } from './models/Ihome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public homeContent: Ihome;
  public comediaMovies: Igallery;
  public accionMovies: Igallery;
  constructor() {
    this.homeContent={
      header:{
        logo:{
          src:"../../../assets/LOGO/2560px-Netflix_2015_logo.svg.png",
          alt:"logo"
        },
        menu:["Inicio","Series TV","Películas","Novedades más Vistas","Mi lista"],
        options:[
          {
            src:"../../../assets/nav/lupa.png",
            alt:"Buscar"
          },
          {
            src:"../../../assets/nav/campana.webp",
            alt:"Avisos"
          },
          {
            src:"../../../assets/nav/icono-C.png",
            alt:"Perfil"
          },
        ]
      },
      main:{
        banner:
        {
          src:"../../../assets/banner.png",
          alt:"banner"

        }
      },
      hero:{
        title:"Las 10 más populares en España hoy",
        movies:[
          {
            src:"../../../assets/Top10/1-imperdonable.webp",
            alt:"Imperdonable"
          },
          {
            src:"../../../assets/Top10/2-papel.webp",
            alt:"Casa de Papel"
          },
          {
            src:"../../../assets/Top10/3-reina.webp",
            alt:"Reina del Flow"
          },
          {
            src:"../../../assets/Top10/4-titanes.webp",
            alt:"Titanes"
          },
          {
            src:"../../../assets/Top10/5-dondecaben.webp",
            alt:"Donde caben dos"
          },
          {
            src:"../../../assets/Top10/6-volvemosacasa.webp",
            alt:"Volvemos a casa"
          },
          {
            src:"../../../assets/Top10/7-ricosymimados.webp",
            alt:"Ricos y mimados"
          },
          {
            src:"../../../assets/Top10/8-lostinspace.webp",
            alt:"Lost in Space"
          },
          {
            src:"../../../assets/Top10/9-aquinohay.webp",
            alt:"Aqui no hay quien viva"
          },
          {
            src:"../../../assets/Top10/10-poder.webp",
            alt:"El poder del perro"
          },

        ],

        position:[1,2,3,4,5,6,7,8,9,10]
      },
      footer:{
        rrss:[
        {
          src:"../../../assets/footer/facebook1.png",
          alt:"facebook"
        },
        {
          src:"../../../assets/footer/instagram.jpg",
          alt:"Instagram"
        },
        {
          src:"../../../assets/footer/twitter2.png",
          alt:"twitter"
        },
        {
          src:"../../../assets/footer/youtube.png",
          alt:"Youtube"
        }
      ],
      services:["Audio y subtitulos","Zona de prensa","Privacidad","Contáctanos","Audiodescripción","Inversores","Centro de ayuda"],
      copyright:"©️ 1997-2021 Netflix, Inc. {82485982-1a86-447e-a345-39da3e3c7a01",
      },


      gallery:{

        title:"Para ver en un fin de semana",

        movies:[
          {
            src:"../../../assets/Comedia/juerga.webp",
            alt:"Juerga"
          },
          {
            src:"../../../assets/Anime/chihiro.webp",
            alt:"chihiro"
          },
          {
            src:"../../../assets/Drama/culpable.jpg",
            alt:"Culpable"
          },
          {
            src:"../../../assets/Sci-fi/12monos.webp",
            alt:"12 monos"
          },
          {
            src:"../../../assets/Comedia/laterminal.webp",
            alt:"La terminal"
          },
          {
            src:"../../../assets/Comedia/ted2.webp",
            alt:"Ted 2"
          },
          {
            src:"../../../assets/Sci-fi/transformers.webp",
            alt:"Transformers"
          },
          {
            src:"../../../assets/Terror/malasana.webp",
            alt:"Malasana"
          },
          {
            src:"../../../assets/Top10/9-aquinohay.webp",
            alt:"Aqui no hay quien viva"
          },
          {
            src:"../../../assets/Top10/10-poder.webp",
            alt:"El poder del perro"
          },
        ]
      }
    },

      this.comediaMovies={

        title: "Comedias",

          movies:[
            {
              src:"../../../assets/Comedia/scarymovie3.webp",
              alt:"Scarymovie3"
            },
            {
              src:"../../../assets/Comedia/padresella.webp",
              alt:"Padres de ella"
            },
            {
              src:"../../../assets/Comedia/erasehollywood.webp",
              alt:"Hollywood"
            },
            {
              src:"../../../assets/Comedia/regresofuturo.webp",
              alt:"Regreso al Futuro"
            },
            {
              src:"../../../assets/Comedia/casi300.webp",
              alt:"Casi 300"
            },
            {
              src:"../../../assets/Comedia/cazafantasmas.webp",
              alt:"Cazafantasmas"
            },
            {
              src:"../../../assets/Comedia/family guy.webp",
              alt:"Family"
            },
            {
              src:"../../../assets/Comedia/laterminal.webp",
              alt:"Malasana"
            },
            {
              src:"../../../assets/Comedia/dictador.webp",
              alt:"Dictador"
            },
            {
              src:"../../../assets/Comedia/ted2.webp",
              alt:"Ted"
            },
          ]
      },

        this.accionMovies={

            title:"Películas de Acción",

              movies:[
                {
                  src:"../../../assets/Accion/ejercitomuertos.jpg",
                  alt:"Ejercito"
                },
                {
                  src:"../../../assets/Accion/elprotector.webp",
                  alt:"El protector"
                },
                {
                  src:"../../../assets/Accion/equalizer2.webp",
                  alt:"Equalizer"
                },
                {
                  src:"../../../assets/Accion/heat.webp",
                  alt:"Heat"
                },
                {
                  src:"../../../assets/Accion/jackreacher.webp",
                  alt:"Jackreacher"
                },
                {
                  src:"../../../assets/Accion/johnwick2.webp",
                  alt:"Johwich"
                },
                {
                  src:"../../../assets/Accion/killbill2.webp",
                  alt:"Killbill"
                },
                {
                  src:"../../../assets/Accion/misionimposiblenacion.webp",
                  alt:"Mision Imposible"
                },
                {
                  src:"../../../assets/Accion/renacido.webp",
                  alt:"Renacido"
                },
                {
                  src:"../../../assets/Accion/terminator2.webp",
                  alt:"Terminator"
                },
              ]


    }
  }

  ngOnInit(): void {
  }

}
