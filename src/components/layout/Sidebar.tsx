import { NavLink } from "@/components/NavLink";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings,
  Clock
} from "lucide-react";

interface SidebarProps {
  role: "executive" | "secretary";
}

const Sidebar = ({ role }: SidebarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: role === "executive" ? "/" : "/secretary" },
    { icon: Calendar, label: "Calendar", path: `/${role}/calendar` },
    { icon: Users, label: role === "executive" ? "Meetings" : "Executives", path: `/${role}/${role === "executive" ? "meetings" : "executives"}` },
    { icon: BarChart3, label: "Statistics", path: `/${role}/statistics` },
    { icon: Settings, label: "Settings", path: `/${role}/settings` },
  ];

  return (
    <aside className="w-64 bg-sidebar-bg text-sidebar-text min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-hover">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-text-active">TMS</h1>
            <p className="text-xs text-sidebar-text">Time Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-text hover:bg-sidebar-hover hover:text-sidebar-text-active transition-all"
                activeClassName="bg-sidebar-active text-sidebar-text-active"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Role Badge */}
      <div className="p-4 border-t border-sidebar-hover">
        <div className="bg-sidebar-hover rounded-lg p-3">
          <p className="text-xs text-sidebar-text uppercase tracking-wide">Current Role</p>
          <p className="text-sidebar-text-active font-semibold capitalize">{role}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
