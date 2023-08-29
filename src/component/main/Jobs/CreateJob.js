import { Auto, ContextualSave } from "./jobscomponents/IndexJob";
import { FormLayout, Page,Layout } from "@shopify/polaris";
//formik
import { TextField, Select} from '@satel/formik-polaris';
import { Formik, Form, Field } from "formik";

import { createJobValidation } from "./CreateJobValidation";

const CreateJob = () => {


  return (
    <div className="w-[600px]">
      <Page narrowWidth title="New Jobs">
        <Layout >
            <Formik
              initialValues={initialValues}
              validationSchema={createJobValidation}

            >
              {({ values}) => (
                <Form>
                    <ContextualSave
                      message="Unsaved changes"
                      title={values.title}
                      description={values.description}
                      city={values.city}
                      skills={values.skills}
                    />
                    <div className="w-[500px] -mt-48">
                  <FormLayout>
                    <TextField
                      label="Title"
                      name="title"
                      type="text"
                      id="text"
                    />
                    <TextField
                      label="Description"
                      name="description"
                      type="text"
                      id="description"
                      multiline={4}
                      maxLength={200}
                      showCharacterCount
                    />
                    <Select
                      label="City"
                      name="city"
                      options={options}
                    />
                    <Field label="Skills" name="skills" as={Auto} />                  
                  </FormLayout>
                  </div>
                </Form>
              )}
            </Formik>
        </Layout>
      </Page>
    </div>
  );
}

const initialValues = {
  title: "",
  description: "",
  city: "",
  skills: [],
};
const options = [
  { label: "Select", value: "select" },
  { label: "Qazvin", value: "qazvin" },
  { label: "Tehran", value: "tehran" },
  { label: "Shiraz", value: "shiraz" },
  { label: "Tabriz", value: "tabriz" },
  { label: "London", value: "london" },
  { label: "Tokyo", value: "tokyo" },
];

export default CreateJob;
