import GroupCard from "../../components/GroupCard"
import Button from "../../components/Button"
import Base from "../Base"
import { ContainerGroupQuestion } from "./style"
import { useQuestionGroupContext } from "../../providers/QuestionGroupContext"

const GroupQ = () => {

    const { questionGroup } = useQuestionGroupContext()

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