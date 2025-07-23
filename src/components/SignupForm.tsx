import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface SignupFormData {
  email: string
  sdk: string
  useCase: string
}

interface SignupFormProps {
  onSignup: (data: SignupFormData) => void
}

const generateRandomEmail = () => {
  const firstNames = ['alex', 'sarah', 'mike', 'emma', 'david', 'lisa', 'john', 'anna', 'chris', 'maria'];
  const lastNames = ['smith', 'johnson', 'williams', 'jones', 'brown', 'davis', 'miller', 'wilson', 'moore', 'taylor'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const randomNum = Math.floor(Math.random() * 999) + 1;
  
  return `${firstName}.${lastName}${randomNum}@${domain}`;
};

export const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    sdk: '',
    useCase: ''
  })
  const [errors, setErrors] = useState<Partial<SignupFormData>>({})
  const navigate = useNavigate()

  useEffect(() => {
    setFormData(prev => ({ ...prev, email: generateRandomEmail() }));
  }, []);

  const sdkOptions = [
    { value: 'go', label: 'Go' },
    { value: 'typescript', label: 'TypeScript' }
  ]

  const useCaseOptions = [
    { value: 'applied-ai', label: 'Applied AI' },
    { value: 'long-running-workflows', label: 'Long Running Workflows' },
    { value: 'data-etl', label: 'Data & ETL' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: Partial<SignupFormData> = {}
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.sdk) newErrors.sdk = 'SDK selection is required'
    if (!formData.useCase) newErrors.useCase = 'Use case selection is required'
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit form
    onSignup(formData)
    navigate('/welcome')
  }

  const handleChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
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
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Get started with Temporal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Tell us a bit about yourself to personalize your experience
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.email ? 'ring-red-300' : 'ring-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="sdk" className="block text-sm font-medium leading-6 text-gray-900">
                Which SDK will you be using?
              </label>
              <div className="mt-2">
                <select
                  id="sdk"
                  name="sdk"
                  value={formData.sdk}
                  onChange={(e) => handleChange('sdk', e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.sdk ? 'ring-red-300' : 'ring-gray-300'
                  }`}
                >
                  <option value="">Select an SDK</option>
                  {sdkOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.sdk && (
                  <p className="mt-2 text-sm text-red-600">{errors.sdk}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium leading-6 text-gray-900">
                What's your primary use case?
              </label>
              <div className="mt-2">
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={(e) => handleChange('useCase', e.target.value)}
                  className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.useCase ? 'ring-red-300' : 'ring-gray-300'
                  }`}
                >
                  <option value="">Select a use case</option>
                  {useCaseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.useCase && (
                  <p className="mt-2 text-sm text-red-600">{errors.useCase}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}