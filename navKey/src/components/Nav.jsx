import { Route, Switch } from "react-router-dom";

import NoMatch from "./NoMatch";
import RolesRoute from "./RolesRoute";
import SecretBooks from "./SecretBooks";
import React from 'react';
import { useState, Suspense } from "react";

import '../App.css'


// const Nav = () => (
//   <>
//     <Menu/>
//     <Switch>
//       <Route exact path="/">
//         <BookList/>
//       </Route>
//       <Route exact path="/books/new">
//         <BookForm/>
//       </Route>
//       <Route path="/books/:bookId">
//         <BookDetails/>
//       </Route>
//       <RolesRoute path="/secret" roles={['admin']}>
//         <SecretBooks/>
//       </RolesRoute>
//       <Route path="*">
//         <NoMatch/>
//       </Route>
//     </Switch>
//   </>
// )


const Content = () => <h1>Pagina de contenido de servicios</h1>;


const SideMenu = React.lazy( () => import("./sidebar/SideMenu") );

const Footer = React.lazy( () => import("footer/Footer") );
const Header = React.lazy( () => import("header/Header") );

const TasksContent = React.lazy( () => import("tasks/TaskContent") );
const ProductContent = React.lazy( () => import("products/ProductContent") );
const OrdersContent = React.lazy( () => import("orders/OrdersContent") );

const HomeContent = React.lazy( () => import("home/HomeContent") );

function Nav() {
  const [inactive, setInactive] = useState(false);

  

  return (
    
    <div className="App">


      <Suspense fallback={<div>loading...</div>}>

        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      
        <div className={`container ${inactive ? "inactive" : ""}`}>
          
          
          
         {/* HEADER */}
         <Header/>

      

          <Switch>
            <Route exact path={"/"}>
              <HomeContent />
            </Route>
            <Route exact path={"/services"}>
              <Content />
            </Route>
            <Route path={"/tasks/TaskContent"}>
              <TasksContent />
            </Route>
            <Route path={"/products/ProductContent"}>
              <ProductContent />
            </Route>
            <Route path={"/orders/OrdersContent"}>
              <OrdersContent />
            </Route>
            {/* <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
            </Route> */}

            {/* rutas con roles!! */}
            <RolesRoute path="/secret" roles={['admin']}>
                 <SecretBooks/>
           </RolesRoute>

           {/* rutas no encontradas */}
           <Route path="*">
              <NoMatch/>
           </Route>

          </Switch>
         

          {/* footer */}

          <div><Footer/></div>
          

        </div>
       
      </Suspense>

    </div>
  );
}

export default Nav
