import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { Service } from '@vtex/api'
import { method } from '@vtex/api'

import { Clients } from './clients'
import { proxy } from './middlewares/proxy'

const TIMEOUT_MS = 800
const RENDER_TIMEOUT_MS = 10 * 1e3

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    proxy: {
      concurrency: 10,
      retries: 1,
      timeout: RENDER_TIMEOUT_MS,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    code: number
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    proxy: method({
      GET: [proxy],
    })
  },
})
