
 
 

export const constantRoutes = [
  {
    path: '/' 
  }]
 


export default new VueRouter({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })