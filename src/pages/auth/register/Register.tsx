import axios from "axios"
import Form from "../Form"
import { UserDataType } from "../types"
import { useDispatch } from "react-redux"
import { register } from "../../../store/authSlice"

const Register = () => {

    const dispatch = useDispatch()

    const handleRegister = async (data: UserDataType) => {
        console.log(data)
        dispatch(register(data))
        const response = await axios.post('http://localhost:5000/register', data)
        console.log(response)
    }
    return (
        <Form type="register" onSubmit={handleRegister} />
    )
}

export default Register