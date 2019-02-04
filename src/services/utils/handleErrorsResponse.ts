import { Error } from '../models'

const handleErrorsResponse = (): Error => ({
  errorMessage: 'The service is down, please try again.',
})

export default handleErrorsResponse
