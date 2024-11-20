import React, { useState } from 'react'
import illustration from './assets/images/illustration-empty.svg';
import { MdOutlineCurrencyPound } from "react-icons/md";
import { MdPercent } from "react-icons/md";
import calculator from './assets/images/icon-calculator.svg'
import { useFormik } from 'formik'
import { calcutaleSchemas } from './Schemas';


// import './App.css'
function App() {
  const [value, setValue] = useState(null);

  const formatNumberWithCommas = (number) => {
    if (!number) return "";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Handle input changes
  const handleChanges = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(inputValue)) { // Ensure it's a valid number
      setValue(inputValue);
    }
  };

  const initialValues = {  //object
    amount: "",     //value 
    mortgage_term: "",
    interest_rate: "",
    radio: "",

  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({   // use formik
    initialValues: initialValues,
    validationSchema: calcutaleSchemas,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    }
  })
  console.log(errors);
  return (
    <>
      <div className='main '>
        <div className='w-full bg-[#e3f4fc]'>
          <div className='container w-auto block sm:flex sm:mx-auto sm:justify-center sm:items-center  h-screen'>
            <div className='block sm:flex bg-white rounded-3xl'>
              <div className=' w-auto sm:w-[50%] p-5 '>
                <form onSubmit={handleSubmit}>
                  <div className='block sm:flex justify-between items-center'>
                    <h2 className='font-bold text-xl PlusJakartaSans-Bold text-[#182c37] mb-1 sm:mb-5 mt-3'>Mortgage Calculator</h2>
                    <p><a href="#" className='underline PlusJakartaSans-Medium text-sm text-[#7d8c90]'>ClearAll</a></p>
                  </div>
                  <div className='space-y-2 mt-5 relative '>
                    <p className='text-[#7d8c90] text-sm PlusJakartaSans-Medium'>Mortgage Amount</p>
                    <div className={`w-full border border-[#9eabb1] h-[45px] rounded py-1.5 px-5  ${errors.amount && touched.amount ? 'border-[#e1ada9]' : 'focus-within:border-[#d8da2d]'}`}>
                      <input type="text" name='amount' value={values.amount} onChange={handleChange} className='absolute top-8 w-[210px] sm:w-[180px] outline-none rounded py-1 px-8 PlusJakartaSans-Bold text-lg text-[#25323a]' />

                      {/* value={formatNumberWithCommas(value)} */}
                    </div>
                    {errors.amount && touched.amount ? (<p className='text-red-600'>{errors.amount}</p>) : null}


                    <div className={`w-[39px] h-[43px] bg-[#e2f4fe]  absolute top-[21px] left-[1px] ${errors.amount && touched.amount ? "bg-red-600 text-white": ""} focus:bg-[#d8da2d]`} tabIndex={0}><MdOutlineCurrencyPound className={`absolute top-3 left-2 text-[16px] PlusJakartaSans-Bold text-[#5a6e77] ${errors.amount && touched.amount ? "text-white":""}`} />
                    </div>

                  </div>
                  <div className='w-full block sm:flex sm:gap-5  '>
                    <div className='mt-5 relative'>
                      <p className='text-[#7d8c90] text-sm my-2 PlusJakartaSans-Medium'>Mortgage Term</p>
                      <div className={`w-full sm:w-[130px] md:w-[161px]  lg:w-[226px] xl:w-[290px] border border-[#9eabb1] h-[45px] rounded py-1.5 px-1 ${errors.mortgage_term && touched.mortgage_term ? 'border-[#e1ada9]' : 'focus-within:border-[#d8da2d]'}`}>
                        <input type="text" name='mortgage_term' value={values.mortgage_term} onChange={handleChange
                        } className='absolute top-8 sm:top-10 w-[150px] sm:w-[100px]  md:w-[150px] outline-none rounded py-1 px-4 PlusJakartaSans-Bold text-lg text-[#25323a]' />


                      </div>
                      {errors.mortgage_term && touched.mortgage_term ? (<p className='text-red-600'>{errors.mortgage_term}</p>) : null}
                      <div className={`w-[65px] h-[43px] bg-[#e2f4fe] absolute top-[29px] sm:top-[37px] right-[1px]  ${errors.mortgage_term && touched.mortgage_term ? "bg-red-600 text-white": ""} focus:bg-[#d8da2d]`}><span className={`absolute top-2 left-3 text-[16px] PlusJakartaSans-Bold text-[#5a6e77] ${errors.mortgage_term && touched.mortgage_term ? "text-white" : ""}`}> years</span></div>
                    </div>

                    <div className='mt-5 relative'>
                      <p className='text-[#7d8c90] my-2 PlusJakartaSans-Medium text-sm'>Interest Rate</p>
                      <div className={`w-full sm:w-[130px] md:w-[161px] lg:w-[226px] xl:w-[290px]  border border-[#9eabb1] h-[45px] rounded py-1.5 px-1  ${errors.interest_rate && touched.interest_rate ? 'border-[#e1ada9]' : 'focus-within:border-[#d8da2d]'}`}>
                        <input type="text" name='interest_rate' value={values.interest_rate} onChange={handleChange} className='absolute top-8 sm:top-10 w-[150px] sm:w-[100px] md:w-[150px] outline-none rounded py-1 px-4 PlusJakartaSans-Bold text-lg text-[#25323a]' />


                      </div>
                      {errors.interest_rate && touched.interest_rate ? (<p className='text-red-600'>{errors.interest_rate}</p>) : null}
                      <div className={`w-[39px] h-[43px] bg-[#e2f4fe] absolute top-[29px] sm:top-[37px] right-[1px] ${errors.interest_rate && touched.interest_rate ? 'bg-red-600' : ''}`}><MdPercent className={`absolute top-3 left-2 text-[16px] PlusJakartaSans-Bold text-[#5a6e77] ${errors.interest_rate && touched.interest_rate ? "text-white" : ""}`} /></div>
                    </div>
                  </div>

                  <div className='space-y-3 mt-5'>
                    <p className='text-[#7d8c90] text-sm my-2 PlusJakartaSans-Medium'>Mortgage Type</p>

                    <div>
                      <div className={`w-full border h-[45px] rounded py-1.5 px-5 relative ${values.radio === "Repayments"
                        ? "border-[#d8da2d] bg-[#fafae0]"
                        : "border-gray-400 bg-white"
                        }`}>
                        <input
                          type="radio"
                          name="radio"
                          value="Repayments"
                          checked={values.radio === "Repayments"}
                          onChange={handleChange}
                          className={`absolute top-4 left-5 cursor-pointer accent-yellow-700  ${values.radio === "Interest Only" ? "bg-[#fafae0]" : "bg-gray-300"
                            }`}
                        />
                        <span className='absolute top-2 left-12 font-bold text-base PlusJakartaSans-Bold text-[#182c37]'>
                          Repayments
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className={`w-full border h-[45px] rounded py-1.5 px-5 relative ${values.radio === "Interest Only"
                        ? "border-[#d8da2d] bg-[#fafae0]"
                        : "border-gray-400 bg-white"
                        }`}>
                        <input
                          type="radio"
                          name="radio"
                          value="Interest Only"
                          checked={values.radio === "Interest Only"}
                          onChange={handleChange}
                          // className='absolute top-4 cursor-pointer'
                          className={`absolute top-4 left-5 cursor-pointer accent-yellow-700 ${values.radio === "Interest Only" ? "bg-yellow-500" : "bg-gray-300"
                            }`}
                        />
                        <span className='absolute top-2 left-12 font-bold text-base PlusJakartaSans-Bold text-[#182c37] '>
                          Interest Only
                        </span>
                      </div>
                      {errors.radio && touched.radio ? (
                        <p className='text-red-600'>{errors.radio}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className='relative sm:px-3'>
                    <button type='submit' className=' w-full sm:w-[300px] bg-[#dbd92f] py-3 sm:py-2 text-sm sm:text-base font-bold rounded-full mt-4  cursor-pointer PlusJakartaSans-Bold text-[#182c37]'>Calculate Repayments</button>
                    <img src={calculator} alt="calculator" className='absolute top-7 sm:top-6 left-6 sm:left-10 w-5 sm:w-6' />
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
