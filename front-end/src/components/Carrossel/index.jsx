import { BgImage, ContainerCarrossel } from "./style"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../assets/images/logo_footer.png'


import { Carousel } from 'react-responsive-carousel';

const Carrocel = () => {
  return (
    <ContainerCarrossel>
      <BgImage>
        <img src={img} />
        <Carousel showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={3500}>
          <div>
            <p>Seja bem-vindo ao Ergoframe, o site que ajuda na auto-avaliação de suas telas usando metódos de avaliação ergonômicos propostos por Bastien e Scapin.</p>
          </div>
          <div>
            <p>O por que do foguete como logo? Porque com o potencial de nossa ferramenta, seu produto irá decolar!</p>
          </div>
          <div>
            <p>A avaliação consiste um questionário baseado em critérios ergonômicos, as quais tem foco na usabilidade da interface que está sendo avaliada, portanto, mostra quais trechos podem ser melhorados. </p>
          </div>
          <div>
            <p>Ao criar sua conta, suas avaliações permanecerão salvas e poderão ser utlizadas ou compartilhadas quando quiser!</p>
          </div>
          <div>
            <p>Suas avaliações serão salvas a cada questão respondida, assim, todo seu progresso estará seguro conosco.</p>
          </div>
          <div>
            <p>Nosso projeto se basea na criação do Ergolist. Uma colaboração do Núcleo Softex-2000 de Florianópolis e o Laboratório de Utizabilidade, (UFSC/SENAI-SC/CTAI) no ano de 1999.</p>
          </div>
        </Carousel>
      </BgImage>
    </ContainerCarrossel>
  )
}

export default Carrocel