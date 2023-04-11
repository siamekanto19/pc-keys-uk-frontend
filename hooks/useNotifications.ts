import { toast } from 'react-hot-toast'

export function useNotifications() {
  const showError = (error: any) => {
    toast.error(error.message)
  }
  const showSuccess = (message: string) => {
    toast.success(message)
  }

  return { showError, showSuccess }
}
