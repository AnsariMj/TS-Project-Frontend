import axios from "axios"
import Form from "../Form"
import { UserDataType } from "../types"
import { useDispatch } from "react-redux"
import { login } from "../../../store/authSlice"


const Login = () => {

    const dispatch = useDispatch()


    const handleLogin = async (data: UserDataType) => {
        console.log(data)
        dispatch(login(data))

        const response = await axios.post('localhost:5000/login')
        console.log(response)
    }
    return (
        <Form type='login' onSubmit={handleLogin} />
    )
}

export default Login