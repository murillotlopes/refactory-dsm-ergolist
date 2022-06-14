import { ContainerCarrossel } from "./style"

import "react-responsive-carousel/lib/styles/carousel.min.css";


import { Carousel } from 'react-responsive-carousel';

const Carrocel = () => {
    return(
        <ContainerCarrossel>
            <div>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={2500}>
                <div>
                    <p>Seja bem-vindo ao Ergoframe, o site que busca ajudá-lo na auto-avaliação de suas telas usando metódos de avaliação ergonômicos propostos por Bastien e Scapin.</p>
                </div>
                <div>
                   <p>Nosso projeto se basea na criação do Ergolist. Uma colaboração do Núcleo Softex-2000 de Florianópolis e o Laboratório de Utizabilidade, (UFSC/SENAI-SC/CTAI) no ano de 1999. </p>
                </div>
                <div>
                    <p></p>
                </div>
            </Carousel>
            </div>
        </ContainerCarrossel>
    )
}

export default Carrocel