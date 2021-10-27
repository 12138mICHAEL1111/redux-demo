  // const [style,setStyle]=useState({
  //   top:50,
  //   left:50,
  //   position: 'absolute',
  // })
  // const isDown = useRef(false)
  // const originalPosition =useRef({
  //   top:0,
  //   left:0,
  //   mouseX:0,
  //   mouseY:0
  // })

  // const onMouseDown = (e)=>{
  //   e.stopPropagation()
  //   // 元素对于画板
  //   const top = e.target.offsetParent.offsetTop;
  //   const left = e.target.offsetParent.offsetLeft
  //   // 鼠标对于浏览器
  //   const mouseY = e.clientY; 
  //   const mouseX = e.clientX;

  //   originalPosition.current={
  //     top,
  //     left,
  //     mouseX,
  //     mouseY
  //   }
  //   isDown.current = true
  // }

  // const onMouseMove = (e) =>{
  //   if(isDown.current===false){
  //     return
  //   } 
  //  console.log(e.target.offsetParent.offsetTop,e.target.offsetParent.offsetLeft)
  //   const top = originalPosition.current.top+(e.clientY-originalPosition.current.mouseY)
  //   const left = originalPosition.current.left+(e.clientX - originalPosition.current.mouseX)
  //   console.log(top,left)
  //   setStyle({
  //     top,
  //     left,
  //     position:'absolute'
  //   })
  // }

  // const onMouseUp = ()=>{
  //   isDown.current = false
  // }

      // <div className='dragSpace'>
    //   <div style={style} onMouseDown= {onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} >
    //     <button>move me </button>
    //   </div>
    // </div>
