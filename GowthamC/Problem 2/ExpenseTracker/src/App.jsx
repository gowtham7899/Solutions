import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgetPasswordForm from "./components/ForgetPasswordForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

const users = [
  {
    username: "8125513148",
    password: "karthik@123",
  },
  {
    username: "ammababoiiii@gmail.com",
    password: "Karthik@111",
  },
];

const App = () => {
  const addUser = (mobile, password, email) => {
    const newUser = {
      mobile,
      password,
      email,
    };
    users.push(newUser);
  };
  return (
    <Switch>
      <Route exact path="/login">
        <LoginForm users={users} />
      </Route>
      <Route exact path="/register">
        <RegisterForm users={users} addUser={addUser} />
      </Route>
      <Route exact path="/forgot-password">
        <ForgetPasswordForm users={users} />
      </Route>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default App;
