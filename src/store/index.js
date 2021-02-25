import { createStore, createLogger } from 'vuex'
import permission from './modules/permission'
import cart from './modules/cart'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    permission,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})