import UserCard from './UserCard';

export const metadata = {
  title: 'Chakra Fetcher',
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ nickname: 'index01d' }, { nickname: 'sailortushkan' }];
}

async function getUser(params) {
  const res = await fetch(`https://api.github.com/users/${params.nickname}`, {
    // cache: 'no-store',
  });
  const profile = await res.json();

  const date = new Date(profile.created_at).toLocaleDateString();

  const result = { ...profile, date: date };

  return result;
}

async function Page({ params }) {
  const profile = await getUser(params);

  return <UserCard profile={profile} />;
}

export default Page;
