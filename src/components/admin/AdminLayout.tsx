import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  Menu,
  X,
  ArrowLeft,
  Bell,
  Search,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/candidates", label: "Candidates", icon: Users, end: false },
  { to: "/admin/spaces", label: "Spaces", icon: Building2, end: true },
  { to: "/admin/settings", label: "Settings", icon: Settings, end: false },
];

export function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper-deep/40">
      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-navy-deep/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-line bg-paper transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Link to="/admin" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <button onClick={() => setOpen(false)} className="lg:hidden" aria-label="Close menu">
            <X className="h-5 w-5 text-slate" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <p className="eyebrow mb-3 px-2">Workspace</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-navy text-paper"
                      : "text-slate hover:bg-paper-deep hover:text-ink",
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-line p-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-slate hover:bg-paper-deep hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to website
          </Link>
        </div>
      </aside>

      {/* main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-line bg-paper/95 px-5 backdrop-blur-sm">
          <button onClick={() => setOpen(true)} className="lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5 text-ink" />
          </button>
          <div className="relative hidden max-w-sm flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-light" />
            <input
              type="search"
              placeholder="Search candidates, spaces..."
              className="w-full rounded-md border border-line bg-paper-deep/40 py-2 pl-9 pr-3 text-sm text-ink placeholder:text-slate-light focus:border-brass focus:outline-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="relative text-slate hover:text-ink" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brass" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-mono text-xs font-medium text-paper">
                7D
              </span>
              <div className="hidden sm:block">
                <p className="text-xs font-medium text-ink">Admin</p>
                <p className="text-[11px] text-slate">7 Doors HQ</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-5 sm:p-8">
          <div className="mb-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs text-amber-800">
            Demo admin panel — data is illustrative and resets on refresh. Frontend only.
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
