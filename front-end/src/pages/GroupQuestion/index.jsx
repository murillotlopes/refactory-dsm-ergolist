import GroupCard from "../../components/GroupCard"
import Button from "../../components/Button"
import Base from "../Base"
import { ContainerGroupQuestion } from "./style"
import { useQuestionGroupContext } from "../../providers/QuestionGroupContext"
import { useEffect } from "react"
import { useQuestion } from "../../providers/QuestionContex"

const GroupQ = () => {

    const { questionGroup } = useQuestionGroupContext()
    const { QuestionList } = useQuestion()

    useEffect(() => {
        QuestionList()
    }, [])

    return (
        <Base>
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