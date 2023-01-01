import AllJobsPage from '@templates/allJobsPage';
import { ADZUNA_API_KEY, ADZUNA_BASE_URL, ADZUNA_ID } from '../constants';

export default function Home({ jobs }: any) {
  return (
    <>
      <AllJobsPage jobs={jobs}></AllJobsPage>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `${ADZUNA_BASE_URL}/jobs/gb/search/1?app_id=${ADZUNA_ID}&app_key=${ADZUNA_API_KEY}`,
  );
  const jobs = await res?.json();
  console.log('res', res);
  return {
    props: {
      jobs,
    },
  };
};
