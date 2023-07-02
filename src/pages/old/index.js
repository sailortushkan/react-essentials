import Head from 'next/head';
import OldLayout from '../../components/OldLayout';

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/index01d`);
  const profile = await res.json();

  return { props: { profile } };
}
export default function Page({ profile }) {
  return (
    <>
      <Head>
        <title>Old Page</title>
      </Head>
      <div>Old</div>
      <div>{profile.login}</div>
      <img src={profile.avatar_url} height='50' width='50' alt='' />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <OldLayout>{page}</OldLayout>;
};
