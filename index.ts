import { ENV, mask } from './env'

const nums = [1, 2, 3].map((n) => n * 2)
export default nums

const message = 'hello'
console.log(message)
console.log(nums)
console.log('API', ENV.API_BASE_URL, mask(ENV.API_KEY))
