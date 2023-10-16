import {
  LegacyCard,
  ResourceList,
  AlphaFilters,
  Avatar,
  Text,
  Button,
  Pagination,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
//GQL
import { JOBS_LIST } from "../../../../gql/Query";
import { DELETE_JOB } from '../../../../gql/Mutations';
import { useMutation, useQuery } from '@apollo/client';
import EmptyStateComponent from './EmptyState';
import { useNavigate } from 'react-router-dom';


export function AlphaFiltersJobList() {
  const navigate =useNavigate()
  const [queryValue, setQueryValue] = useState(undefined);
  const [deleteJob] = useMutation(DELETE_JOB)
  const [sortValue, setSortValue] = useState("DESC");
  const [pageValue, setPageValue] = useState(1);
  const { loading, data } = useQuery(JOBS_LIST, {
    variables: {
      page: pageValue,
      pageSize: 2,
      sort: sortValue,
    }
  });



  const onNextHandler = () => {
    setPageValue((prev) => prev + 1)
  }
  const onPreviousHandler = () => {
    setPageValue((prev) => prev - 1)
  }

  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleQueryValueRemove = useCallback(
    () => setQueryValue(undefined),
    [],
  );
  const handleFiltersClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [
    handleQueryValueRemove,
  ]);
  const filters = [];
  const totalPage = data ? data.jobs.totalPage : 0;
  if (loading) { return (<h1>loading ...</h1>) }
  
  if (!data.jobs.jobs) {
    return (<EmptyStateComponent />)
  } 
  
  if (!data.jobs.jobs[1]) {
   return (<EmptyStateComponent />)
 }
  const namei0 = data.jobs.jobs[0].title ? data.jobs.jobs[0].title :null
  const namei1 = data.jobs.jobs[1].title?data.jobs.jobs[1].title :null
  const idi0 = data.jobs.jobs[0].id?data.jobs.jobs[0].id :null
  const idi1 = data.jobs.jobs[1].id? data.jobs.jobs[1].id:null
  const cityi0 = data.jobs.jobs[0].city?data.jobs.jobs[0].city :null
  const cityi1 = data.jobs.jobs[1].city?data.jobs.jobs[1].city :null



  return (
    <div style={{ height: '568px' }} className="min-w-[600px] mt-4">

      <LegacyCard>

        <ResourceList
          filterControl={
            <AlphaFilters
              queryValue={queryValue}
              queryPlaceholder="Searching your job . . ."
              filters={filters}
              onQueryChange={handleFiltersQueryChange}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleFiltersClearAll}
            />
          }

          flushFilters
          items={[
            {
              id: idi0,
              name: namei0,
              city: cityi0,
            },
            {
              id: idi1,
              name: namei1,
              city: cityi1,
            }

          ]}

          renderItem={(item) => {
            const { id, name, city } = item;
            const media = <Avatar customer size="medium" name={name} />;
            return (

              <ResourceList.Item
                id={id}
                media={media}
              >
                <Text as="h3" fontWeight="bold">
                  {name}
                </Text>
                <div>{city}</div>
                <div style={{ justifyContent: "space-between",
                display:"flex"
               }}
                >
                  <div>
                    <Button
                      onClick={
                       async () => {
                        await deleteJob({ variables: { id:id } })

                         window.location.reload()
                        }
                      }
                    >Delete</Button>
                  </div>

                  <div>
                    <Button
                    onClick={()=>
                      navigate(`/jobs/createjob/:${id}`)}>Edit</Button>
                  </div>
                </div>

              </ResourceList.Item>

            );
          }}
        />
      </LegacyCard>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          label={pageValue}
          hasNext={pageValue < totalPage}
          onNext={onNextHandler}
          hasPrevious={pageValue > 1}
          onPrevious={onPreviousHandler}
        />

      </div>
    </div>
  );

}