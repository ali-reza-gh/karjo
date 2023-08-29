//React-Router-dom
import { Link } from "react-router-dom";
//Polaris
import { Pagination, Page, Layout, Button } from "@shopify/polaris";
import { AlphaFiltersJobList } from "./jobscomponents/IndexJob";

const JobList = () => {
  return (
    <div className="min-w-[700px]">
    <Page
      title="Jobs:"
      primaryAction={
        <Link to="/jobs/createjob">
          <Button>Create Job</Button>
       </Link>
      }
    >
      <Layout>
        <AlphaFiltersJobList />
      </Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination />
      </div>
    </Page>
    </div>
  );
};
export default JobList;
