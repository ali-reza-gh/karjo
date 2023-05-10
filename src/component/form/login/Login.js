import React, { useEffect } from 'react';

//react-hook-form
import { useForm } from "react-hook-form";

//yup
import { userSchema } from './LoginValidation';



const Login = () => {
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({
        // defaultValues: {
        //     username: "",
        //     password: ""
        // }, 
        // resolver: yupResolver(schema)
    });

    useEffect(() => {
        setFocus("username")
    }, [setFocus])

    const onSubmit = (data) => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username:</label>
            <input placeholder='Enter Your Email...' {...register("username")} />
            <p>{errors.username?.message}</p>

            <br />

            <label>Password:</label>
            <input placeholder='Enter Your Password...' {...register("password")} />
            <p>{errors.password?.message}</p>

            <br />
                      <div>
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  {...register("remember")}
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" 
              >
                Remember me
              </label>
            </div>
          </div>

            <input type="submit" />
        </form>
    );

};

export default Login;