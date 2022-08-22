import { setupWorker } from 'msw'
import { handlers } from './handlers'

// @ts-ignore
export const worker = setupWorker(...handlers)
