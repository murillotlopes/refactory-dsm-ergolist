
import { Link } from 'react-router-dom'
import { DefaultPage } from '../../components/defaultPage/defaultPage'
import styles from './dashboard.module.css'
import { useEffect, useState } from 'react'
import { useAssessment } from '../../providers/assessmentContext'
import { AssessmentItem } from '../../components/assessment/assessmentItem'
import { AssessmentType } from '../../../types/assessment'
import { Input } from '../../components/input/input'
import { FaSearch } from 'react-icons/fa'

export const Dashboard = () => {
  const [assessmentList, setAssessmentList] = useState([] as AssessmentType[])
  const [keySearch, setKeySearch] = useState('')

  const { getAllAssessment } = useAssessment()

  const handleChangeSearchAssessment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeySearch(e.target.value)
    getAllAssessment(setAssessmentList, e.target.value)
  }

  useEffect(() => {
    getAllAssessment(setAssessmentList)
  }, [])


  return (
    <DefaultPage>
      <section className={styles.container}>
        <div className={styles.boxNewAssessment}>
          <Link to='/new-assessment'
          >
            Nova Avaliação
          </Link>
        </div>

        <div className={styles.containerAssessment}>
          <h3>Avaliações</h3>

          <Input label='Pesquisar' name='search' type='search' handleOnChange={handleChangeSearchAssessment} value={keySearch} Icon={FaSearch} placeholder='Informe o título para pesquisa' />

          <div className={styles.scrollAssessment}>
            {
              assessmentList.map(item => <AssessmentItem key={item._id} assessment={item} ></AssessmentItem>)
            }
          </div>


        </div>

      </section>

    </DefaultPage>
  )
}