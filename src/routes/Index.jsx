// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react-refresh/only-export-components */

// import Home from "../pages/home/Home";
// import MainLayout from "../layouts/main";
// import PrivateRoutes from "../components/PrivateRoutes";
// import AuthLayout from "../pages/auth";
// import Login from "../pages/auth/Login";


// const Routes = [
//     {
//         path: "/"  ,
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             //
//             // {
//             // 	path: '*',
//             // 	element: <NotFound />
//             // }
//         ],
//     },
//     {
//         path: "/auth",
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: "login",
//                 element: <Login />,
//             },
//         ],
//     },
// ];

// const authCheck = routes => routes.map(route => {
// 	if (route?.auth) {
// 		route.element = <PrivateRoutes>{route.element}</PrivateRoutes>
// 	}
// 	if (route?.children) {
// 		route.children = authCheck(route.children)
// 	}
// 	return route
// })

// export default authCheck(Routes)
// // import { Routes, Route } from "react-router-dom";
// // import Home from "../pages/Home";
// // import MainLayout from "../layouts/main";
// // import AuthLayout from "../pages/auth";
// // import Login from "../pages/auth/Login";
// // import PrivateRoutes from "../components/PrivateRoutes";

// // const AppRoutes = () => {

// //   return (
// //       <Routes>
// // 		<Route element={PrivateRoutes}>
// //         <Route path={"/"} element={<MainLayout />}        >
// //           <Route index element={<Home />} />
// //         </Route>
// // 		</Route>
// //         <Route path="/auth" element={<AuthLayout />}>
// //           <Route path="login" element={<Login />} />
// //         </Route>
// //       </Routes>
// //   );
// // };

// // export default AppRoutes;
