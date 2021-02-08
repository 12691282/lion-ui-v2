import NProgress from 'nprogress'
import router from './index'

//进度条样式
import 'nprogress/nprogress.css'

NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

 
router.beforeEach((to, from, next) => {
   // 每次切换页面时，调用进度条
   NProgress.start();
  
    setTimeout(()=>{
        next()
    },1000) 
   
})  

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})