"use client"
import React from 'react'
import { validationSchema } from '@/utils/validation'
import { Formik, Form, Field, ErrorMessage} from "formik"
import { toFormikValidationSchema } from 'zod-formik-adapter'

// type FormValues = {
//   email: string;
// };

function Forma() {
    //  const {isLoading, setIsLoading} = useState(false);

// const handleSubmit = (values: FormValues) => {
//   console.log(values);
// };

  return (
    // <Formik initialValues={{email: ""}}
    // validationSchema={validationSchema}
    // onSubmit={handleSubmit}>
      // <Form>
    <div><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Password Restore</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Check out your email box.</p>
      </div>
      <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div class="relative flex-grow w-full">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="text" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          {/* <ErrorMessage type="text" id="email" name="email"/> */}
        </div>
        {/* disabled = {isLoading} */}
        <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Send</button>
      </div>
    </div>
  </section></div>
  // </Form>
  // </Formik>
  )
}

export default Forma;