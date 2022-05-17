import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <Container>
      <h1>Login</h1>
      <hr />

      <Button
        onClick={ handleLogin }
      >
        Ingresar
      </Button>
    </Container>
  );
};

export default LoginScreen;
