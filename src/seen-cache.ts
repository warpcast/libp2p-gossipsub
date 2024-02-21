export interface SeenCache<T> {
  /**
   * Adds a message to the current window and the cache
   * Returns true if the message is not known and is inserted in the cache
   */
  put(key: string | number, value: T): boolean
  /**
   * Gets a message from the cache
   */
  get(key: string | number): T | undefined
  /**
   * Checks if a message is in the cache
   * @param key
   */
  has(key: string): boolean
  /**
   * Removes all messages from the cache
   */
  clear(): void
  /**
   * Removes expired messages from the cache
   */
  prune(): void
  /**
   * Gets the number of messages in the cache
   */
  size: number
}
