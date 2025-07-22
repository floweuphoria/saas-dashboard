import React, { useState } from 'react'
import { X } from 'lucide-react'
import { getUserData, saveUserData } from '../utils/userStorage'
import { syncUserWithFrigade } from '../utils/frigadeApi'
import segment from '../utils/segment'

interface ProfileUpdateModalProps {
  isOpen: boolean
  onClose: () => void
  onProfileUpdate: () => void
}

export const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({
  isOpen,
  onClose,
  onProfileUpdate
}) => {
  const currentUser = getUserData()
  const [formData, setFormData] = useState({
    sdk: currentUser?.sdk || '',
    useCase: currentUser?.useCase || ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const sdkOptions = [
    { value: 'go', label: 'Go' },
    { value: 'typescript', label: 'TypeScript' }
  ]

  const useCaseOptions = [
    { value: 'applied-ai', label: 'Applied AI' },
    { value: 'long-running-workflows', label: 'Long Running Workflows' },
    { value: 'data-etl', label: 'Data & ETL' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!currentUser) return

    setIsLoading(true)
    
    try {
      // Update stored user data
      const updatedUserData = {
        email: currentUser.email,
        sdk: formData.sdk,
        useCase: formData.useCase
      }
      
      saveUserData(updatedUserData)
      
      // Sync with Frigade
      await syncUserWithFrigade({ ...updatedUserData, signedUp: currentUser.signedUp })
      
      // Track profile update event
      segment.track('Profile Updated', {
        email: currentUser.email,
        oldSdk: currentUser.sdk,
        newSdk: formData.sdk,
        oldUseCase: currentUser.useCase,
        newUseCase: formData.useCase,
        timestamp: new Date().toISOString()
      })
      
      // Notify parent component
      onProfileUpdate()
      onClose()
    } catch (error) {
      console.error('Failed to update profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: 'sdk' | 'useCase', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!isOpen || !currentUser) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X size={24} />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Update Profile
              </h3>
              
              <div className="mb-4 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {currentUser.email}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="sdk" className="block text-sm font-medium text-gray-700 mb-2">
                    SDK Preference
                  </label>
                  <select
                    id="sdk"
                    value={formData.sdk}
                    onChange={(e) => handleChange('sdk', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select an SDK</option>
                    {sdkOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Use Case
                  </label>
                  <select
                    id="useCase"
                    value={formData.useCase}
                    onChange={(e) => handleChange('useCase', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select a use case</option>
                    {useCaseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    disabled={isLoading || !formData.sdk || !formData.useCase}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Updating...' : 'Update Profile'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}