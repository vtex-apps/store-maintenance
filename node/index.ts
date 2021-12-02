import { Service } from '@vtex/api'
import { method } from '@vtex/api'

import { proxy } from './middlewares/proxy'

// Export a service that defines route handlers and client options.
export default new Service({
  routes: {
    proxy: method({
      GET: [proxy],
    })
  },
})
