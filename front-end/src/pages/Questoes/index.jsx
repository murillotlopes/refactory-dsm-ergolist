import { useForm } from "react-hook-form"
import Base from "../Base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ContainerQuestoes, Form, Resposta } from "./style"


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
                <label><input type="radio" name="questao" id="sim" {...register('objective_answer')} />Sim </label>
                <label><input type="radio" name="questao" id="não" {...register('objective_answer')} />Não </label>
                <label><input type="radio" name="questao" id="são_se_aplica" {...register('objective_answer')} />Não se aplica </label>
              </div>
              <div>
                <input type="text" {...register('comments')} />
              </div>
            </div>

            <div className="coluna-direita">
              <button type="button" alt="Retornar aos grupos de questões" >Grupos</button>
              <button type="button" alt="Questão anterior" >Anterior</button>
              <button type="button" alt="Próxima questão" >Próxima</button>

            </div>
          </Resposta>

        </Form>
      </ContainerQuestoes>
    </Base>
  )
}

export default Questoes