import React from 'react'
import { flag, promotions } from '../assets'
import useFecth from '../hooks/useFetch'

const Promotion = () => {
  const { data, loading, error } = useFecth(`${process.env.REACT_APP_API}/hotels/count/city?cities=London,Bali,Miami,Chicago,Dallas`)

  if (loading) return <>Loading...</>

  return (
    <div className='pt-32 pb-12 relative -z-10'>
      <div className='container px-4 mx-auto'>
        <div className="pl-2 mb-4">
          <h1 className='font-bold text-2xl text-slate-900'>Popular destinations</h1>
          <p className='text-slate-500'>These popular destinations have a lot to offer</p>
        </div>
        {/* Row 1 */}
        <div className="flex flex-wrap">

          <div className='p-2 w-full md:w-1/2'>
            <div className='w-full h-[270px] relative hover:ring cursor-pointer rounded-md overflow-hidden'>
              <img src={promotions[0]} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 right-0 z-10 bg-primary w-max py-1 px-2 rounded-bl-xl'>
                <span className='w-full flex items-center font-bold text-lg text-white'>
                  London 
                  <img src={flag} alt="" className='w-6 h-4 object-contain ml-1' />
                </span>
                <span className='w-full text-slate-200'>{data[0]} Properties</span>
              </div>
            </div>
          </div>
          
          <div className="p-2 w-full md:w-1/2">
            <div className='w-full h-[270px] relative hover:ring cursor-pointer rounded-md overflow-hidden'>
              <img src={promotions[1]} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 right-0 z-10 bg-primary w-max py-1 px-2 rounded-bl-xl'>
                <span className='w-full flex items-center font-bold text-lg text-white'>
                  Bali 
                  <img src={flag} alt="" className='w-6 h-4 object-contain ml-1' />
                </span>
                <span className='w-full text-slate-200'>{data[1]} Properties</span>
              </div>
            </div>
          </div>

        </div>
        {/* Row 2 */}
        <div className="flex flex-wrap">

          <div className="p-2 w-full md:w-1/3">
            <div className='w-full h-[270px] relative hover:ring cursor-pointer rounded-md overflow-hidden'>
              <img src={promotions[2]} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 right-0 z-10 bg-primary w-max py-1 px-2 rounded-bl-xl'>
                <span className='w-full flex items-center font-bold text-lg text-white'>
                  Miami 
                  <img src={flag} alt="" className='w-6 h-4 object-contain ml-1' />
                </span>
                <span className='w-full text-slate-200'>{data[2]} Properties</span>
              </div>
            </div>
          </div>
          
          <div className="p-2 w-full md:w-1/3">
            <div className='w-full h-[270px] relative hover:ring cursor-pointer rounded-md overflow-hidden'>
              <img src={promotions[3]} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 right-0 z-10 bg-primary w-max py-1 px-2 rounded-bl-xl'>
                <span className='w-full flex items-center font-bold text-lg text-white'>
                  Chicago 
                  <img src={flag} alt="" className='w-6 h-4 object-contain ml-1' />
                </span>
                <span className='w-full text-slate-200'>{data[3]} Properties</span>
              </div>
            </div>
          </div>
          
          <div className="p-2 w-full md:w-1/3">
            <div className='w-full h-[270px] relative hover:ring cursor-pointer rounded-md overflow-hidden'>
              <img src={promotions[4]} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 right-0 z-10 bg-primary w-max py-1 px-2 rounded-bl-xl'>
                <span className='w-full flex items-center font-bold text-lg text-white'>
                  Dallas 
                  <img src={flag} alt="" className='w-6 h-4 object-contain ml-1' />
                </span>
                <span className='w-full text-slate-200'>{data[4]} Properties</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Promotion