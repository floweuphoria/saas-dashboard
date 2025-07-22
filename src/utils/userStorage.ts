export interface UserData {
  email: string
  sdk: string
  useCase: string
  signedUp: boolean
}

const USER_STORAGE_KEY = 'temporal_user_data'

export const saveUserData = (userData: Omit<UserData, 'signedUp'>): void => {
  const dataWithSignup = { ...userData, signedUp: true }
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(dataWithSignup))
}

export const getUserData = (): UserData | null => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export const clearUserData = (): void => {
  localStorage.removeItem(USER_STORAGE_KEY)
}

export const isUserSignedUp = (): boolean => {
  const userData = getUserData()
  return userData?.signedUp === true
}

export const generateRandomUser = (): UserData => {
  const names = ['alex', 'jordan', 'casey', 'taylor', 'morgan', 'riley', 'sage', 'quinn']
  const domains = ['company.com', 'startup.io', 'tech.dev', 'example.org']
  const sdks = ['go', 'typescript']
  const useCases = ['applied-ai', 'long-running-workflows', 'data-etl']
  
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomDomain = domains[Math.floor(Math.random() * domains.length)]
  const randomSdk = sdks[Math.floor(Math.random() * sdks.length)]
  const randomUseCase = useCases[Math.floor(Math.random() * useCases.length)]
  
  return {
    email: `${randomName}@${randomDomain}`,
    sdk: randomSdk,
    useCase: randomUseCase,
    signedUp: false // Mark as not signed up via form
  }
}

export const getOrCreateUserData = (): UserData => {
  const existingUser = getUserData()
  if (existingUser) {
    return existingUser
  }
  
  const randomUser = generateRandomUser()
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(randomUser))
  return randomUser
}

export const generateNewRandomUser = (): UserData => {
  const randomUser = generateRandomUser()
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(randomUser))
  return randomUser
}