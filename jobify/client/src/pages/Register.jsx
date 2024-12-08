import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow"; 
import customFetch from "../utils/customFetch";


export const action = async ({ request }) => {
 const formData=await request.formData();
 const data=Object.fromEntries(formData);
 
 try {
  await customFetch.post("/auth/register",data);
  return redirect('/login');
  
 } catch (error) {
  console.log(error);
  
  return error
  
 }
 
 
 
  
};
const Register = () => {

  const navigation=useNavigation()
  console.log(navigation)
  const isSubmitting=navigation.state==='submitting'



  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="text" name="email" />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting?'submitting...':'submit'}
        </button>
        <p>
          Already a Member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
