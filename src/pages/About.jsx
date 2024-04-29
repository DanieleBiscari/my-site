import React from "react";
import { Link } from "react-router-dom";
import fotoPersonale from "../assets/img/fotoPersonale.png";
import passion1 from "../assets/img/passion1.jpg";
import passion2 from "../assets/img/passion2.jpg";
import passion3 from "../assets/img/passion3.png";
import passion4 from "../assets/img/passion4.png";
import passion5 from "../assets/img/passion5.png";

const About = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="bg-slate-50 backdrop-blur-md bg-opacity-50 w-[80%] p-10 flex justify-center flex-col gap-28 my-10 rounded-[3rem]">
        {/* Sezione Chi Sono */}
        <div className="lg:px-20 lg:h-[80vh] relative">
          <div className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0">
            <h1 className="me-auto lg:text-[4rem] mb-2">Chi Sono</h1>
            <p className="lg:pe-[30%] leading-[1.6] lg:text-[2rem]">
              Sono un programmatore fullstack appassionato di{" "}
              <b>creazione interfacce</b> con particolare attenzione su: <br />
              <em>esperienza utente</em>,<br />
              <em className="ml-8">accessibilità</em> e <br />
              <em className="ml-16">performance</em>
            </p>
          </div>
          <img
            className="bg-slate-50 rounded-full mx-auto lg:absolute right-[5%] bottom-[10%] lg:w-[25vw] z-[-1] w-full max-w-[20rem] lg:max-w-full"
            src={fotoPersonale}
            alt="foto personale"
            width={400}
          />
          <div className="lg:absolute bottom-12 left-[30%] flex flex-col items-center mt-16">
            <p className="text-2xl font-light italic uppercase">scroll</p>
            <div className="border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-400 w-[2.5rem] h-[2.5rem] rotate-[315deg]"></div>
            <div className="border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-600 w-[2.5rem] h-[2.5rem] rotate-[315deg] mt-[-.5rem]"></div>
            <div className="border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-800 w-[2.5rem] h-[2.5rem] rotate-[315deg] mt-[-.5rem]"></div>
          </div>
        </div>
        {/* Sezione Le mie Passioni */}
        <div className="lg:px-20 relative">
          <div className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0">
            <h1 className="me-auto lg:text-[4rem] mb-2">Le mie Passioni</h1>
            <p className="lg:pe-[30%] leading-[1.6] lg:text-[2rem] mb-16">
              Fuori dal lavoro mi piace dedicarmi alla <em>musica</em>. Suono la
              chitarra da più di 15 anni e mi piace comporre musica. <br />
              <em>Programmare</em> e <em>Suonare</em> sono dei modi con cui
              riesco ad esprimere la mia <b>creativita</b>.
            </p>
            <div className="gap-4 grid md:grid-cols-4 place-self-center">
              <img
                className="bg-slate-50"
                src={passion4}
                alt="foto personale"
              />
              <img
                className="bg-slate-50 md:rounded-full aspect-square object-cover "
                src={passion1}
                alt="foto personale"
              />
              <img
                className="bg-slate-50 row-start-2 md:rounded-full"
                src={passion2}
                alt="foto personale"
              />
              <img
                className="bg-slate-50 row-start-2 object-cover h-full"
                src={passion5}
                alt="foto personale"
              />
              <img
                className="bg-slate-50 object-cover h-full md:col-start-3 md:row-span-2 md:col-span-2 "
                src={passion3}
                width={1000}
                alt="foto personale"
              />
            </div>
          </div>
        </div>
        {/* Sezione I miei Obiettivi */}
        <div className="lg:px-20 relative lg:mt-8">
          <div className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0 text-center">
            <h1 className="me-auto lg:text-[4rem] mb-2">I miei Obiettivi</h1>
            <p className="leading-[1.6] lg:text-[2rem] text-balance">
              Mi reputo una persona ambiziosa che cerca sempra di dare il
              meglio, in modo da poter raggiungere obbiettivi predisposti.{" "}
              <br />
              Uno degli obbiettivi più importanti è quello dello{" "}
              <b>studio continuo</b>, perché il mondo si evolve velocemente e
              stare al passo con le nuove tecnologie ti dà una marcia in più
            </p>
          </div>
        </div>
        {/* Sezione inferiore */}
        <div className=" flex items-center flex-col justify-center">
          <p className="leading-[2] text-balance text-center">
            Questo sito web è il mio portfolio, dove puoi trovare una selezione
            dei miei lavori e progetti. Spero che la mia passione per la
            programmazione e la musica traspaia dal mio lavoro. Se sei
            interessato a saperne di più su di me o su ciò che posso fare, non
            esitare a{" "}
            <Link
              to={"/contact"}
              className="underline text-[#c0ecfd] drop-shadow-2xl"
            >
              contattarmi
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
