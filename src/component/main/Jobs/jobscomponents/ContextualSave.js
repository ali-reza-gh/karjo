import { useMutation } from '@apollo/client';
import { ContextualSaveBar } from '@shopify/polaris';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_JOBS } from '../../../../gql/Mutations';


export function ContextualSave({ title, description, city, skills,message }) {

  const [createJob] = useMutation(CREATE_JOBS)
  const navigate = useNavigate()
  return (
    <div style={{ height: '250px' }}>
      <ContextualSaveBar
        message={message}
        saveAction={{
          onAction: async () => {
            const jobGql = await createJob({
              variables: {
                title,
                description,
                city,
                skills
              }
            })
            if(jobGql.data.createJob.status){
              navigate("/jobs")
            }
            console.log("jobgql is:", jobGql);
          }


        }}
        discardAction={{
          onAction: () => navigate("/jobs"),
        }}
      />

    </div>
  );
}