import React, { useState } from 'react'
import illustration from './assets/images/illustration-empty.svg';
import { MdOutlineCurrencyPound } from "react-icons/md";
import { MdPercent } from "react-icons/md";
import calculator from './assets/images/icon-calculator.svg'


// import './App.css'
function App() {
  const [value, setValue] = useState(null);

  const formatNumberWithCommas = (number) => {
    if (!number) return "";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle input changes
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(inputValue)) { // Ensure it's a valid number
      setValue(inputValue);
    }
  };
  return (
    <>
      <div className='main '>
        <div className='w-full bg-[#e3f4fc]'>
          <div className='container w-auto block sm:flex sm:mx-auto sm:justify-center sm:items-center  h-screen'>
            <div className='block sm:flex bg-white rounded-3xl'>
              <div className=' w-auto sm:w-[50%] p-5 '>
                <form>
                  <div className='block sm:flex justify-between items-center'>
                    <h2 className='font-bold text-xl PlusJakartaSans-Bold text-[#182c37] mb-1 sm:mb-5 mt-3'>Mortgage Calculator</h2>
                    <p><a href="#" className='underline PlusJakartaSans-Medium text-sm text-[#7d8c90]'>ClearAll</a></p>
                  </div>
                  <div className='space-y-2 mt-5 relative '>
                    <p className='text-[#7d8c90] text-sm PlusJakartaSans-Medium'>Mortgage Amount</p>
                    <div className='w-full border border-[#9eabb1] h-[45px] rounded py-1.5 px-5 focus-within:border-[#d8da2d]'>
                      <input type="text" value={formatNumberWithCommas(value)} onChange={handleChange} className='absolute top-8 w-[210px] sm:w-auto outline-none rounded py-1 px-8 PlusJakartaSans-Bold text-lg text-[#25323a]' />
                    </div>
                    <div className='w-[39px] h-[42px] bg-[#e2f4fe] absolute top-[21px] left-[2px]'><MdOutlineCurrencyPound className='absolute top-3 left-2 text-[16px] PlusJakartaSans-Bold text-[#5a6e77]' /></div>
                  </div>
                  <div className='w-full block sm:flex sm:gap-5  '>
                    <div className='mt-5 relative'>
                      <p className='text-[#7d8c90] text-sm my-2 PlusJakartaSans-Medium'>Mortgage Term</p>
                      <div className='w-full sm:w-[289px] border border-[#9eabb1] h-[45px] rounded py-1.5 px-1 focus-within:border-[#d8da2d]'>
                        <input type="text" className='absolute top-8 sm:top-10 w-[150px] outline-none rounded py-1 px-4 PlusJakartaSans-Bold text-lg text-[#25323a]' />
                      </div>
                      <div className='w-[65px] h-[42px] bg-[#e2f4fe] absolute top-[30px] sm:top-[37px] right-[2px]'><span className='absolute top-2 left-3 text-[16px] PlusJakartaSans-Bold text-[#5a6e77]'> years</span></div>
                    </div>
                    <div className='mt-5 relative'>
                      <p className='text-[#7d8c90] my-2 PlusJakartaSans-Medium text-sm'>Interest Rate</p>
                      <div className='w-full sm:w-[289px] border border-[#9eabb1] h-[45px] rounded py-1.5 px-1 focus-within:border-[#d8da2d]'>
                        <input type="text" className='absolute top-8 sm:top-10 w-[150px] outline-none rounded py-1 px-4 PlusJakartaSans-Bold text-lg text-[#25323a]' />
                      </div>
                      <div className='w-[39px] h-[42px] bg-[#e2f4fe] absolute top-[30px] sm:top-[37px] right-[2px]'><MdPercent className='absolute top-3 left-2 text-[16px] PlusJakartaSans-Bold text-[#5a6e77]' /></div>
                    </div>
                  </div>
                  <div className='space-y-3 mt-5'>

                    <p className='text-[#7d8c90] text-sm my-2 PlusJakartaSans-Medium'>Mortgage Type</p>

                    <div>
                      <div className='w-full border border-[#9eabb1] h-[45px] rounded py-1.5 px-5 relative'>
                        <input type="radio" name='radio' className='absolute top-4 cursor-pointer ' />
                        <span className='absolute top-2 left-12 font-bold text-base PlusJakartaSans-Bold text-[#182c37]'>Repayments</span>
                      </div>

                    </div>
                    <div>
                      <div className='w-full border border-[#9eabb1] h-[45px] rounded py-1.5 px-5 relative'>
                        <input type="radio" name='radio' className='absolute top-4 cursor-pointer' />
                        <span className='absolute top-2 left-12 font-bold text-base PlusJakartaSans-Bold text-[#182c37]'>Interest Only</span>
                      </div>
                    </div>
                  </div>
                  <div className='relative sm:px-3'>
                    <button className=' w-full sm:w-[300px] bg-[#dbd92f] py-2 text-sm sm:text-base font-bold rounded-full mt-4  cursor-pointer PlusJakartaSans-Bold text-[#182c37]'>Calculate Repayments</button>
                    <img src={calculator} alt="calculator" className='absolute top-6 left-6 sm:left-10 w-5 sm:w-6' />
                  </div>
                </form>
              </div>
              {/* second div */}
              <div className='w-auto sm:w-[50%] bg-[#133040] sm:rounded-e-3xl sm:rounded-es-[80px] flex justify-center items-center'>
                <div>
                  <div className='flex justify-center items-center text-center'>
                    <img src={illustration} alt="illustration-empty.svg" className='w-[150px]' />
                  </div>
                  <div className='text-center px-10 '>
                    <h2 className='text-[#fffffe] mt-5 font-bold text-xl  PlusJakartaSans-Bold'>Results shown here</h2>
                    <p className='my-6 text-[#a2bfd1] text-sm PlusJakartaSans-Medium'>Complete the form and click "calculate repayments" to seewant your monthly repayments would be.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
