import {  AccountBalance, AddCard, CreditScore, Diversity1, IosShare, Savings } from "@mui/icons-material";
import Budget from "./Pages/Budget";
import Dashboard from "./Pages/Dashboard";
import Expenses from "./Pages/Expenses";
import Income from "./Pages/Income";
import Investment from "./Pages/Investment";
import Loan from "./Pages/Loan";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DashboardIcon from '@mui/icons-material/Dashboard';

export const AutheticationRoutes = [
    {
      id: 1,
      name: "Login",
      component: Login,
      path: "/login",
    },
    {
      id: 2,
      name: "Signup",
      component: SignUp,
      path: "/",
    },
  ];
  
  export const AuthenticatedRoutes = {
    id: 1,
    name: "Application",
    path: "/app",
    children: [
      {
        id: 11,
        name: "Dashboard",
        icon: DashboardIcon,
        component: Dashboard,
        path: "/app/dashboard",
      },
      {
        id: 12,
        name: "income",
        icon: AddCard,
        component: Income,
        path: "/app/income",
      },
      {
        id: 13,
        name: "expenses",
        icon: IosShare,
        component: Expenses,
        path: "/app/expenses",
      },
      {
        id: 14,
        name: "investment",
        icon: Savings,
        component:Investment,
        path: "/app/investment",
      },
      {
        id: 15,
        name: "Loan",
        icon: CreditScore,
        component:Loan,
        path: "/app/loan",
      },
      {
        id: 16,
        name: "Budget",
        icon: AccountBalance,
        component: Budget,
        path: "/app/budget",
      },
    ],
  };