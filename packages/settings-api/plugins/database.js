import fp from 'fastify-plugin'

export default fp(async function (fastify, opts) {
  fastify.decorate('db', new MockDatabase())
})

class MockDatabase {
  constructor() {
    this.db = {};
  }

  async saveSettings(userId, settings) {
    await this.#delay();
    this.db[userId] = settings;
  }

  async getSettings(userId) {
    await this.#delay();
    return this.db[userId];
  }

  // #delay() is a private method that returns a promise that resolves after 10ms
  // # is for private methods in javascript
  async #delay() {
    return new Promise(resolve => setTimeout(resolve, 10));
  }
}
