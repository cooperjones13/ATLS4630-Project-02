'use client';

import {Canvas, useFrame} from '@react-three/fiber'
import {Icosahedron, OrbitControls} from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from "three"

function SpinningIcosahedron(){
    const meshRef = useRef<THREE.Mesh>(null)
    const mouse = useRef({x:0, y:0})

    useEffect(()=>{
        //
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove)
    })

    useFrame(()=>{
        if (!meshRef.current) return;

        meshRef.current.rotation.x += 0.004;
        meshRef.current.rotation.y += 0.003;

        //Mouse Interaction
        // meshRef.current.rotation.x += mouse.current.y *0.005;
        // meshRef.current.rotation.y += mouse.current.x *0.005;
        meshRef.current.position.x = -mouse.current.x*0.075;
        meshRef.current.position.y = -mouse.current.y*0.075;
    })

    return (
        <Icosahedron ref={meshRef} args={[3, 0]}>
            <meshToonMaterial color="#5e5bff" wireframe/>
        </Icosahedron>
    )
}

export default function Jumbotron(){

    return(
        <section className="relative bg-(--background) h-128 w-100p mx-auto">
            <Canvas className='absolute inset-0 z-0' camera={{ position: [0, 0, 15], fov: 25}}>
                <ambientLight intensity={0.8} />
               <SpinningIcosahedron/>
            </Canvas>
            <div className='absolute inset-0 z-10 w-100p h-100p flex flex-col justify-center align-center text-center gap-2'>
                <span className="font-black text-4xl">
                    Cooper Jones
                </span>
                <span className='text-xl'>
                    Front End Web Developer
                </span>
            </div>
      </section>
    )
};