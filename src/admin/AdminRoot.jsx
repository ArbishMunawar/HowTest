import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminRoot() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50 p-4">
        <Outlet /> 
      </div>
    </div>
  );
}
