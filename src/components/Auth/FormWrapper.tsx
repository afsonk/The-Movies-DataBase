import {ReactNode} from "react"
import {Container} from "../shared"
import HeaderTitle from "./HeaderTitle"
import classNames from "classnames"

type Props = {
    children: ReactNode,
    login?: boolean,
    signup?: boolean
}

function FormWrapper({children, login, signup}: Props){
    return (
        <div className={classNames('form-page',{
            'login': login,
            'signup': signup
        })}>
            <Container>
                <HeaderTitle login={login} signup={signup}/>
                {children}
            </Container>
        </div>
    )
}

export default FormWrapper