import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Assignments from "./pages/Assignments";
import Articles from "./pages/Articles";
import StudentArticles from "./pages/StudentArticles";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import Settings from "./pages/Settings";
import TeacherClasses from "./pages/TeacherClasses";
import TeacherAssignments from "./pages/TeacherAssignments";
import TeacherStudents from "./pages/TeacherStudents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="edulearn-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/courses" element={<MyCourses />} />
            <Route path="/student/assignments" element={<Assignments />} />
            <Route path="/student/articles" element={<StudentArticles />} />
            <Route path="/student/profile" element={<Profile />} />
            <Route path="/student/settings" element={<Settings />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/classes" element={<TeacherClasses />} />
            <Route path="/teacher/assignments" element={<TeacherAssignments />} />
            <Route path="/teacher/students" element={<TeacherStudents />} />
            <Route path="/teacher/articles" element={<Articles />} />
            <Route path="/teacher/profile" element={<Profile />} />
            <Route path="/teacher/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<MyCourses />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
