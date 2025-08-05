import React, { useState, useRef, useEffect } from 'react'
import * as Frigade from '@frigade/react'
import {
  ExternalLink,
  Clock,
  Monitor,
  ChevronDown,
  Settings2,
  LogOut,
  User,
  Edit,
  Shuffle,
  Users,
  X,
} from 'lucide-react'
import { getUserData, generateNewRandomUser } from '../utils/userStorage'
import { syncUserWithFrigade } from '../utils/frigadeApi'
import segment from '../utils/segment'
import { ProfileUpdateModal } from './ProfileUpdateModal'
import { InviteModal } from './InviteModal'

interface NewHeaderProps {
  onLogout: () => void
}

export const NewHeader: React.FC<NewHeaderProps> = ({ onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [inviteModalOpen, setInviteModalOpen] = useState(false)
  const [userData, setUserData] = useState(getUserData())
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase()
  }

  const handleLogout = () => {
    onLogout()
    setDropdownOpen(false)
  }

  const handleOpenProfileModal = () => {
    setProfileModalOpen(true)
    setDropdownOpen(false)
  }

  const handleProfileUpdate = () => {
    // Refresh user data after update
    setUserData(getUserData())
  }

  const handleRandomUser = async () => {
    try {
      // Generate new random user
      const newUser = generateNewRandomUser()
      
      // Update local state
      setUserData(newUser)
      setDropdownOpen(false)
      
      // Sync with Frigade
      await syncUserWithFrigade(newUser)
      
      // Track the random user generation
      segment.track('Random User Generated', {
        email: newUser.email,
        sdk: newUser.sdk,
        useCase: newUser.useCase,
        timestamp: new Date().toISOString()
      })
      
      // Force page reload to reinitialize all integrations with new user
      window.location.reload()
    } catch (error) {
      console.error('Failed to generate random user:', error)
    }
  }

  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center px-4 h-14">
        <div className="flex items-center border border-gray-200 rounded px-2 py-1 w-80">
          <span className="mr-2">
            <svg
              width="16"
              height="16"
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
              />
            </svg>
          </span>
          <span className="text-sm">quickstart-samarqui-16957b01.iiqno</span>
          <span className="ml-auto">
            <ExternalLink size={16} />
          </span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center ml-4 gap-2">
          <Frigade.Flow flowId="flow_E4E2crtW">
            {({ flow }) => {
              if (!flow || !flow.isVisible) {
                return null;
              }
              
              const inviteStep = flow.steps.get("invite-members");
              
              return (
                <div className="flex items-center text-sm bg-indigo-600 text-white rounded px-3 py-2 hover:bg-indigo-700 transition-colors">
                  <Users size={16} className="mr-2" />
                  <button 
                    onClick={() => setInviteModalOpen(true)}
                    className="flex items-center"
                  >
                    <span>Invite Members</span>
                  </button>
                  <button 
                    onClick={() => inviteStep?.complete()}
                    className="ml-2 hover:bg-indigo-800 rounded p-0.5 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              );
            }}
          </Frigade.Flow>
          <button className="flex items-center text-sm border border-gray-200 rounded px-2 py-1">
            <Clock size={16} className="mr-1" />
            <span>UTC</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button 
            onClick={() => (window as any).engagement.rc.open()}
            className="p-2 border border-gray-200 rounded"
          >
            <Monitor size={16} />
          </button>
          <button className="p-2 border border-gray-200 rounded">
            <Settings2 size={16} />
          </button>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 border border-gray-200 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <span className="font-medium">
                {userData ? getInitials(userData.email) : 'M'}
              </span>
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                      {userData ? getInitials(userData.email) : 'M'}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {userData?.email || 'user@example.com'}
                      </div>
                      {userData && (
                        <div className="text-xs text-gray-500">
                          {userData.sdk.charAt(0).toUpperCase() + userData.sdk.slice(1)} • {userData.useCase.replace('-', ' ')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleOpenProfileModal}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Edit size={16} className="mr-2" />
                  Update Profile
                </button>
                <button
                  onClick={handleRandomUser}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Shuffle size={16} className="mr-2" />
                  Random User
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <ProfileUpdateModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onProfileUpdate={handleProfileUpdate}
      />
      
      <InviteModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
      />
    </header>
  )
}