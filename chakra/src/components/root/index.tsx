import { Anuncio } from "../anuncio";
import { Banner } from "../banner";
import { Beneficios } from "../beneficios";
import { Header } from "../header";
import { Paises } from "../paises";

export function Root() {
  return (
    <>
      <Header />
      <Banner />
      <Beneficios />
      <Anuncio />
      <Paises />
    </>
  );
}
