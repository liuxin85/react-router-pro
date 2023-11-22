import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      login
      {/* 声明式的写法 */}
      <Link to={"/article"}>跳转到文章页面</Link>
      {/* 命令式的写法 */}
      <button onClick={() => navigate("/article")}>跳转到文章页面</button>
      <button onClick={() => navigate("/article?id=1001&name=jack")}>searchParams传参</button>
      <button onClick={() => navigate("/article/10001/jack")}>Params传参</button>
    </div>
  );
}

export default Login;
