import { useForm } from "react-hook-form"
import Base from "../Base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ContainerQuestoes, Form, Resposta } from "./style"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const Questoes = ({ }) => {

  const schema = yup.object().shape({
    objective_answer: yup.string().required(),
    comments: yup.string()
  })

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) })

  const onQuestoes = (data) => {
    console.log(data)
  }

  return (
    <Base>
      <ContainerQuestoes>

        <Form onSubmit={handleSubmit(onQuestoes)}>

          <div>
            <p>{`Os títulos de telas, janelas e caixas de diálogo estão no alto, centrados ou justificados à esquerda?`}</p>
          </div>

          <Resposta>
            <div className="coluna-esquerda">
              <div>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" name="questao" id="sim" {...register('objective_answer')}>Sim</Button>
                  <Button variant="secondary" name="questao" id="não" {...register('objective_answer')}>Não</Button>
                  <Button variant="secondary" name="questao" id="são_se_aplica" {...register('objective_answer')}>Não se Aplica</Button>
                </ButtonGroup>
              </div>
              <div>
                <input type="text" placeholder="Comentário" {...register('comments')} />
              </div>
            </div>

            <div className="coluna-direita">
              <Link to='/groupquestion'><Button><FaHome></FaHome></Button></Link>
              <Button><FaArrowLeft></FaArrowLeft></Button>
              <Button><FaArrowRight></FaArrowRight></Button>
            </div>
          </Resposta>

        </Form>
      </ContainerQuestoes>
    </Base>
  )
}

export default Questoes