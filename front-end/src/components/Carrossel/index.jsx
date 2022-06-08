import { ContainerCarrossel } from "./style"

//import img from './download.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";


import { Carousel } from 'react-responsive-carousel';

const Carrocel = () => {
    return(
        <ContainerCarrossel>
            <div>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae totam similique laborum aut libero odio quaerat, illo cumque et aperiam. Eaque saepe odit odio omnis quaerat molestias provident fugiat voluptas? Lore</p>
                </div>
                <div>
                   <p> Seja bem-vindo ao Ergoframe, o site amigo das interfaces</p>
                </div>
                <div>
                    <p> Seja bem-vindo ao Ergoframe, o site amigo das interfaces</p>
                </div>
            </Carousel>
            </div>
        </ContainerCarrossel>
    )
}

export default Carrocel