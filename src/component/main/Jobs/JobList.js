//React-Router-dom
import { Link } from "react-router-dom";
//Polaris
import { Page, Layout, Button } from "@shopify/polaris";
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

    </Page>
    </div>
  );
};
export default JobList;
