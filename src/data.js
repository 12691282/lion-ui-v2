export const routeArr = [
     {
         name:'系统管理',
         isHide:true,
         path:"",
         component:"layout",
         children:[
            { 
                path: '/system/role',
                name: '角色管理'
            },
            { 
                path: '/system/user',
                name: '用户管理'
            },
            { 
                path: '/system/menu',
                name: '菜单管理'
            }
         ]

     }

    
]