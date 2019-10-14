import { RESET_ERRORS } from '../actions/types'

export const resetErrors = () => {
  return {
    type: RESET_ERRORS,
    payload: {}
  }
}