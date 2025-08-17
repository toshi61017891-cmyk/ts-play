/**
 * Split an array into chunks of a fixed size.
 *
 * @param arr - Source array (not mutated)
 * @param size - Chunk size (> 0)
 * @returns Array of chunks
 * @throws Error if size <= 0
 *
 * @example
 * chunk([1,2,3,4,5], 2) // => [[1,2],[3,4],[5]]
 * chunk(['a','b','c'], 1) // => [['a'],['b'],['c']]
 */
export function chunk<T>(arr: readonly T[], size: number): T[][] {
  if (!Number.isFinite(size) || size <= 0) {
    throw new Error('size must be > 0')
  }
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size))
  }
  return out
}
