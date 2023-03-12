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
  try {
    const res = await fetch(
      `${ADZUNA_BASE_URL}/jobs/gb/search/1?app_id=${ADZUNA_ID}&app_key=${ADZUNA_API_KEY}`,
    );
    const jobs = await res?.json();
    return {
      props: {
        jobs,
      },
    };
  } catch (err) {
    console.log('Error while getting data');
  }
  return {
    props: {
      jobs: [],
    },
  };
};
