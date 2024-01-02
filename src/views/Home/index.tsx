import { useNavigate} from "react-router-dom"

const Home = function () {

  const navigate = useNavigate()
  const Login = () => {
    navigate('/login')
  }
  return(
    <div>
      <div>Home111</div>
      <div onClick={Login}>go to Login</div>
    </div>
  )
}
export default Home