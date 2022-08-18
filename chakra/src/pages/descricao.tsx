import { Header } from "../components/header";
import { Banner } from "../components/descricaoPage/banner";
import { Informations } from "../components/descricaoPage/paisInformation";
import { OutrosPaises } from "../components/descricaoPage/outrosPaises";
import { BoxContent } from "../components/descricaoPage/boxContent";

export default function Descricao() {
  return (
    <>
      <Header back={true} />
      <Banner />
      <BoxContent>
        <Informations />
        <OutrosPaises />
      </BoxContent>
    </>
  );
}
