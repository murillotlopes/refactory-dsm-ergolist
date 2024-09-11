import { AiOutlineCheckCircle } from 'react-icons/ai'
import styles from './assessment.module.css'
import { useNavigate } from 'react-router-dom'
import { AssessmentProps } from '../../../interfaces/assessment.interface'


export const Assessment = ({ assessment }: AssessmentProps) => {

  const navigate = useNavigate()

  return (
    <div className={styles.container} onClick={() => navigate(`/groupquestion/${assessment._id}`)} >
      <h4>{assessment.title}</h4>
      {!assessment.closed ? <AiOutlineCheckCircle /> : null}
    </div>
  )

}