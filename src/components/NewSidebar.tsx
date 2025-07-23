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
import { NewBadge } from './NewBadge'

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
  badge?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active = false, badge }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer ${
        active ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
      }`}
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </div>
      {badge && <span className="ml-2">{badge}</span>}
    </Link>
  )
}

export const NewSidebar: React.FC = () => {
  const location = useLocation()
  
  return (
    <aside className="w-[184px] bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-900 flex flex-col h-full">
      <div className="p-4">
        <div className="bg-indigo-600 rounded-lg p-2 flex items-center justify-start">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" 
            viewBox="0 0 100 100" 
            width="24" 
            height="24" 
            className="fill-current text-white"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M31.5463 31.5462C23.5873 32.693 16.5393 34.5814 11.1945 37.0669C8.17255 38.4722 5.49221 40.1613 3.51061 42.187C1.51225 44.2298 2.48353e-07 46.8655 0 50C0 53.1345 1.51225 55.7703 3.51062 57.8131C5.49221 59.8387 8.17256 61.5278 11.1945 62.9331C16.5393 65.4187 23.5873 67.307 31.5463 68.4538C32.693 76.4127 34.5814 83.4607 37.067 88.8055C38.4723 91.8275 40.1613 94.5078 42.187 96.4894C44.2298 98.4877 46.8655 100 50 100C53.1374 100 55.7729 98.4839 57.8136 96.4828C59.837 94.4986 61.5229 91.8154 62.9251 88.7916C65.4052 83.4434 67.2887 76.3924 68.4342 68.4342C76.3924 67.2886 83.4434 65.4052 88.7916 62.9251C91.8154 61.5229 94.4986 59.837 96.4828 57.8136C98.4839 55.7729 100 53.1373 100 50C100 46.8655 98.4877 44.2298 96.4894 42.187C94.5078 40.1613 91.8275 38.4722 88.8055 37.0669C83.4607 34.5814 76.4127 32.693 68.4538 31.5463C67.307 23.5873 65.4187 16.5393 62.9331 11.1945C61.5278 8.17255 59.8387 5.4922 57.8131 3.51061C55.7702 1.51225 53.1345 2.48353e-07 50 0C46.8655 0 44.2298 1.51225 42.187 3.51062C40.1613 5.49221 38.4722 8.17255 37.0669 11.1945C34.5814 16.5393 32.693 23.5873 31.5463 31.5462ZM40.1218 30.6199C46.6904 30.1307 53.3096 30.1307 59.8782 30.6199C58.8023 24.132 57.2245 18.6816 55.3769 14.7084C54.2152 12.2105 53.0394 10.4985 51.9857 9.46763C50.949 8.45356 50.2908 8.33333 50 8.33333C49.7092 8.33333 49.051 8.45356 48.0143 9.46762C46.9606 10.4985 45.7848 12.2105 44.6232 14.7084C42.7755 18.6816 41.1978 24.132 40.1218 30.6199ZM30.6199 59.8782C30.1308 53.3096 30.1308 46.6904 30.6199 40.1218C24.132 41.1978 18.6816 42.7755 14.7084 44.6232C12.2105 45.7848 10.4985 46.9606 9.46763 48.0144C8.45356 49.051 8.33333 49.7093 8.33333 50C8.33333 50.2908 8.45356 50.9491 9.46763 51.9857C10.4985 53.0395 12.2105 54.2153 14.7084 55.3769C18.6816 57.2245 24.132 58.8023 30.6199 59.8782ZM39.0663 39.0663C47.4383 38.3286 55.9175 38.4413 64.2566 39.4045C73.0116 40.4157 80.3118 42.3074 85.2916 44.6232C87.7895 45.7848 89.5015 46.9606 90.5324 48.0143C91.5464 49.051 91.6667 49.7092 91.6667 50C91.6667 50.2879 91.5478 50.9439 90.5328 51.9789C89.5009 53.0313 87.7868 54.2053 85.2858 55.3651C80.3001 57.6771 72.9936 59.5643 64.2369 60.5758L60.9549 60.9548L60.5758 64.2368C59.5644 72.9936 57.6771 80.3001 55.3651 85.2858C54.2053 87.7868 53.0313 89.5009 51.979 90.5328C50.9439 91.5478 50.288 91.6667 50 91.6667C49.7093 91.6667 49.051 91.5464 48.0144 90.5324C46.9606 89.5015 45.7848 87.7895 44.6232 85.2916C42.3074 80.3118 40.4157 73.0116 39.4045 64.2566C38.4413 55.9175 38.3286 47.4382 39.0663 39.0663Z" 
            />
          </svg>
        </div>
      </div>
      <nav className="flex-1">
        <NavItem icon={<Eye size={18} />} label="Workflows" to="/" active={location.pathname === '/'} />
        <NavItem icon={<Clock size={18} />} label="Schedules" to="/schedules" active={location.pathname === '/schedules'} />
        <NavItem icon={<Layers size={18} />} label="Batch" to="/batch" active={location.pathname === '/batch'} />
        <NavItem icon={<Server size={18} />} label="Deployments" to="/deployments" active={location.pathname === '/deployments'} />
        <NavItem icon={<Folder size={18} />} label="Namespaces" to="/namespaces" active={location.pathname === '/namespaces'} />
        <NavItem icon={<Atom size={18} />} label="Nexus" to="/nexus" active={location.pathname === '/nexus'} badge={<NewBadge />} />
        <div className="border-t border-indigo-600 my-2"></div>
        <NavItem icon={<BarChart2 size={18} />} label="Usage" to="/usage" active={location.pathname === '/usage'} />
        <NavItem icon={<CreditCard size={18} />} label="Billing" to="/billing" active={location.pathname === '/billing'} />
        <NavItem icon={<Settings size={18} />} label="Settings" to="/settings" active={location.pathname === '/settings'} />
        <div className="border-t border-indigo-600 my-2"></div>
        <NavItem icon={<LifeBuoy size={18} />} label="Support" to="/support" active={location.pathname === '/support'} />
        <NavItem icon={<FileText size={18} />} label="Docs" to="/docs" active={location.pathname === '/docs'} />
        <NavItem icon={<Home size={18} />} label="Welcome" to="/welcome" active={location.pathname === '/welcome'} />
      </nav>
      <div className="p-4 text-white text-center">
        <div className="border border-indigo-500/30 rounded p-3 mb-2">
          <div className="text-sm font-medium text-white">$4,383 credits</div>
          <div className="text-xs text-indigo-200">remain</div>
          <div className="text-xs text-indigo-200">Expiring in 237 days</div>
        </div>
        <div className="text-xs text-indigo-300">2.38.2</div>
      </div>
    </aside>
  )
}