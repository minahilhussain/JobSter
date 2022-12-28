import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import ViewPage from '@templates/viewPage';

const job = ({ job }) => {
  return (
    <>
      <ViewPage />
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const job = {};
  return {
    props: {
      job,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const jobs: any = [{ uuid: 1 }, { uuid: 2 }];
  const ids = jobs.map((job: any) => job.uuid);
  const paths = ids.map((uuid: any) => ({
    params: {
      id: uuid.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default job;
