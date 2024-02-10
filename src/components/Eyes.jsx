import { useState } from "react";
import { useEffect } from "react";

function Eyes() {

    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{

            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            //Convert angle from radian to deg and [1 rad = 180/Math.PI]
            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
            setRotate(angle-180)
        })
    },[])

  return (
    <div className=" eyes w-full h-screen overflow-hidden">
      <div className="flex items-center justify-center w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="flex items-center justify-center just gap-10 md:px-8 h-64">
          <div className="flex items-center justify-center w-[15vw] h-[15vw]  bg-white rounded-full">
            <div className="relative bg-black w-2/3 h-2/3 text-2xl rounded-full ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw]  bg-white rounded-full">
            <div className="relative bg-black w-2/3 h-2/3 text-2xl rounded-full ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                    <div className="bg-white w-10 h-10 rounded-full"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
