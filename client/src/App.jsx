import AuthLayout from "./components/authentication/layout";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/authentication/login";
import AuthRegister from "./pages/authentication/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminProducts from "./pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/checkauth";
import UnauthPage from "./pages/un-auth";


function App() {
  const isAuthenticated=false;
  const user=null;
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
  
      <Routes>
         <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout/></CheckAuth>}>
              <Route path="login" element={<AuthLogin/>}></Route>
              <Route path="register" element={<AuthRegister/>}></Route>
         </Route>
             <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout/></CheckAuth>}>
             <Route path="dashboard" element={<AdminDashboard/>}/>
             <Route path="features" element={<AdminFeatures/>}/>
             <Route path="orders" element={<AdminFeatures/>}/>
             <Route path="products" element={<AdminProducts/>}/>
        </Route>
        <Route path="/shop" element={ <CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout/></CheckAuth>}>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
        </Route>
        <Route path="*" element={<NotFound/>  }></Route>
        <Route path="/unauth-page" element={<UnauthPage/>  }></Route>

      </Routes>

    </div>
    
  );
}

export default App
