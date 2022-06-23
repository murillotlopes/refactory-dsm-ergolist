import Base from "../Base"
import { CabecalhoPesquisa, ContainerQuestoes, Form, Resposta } from "./style"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useHistory, useParams } from "react-router-dom"
import { useQuestion } from "../../providers/QuestionContex"
import { useAssessmentContext } from "../../providers/AssessmentContext"
import { useEffect, useState } from "react"
import { useAnswer } from "../../providers/AnswerContext"

const Questoes = () => {

  const { assessmentList } = useAssessmentContext()
  const { currentQuestion } = useQuestion()
  const { createAnswer } = useAnswer()
  const params = useParams()
  const history = useHistory()

  const [answer, setAnsewer] = useState('P')
  const [comments, setComments] = useState('')

  const currentAssessment = assessmentList.find(item => item._id === params.assessmentId)
  const questionNow = currentQuestion.find(item => item._id === params.questionId)

  const submitAnswer = () => {
    const data = {
      assessment: params.assessmentId,
      question: params.questionId,
      objective_answer: answer,
      comments: comments
    }
    createAnswer(data)
  }

  useEffect(() => {
    submitAnswer()
  }, [answer, comments])

  return (
    <Base>
      <CabecalhoPesquisa>
        <div>
          <h3>{currentAssessment.title}</h3>
          {currentAssessment.url ? <a href={currentAssessment.url} target="_blank" without rel="noreferrer">{currentAssessment.url}</a> : null}
        </div>
      </CabecalhoPesquisa>
      <ContainerQuestoes>

        <Form>

          <div>
            <div>
              <h3 title={questionNow.group.description}>{questionNow.group.group}</h3>
            </div>
            <p><span>{questionNow.number}</span> - {questionNow.enunciation}</p>
          </div>

          <Resposta>
            <div className="coluna-esquerda">
              <div>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" name="questao" id="sim" onClick={() => setAnsewer('Y')} >Sim</Button>
                  <Button variant="secondary" name="questao" id="não" onClick={() => setAnsewer('N')}>Não</Button>
                  <Button variant="secondary" name="questao" id="são_se_aplica" onClick={() => setAnsewer('X')}>Não se Aplica</Button>
                </ButtonGroup>
              </div>
              <div>
                <textarea className="form-control mt-3" rows='3' type="text" placeholder="Comentário" onChange={(e) => setComments(e.target.value)} />
              </div>
            </div>

            <div className="coluna-direita">
              <Button onClick={() => history.push(`/groupquestion/${params.assessmentId}`)}><FaHome></FaHome></Button>
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