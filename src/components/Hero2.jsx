import React from 'react'

export const Hero2 = () => {
  return (
    <>
    <section className='m-32 flex justify-between'>
      <div>
      <video src="../src/assets/Robot Chat.mp4" muted autoPlay loop width="600px"></video>
      </div>
      <div>
    <h2 className='text-3xl font-bold w-[550px] text-stone-500 gap-x-4'>
    Personalized Healthcare through Precision AI</h2>
    <aside className='mt-12 flex gap-8'>
      <main>
        <div className='flex flex-col gap-8'>
          <img src="../src/assets/chart.png" alt=""width={'50px'} height={'50px'} loading='lazy'/>
          <img src="../src/assets/breach.png" alt=""width={'50px'} height={'50px'} loading='lazy'/>
          <img src="../src/assets/neev (1).svg" alt=""width={'50px'} height={'50px'} loading='lazy'/>
        </div>
      </main>
      <main>
        <div className='flex flex-col gap-6 w-[470px] text-xl font-sans'>
        <h3><span className='text-red-500'>[RAG]</span>Retrieval Augmented Graph systems improve <span className='text-blue-500'>real-time</span> accuracy in transcriptions and summaries.</h3>
        <h3>Ensures <span className='text-blue-500'>robust</span> patient confidentiality with top-tier <span className='text-red-500'>encryption</span> and <span className='text-red-500'>data protection</span>.</h3>
        <h3><span className='text-red-500'>Neev's</span> <span className='text-blue-500'>models</span> ensure accurate transcription of clinical terms, diagnoses, and treatments.</h3>
        </div>
      </main>
    </aside>
      </div>
    </section>
    </>
  )
}
