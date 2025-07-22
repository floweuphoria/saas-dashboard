import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Eye,
  Clock,
  Layers,
  Server,
  Folder,
  Atom,
  BarChart2,
  CreditCard,
  Settings,
  LifeBuoy,
  FileText,
  Home,
} from 'lucide-react'

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active = false }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 text-sm cursor-pointer ${
        active ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export const NewSidebar: React.FC = () => {
  const location = useLocation()
  
  return (
    <aside className="w-[184px] bg-indigo-700 flex flex-col h-full">
      <div className="p-4">
        <div className="bg-indigo-600 rounded-lg p-2 flex items-center justify-center">
          <div className="w-6 h-6 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 8V16L12 20L4 16V8L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M12 12L12 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 8L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <nav className="flex-1">
        <NavItem icon={<Eye size={18} />} label="Workflows" to="/" active={location.pathname === '/'} />
        <NavItem icon={<Clock size={18} />} label="Schedules" to="/schedules" active={location.pathname === '/schedules'} />
        <NavItem icon={<Layers size={18} />} label="Batch" to="/batch" active={location.pathname === '/batch'} />
        <NavItem icon={<Server size={18} />} label="Deployments" to="/deployments" active={location.pathname === '/deployments'} />
        <NavItem icon={<Folder size={18} />} label="Namespaces" to="/namespaces" active={location.pathname === '/namespaces'} />
        <NavItem icon={<Atom size={18} />} label="Nexus" to="/nexus" active={location.pathname === '/nexus'} />
        <div className="border-t border-indigo-600 my-2"></div>
        <NavItem icon={<BarChart2 size={18} />} label="Usage" to="/usage" active={location.pathname === '/usage'} />
        <NavItem icon={<CreditCard size={18} />} label="Billing" to="/billing" active={location.pathname === '/billing'} />
        <NavItem icon={<Settings size={18} />} label="Settings" to="/settings" active={location.pathname === '/settings'} />
        <div className="border-t border-indigo-600 my-2"></div>
        <NavItem icon={<LifeBuoy size={18} />} label="Support" to="/support" active={location.pathname === '/support'} />
        <NavItem icon={<FileText size={18} />} label="Docs" to="/docs" active={location.pathname === '/docs'} />
        <NavItem icon={<Home size={18} />} label="Welcome" to="/welcome" active={location.pathname === '/welcome'} />
      </nav>
      <div className="p-4 text-white text-center border-t border-indigo-600">
        <div className="font-medium">$4,383 credits</div>
        <div className="text-sm text-indigo-200">remain</div>
        <div className="text-sm text-indigo-200">Expiring in 238 days</div>
        <div className="text-xs text-indigo-300 mt-2">2.38.2</div>
      </div>
    </aside>
  )
}