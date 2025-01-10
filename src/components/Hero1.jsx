import React from 'react'
import '../App.css'
import { lazy } from 'react'

export const Hero1 = () => {
  return (
    <>
    <section className='m-32  flex justify-between'>
        <div>
        <h2 className='text-3xl font-bold w-[550px] text-stone-500 gap-x-4'>Simplified Documentation for Smarter Medical Solutions</h2>
        <aside className='mt-12 flex gap-8'>
            <main>
                <div className='flex flex-col gap-8'>
                <img src="../src/assets/record.png" alt="" width={"50px"} height={"50px"} loading='lazy' />
                    <img src="../src/assets/patient.png" alt="" width={"50px"} height={"50px"} loading='lazy' />
                    <img src="../src/assets/social-life.png" alt="" width={"50px"} height={"50px"} loading='lazy' />
                </div>
            </main>
            <main>
                <div className='flex flex-col gap-6 w-[470px] text-xl font-sans'>
                    <h3>
                    Record and summarize <span className='text-red-500'>doctor</span>-<span className='text-blue-500'>patient</span> conversations while identifying who said what.</h3>
                    <h3>
                    <span className='text-red-500'>checkups </span> & <span className='text-blue-500'>Emr</span> records to keep patient updated & support uninterepted care.
                    </h3>
                    <h3>Improves the patient-doctor relationship by enhancing   <span className='text-red-500'>care</span> & <span className='text-blue-500'>diagnostics</span>.
                    </h3>
                </div>
            </main>
        </aside>
        </div>
        <div>
        <video src="../src/assets/Doctor checking patient in clinic.mp4" muted autoPlay loop width="400px" onLoad={lazy}></video>
        </div>
    </section>
    </>
  )
}
