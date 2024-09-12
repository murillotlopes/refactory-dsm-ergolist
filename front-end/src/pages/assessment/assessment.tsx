import { useState } from "react"
import { DefaultPage } from "../../components/defaultPage/defaultPage"
import { Input } from "../../components/input/input"
import { useNavigate } from "react-router-dom"
import styles from './assessment.module.css'
import { useAssessment } from "../../providers/assessmentContext"
import { AssessmentType } from "../../../types/assessment"


export const Assessment = () => {
  const navigate = useNavigate()
  const { createAssessment } = useAssessment()

  const [assessment, setAssessment] = useState({ title: '', description: '' } as AssessmentType)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssessment({ ...assessment, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createAssessment(assessment)
  }


  return (
    <DefaultPage>
      <form onSubmit={handleSubmit} className={styles.container}>

        <h3>Cadastre uma nova avaliação</h3>

        <Input label='Título' name='title' type='text' handleOnChange={handleChange} value={assessment?.title} placeholder='Dê um nome para sua avaliação' />

        <Input label='Descrição' name='description' type='text' handleOnChange={handleChange} value={assessment?.description} placeholder='Uma descrição para sua avaliação' />


        <input type='submit' value={'INICIAR'} className={styles.btn} />

        <input type='submit' value={'VOLTAR'} className={styles.btn} onClick={() => navigate('/dashboard')} />

      </form>
    </DefaultPage>
  )
}