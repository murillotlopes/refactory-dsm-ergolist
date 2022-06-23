import { Link } from "react-router-dom"
import Base from "../Base"
import { ContainerDash, NovaAvaliacao, ScrollAvaliacao } from "./style"
import { Input } from '../../style/inputStyle'
import Avaliacao from '../../components/Avaliacao/Avaliacao'
import { ContainerHomeForm } from "../../style/homeFormStyle"
import { useAssessmentContext } from "../../providers/AssessmentContext"
import { useEffect } from "react"
import { useQuestionGroupContext } from "../../providers/QuestionGroupContext"


const Dashboard = () => {
  const { userAssessmenteList, assessmentList } = useAssessmentContext()
  const { questionGroupList } = useQuestionGroupContext()


  useEffect(() => {
    userAssessmenteList()
    questionGroupList()
  }, [])

  return (
    <Base>
      <ContainerDash>
        <div>
          <Link to='/nova-avaliacao'>
            <NovaAvaliacao>
              <h3>Nova avaliação</h3>
            </NovaAvaliacao>
          </Link>
        </div>
        <div>
          <ContainerHomeForm>

            <h3>Avaliações Anteriores</h3>

            <Input>
              <input type="text" placeholder="Pesquisar" />
            </Input>

            <ScrollAvaliacao>
              {assessmentList.map((item, i) => <Avaliacao key={i} assessment={item} />)}
            </ScrollAvaliacao>
          </ContainerHomeForm>
        </div>
      </ContainerDash>
    </Base>
  )
}

export default Dashboard