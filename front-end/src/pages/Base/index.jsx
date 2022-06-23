import { useEffect } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useAuth } from "../../providers/AuthContext"

const Base = ({ children }) => {

    const { checkTokenValidity } = useAuth()

    useEffect(() => {
        checkTokenValidity()
    }, [])

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Base