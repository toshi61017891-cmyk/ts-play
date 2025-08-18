import { ENV, mask } from './env'

const nums = [1, 2, 3].map((n) => n * 2)
export default nums

const message = 'hello'
console.log(message)
console.log(nums)
console.log('API', ENV.API_BASE_URL, mask(ENV.API_KEY))
import { chunk } from './chunk'
console.log('chunks(1..5,2)=', chunk([1, 2, 3, 4, 5], 2))
console.log('chunks(a..c,1)=', chunk(['a', 'b', 'c'], 1))
const shouldFail = 123
console.log('shouldFail', shouldFail)
console.log('PR test')
