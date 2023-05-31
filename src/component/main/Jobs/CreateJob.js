import { Layout, Page, FormLayout, TextField, Select, Card } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { Auto, ContextualSave } from "./jobscomponents/IndexJob";
//formik
import { useFormik } from "formik";

const CreateJob = () => {
  // const [value, setValue] = useState('');

  // const handleChange = useCallback(
  //   (newValue) => setValue(newValue),
  //   [],
  // );


  const formik = useFormik({
    initialValues: {
      city: "",
      description: "",
      title: "",
      skills: ""
    }, onSubmit: values => {
      alert(JSON.stringify(values))
    }
  });

  return (
    <Layout>
    
      <form onSubmit={formik.handleSubmit} >
        <Page sectioned title="Create Job:">
          <FormLayout>
            <ContextualSave />
            <TextField
              label="Title"
              name="title"
              onChange={formik.handleChange}
              autoComplete="off" />

            <TextField
              label="Description"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              // value={value}
              value={formik.values.description}
              // onChange={handleChange}
              multiline={4}
              maxLength={200}
              showCharacterCount
            />
            {/* <Select
              label="City"
              name="city"
              options={options}
              id="city"
              readOnly
            /> */}
            <Auto />
          </FormLayout>
        </Page>
      </form>
    
    </Layout>
  );
};

export default CreateJob;
