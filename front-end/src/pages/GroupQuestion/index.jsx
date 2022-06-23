import GroupCard from "../../components/GroupCard"
import Button from "../../components/Button"
import Base from "../Base"
import { CabecalhoPesquisa, ContainerGroupQuestion } from "./style"
import { useQuestionGroupContext } from "../../providers/QuestionGroupContext"
import { useEffect } from "react"
import { useQuestion } from "../../providers/QuestionContex"
import { useParams } from "react-router-dom"
import { useAssessmentContext } from "../../providers/AssessmentContext"

const GroupQ = () => {

    const { assessmentList } = useAssessmentContext()
    const { questionGroup } = useQuestionGroupContext()
    const { QuestionList } = useQuestion()
    const params = useParams()

    const currentAssessment = assessmentList.find(item => item._id === params.assessmentId)


    useEffect(() => {
        QuestionList()
    }, [])

    return (
        <Base>
            <CabecalhoPesquisa>
                <div>
                    <h3>{currentAssessment.title}</h3>
                    {currentAssessment.url ? <a href={currentAssessment.url} target="_blank" without rel="noreferrer">{currentAssessment.url}</a> : null}
                </div>
            </CabecalhoPesquisa>
            <ContainerGroupQuestion>
                {questionGroup.map((info, i) => {
                    return <GroupCard key={i} info={info} />
                }
                )}

                <Button> Finalizar </Button>
            </ContainerGroupQuestion>
        </Base>
    )
}

export default GroupQ