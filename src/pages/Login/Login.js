import { Outlet } from "react-router-dom";


function Login() {
    return (
        <div>
        <h4>로그인 페이지임</h4>
            <Outlet></Outlet>
        </div>
    );
}


export default Login;