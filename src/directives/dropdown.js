export default {
  bind(el,bind,value) {
    // 当前元素的事件处理器
    const hander = () =>{
      // 找到当前元素的父元素，切换它的 open 类
      el.parentElement.classList.toggle('open')
    }

    // document 的事件处理器
    const doucmentHander = e =>{
      // 当前点击的目标
      const target = e.target
      // 如果点击的是当前元素，或者当前元素的后代节点，就不处理
      if(target.isSameNode(el) || el.contains(target)) return
      // 找到当前元素的父元素，移除 open 类
      el.parentElement.classList.remove('open')
    }

    el.addEventListener('click',hander,false)
    document.addEventListener('click',doucmentHander,false)

    el.destroy = () =>{
      el.removeEventListener('click',hander,false)
      doucment.removeEventListener('click',doucmentHander,false)
      el.destroy = null
    }
  },
  unbind(el){
    el.destroy()
  }
}
