import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet } from "react-router";
import StudentPage from "./pages/students/studentPage";
import LoginPage from "./pages/login/loginPage";
import DepartmentPage from "./pages/departments/departmentPage";
import ProfilePage from "./pages/profile/profilePage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import SubjectPage from "./pages/subjects/subjectPage";
import SideBar from "./components/sidebar/sideBar";
import UserPage from "./pages/user/UserPage";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";

const Layout = () => {
    return (
        <div
            className="layout-app"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Đảm bảo nội dung không bị tràn ra ngoài viền bo
                border: "2px solid #ffffff", // Thêm viền nếu cần
            }}
        >
            <SideBar>
                <Outlet />
            </SideBar>
        </div>
    );
};

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                { index: true, element: <DashboardPage /> },
                {
                    path: "/students",
                    element: <StudentPage />,
                },

                {
                    path: "/departments",
                    element: <DepartmentPage />,
                },
                {
                    path: "profile",
                    element: <ProfilePage />,
                },

                {
                    path: "subjects",
                    element: <SubjectPage />,
                },
                {
                    path: "users",
                    element: <UserPage />,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
