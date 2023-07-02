export const metadata = {
  title: 'New Page',
};

export async function generateStaticParams() {
  return [{ nickname: 'index01d' }, { nickname: 'sailortushkan' }];
}

async function getUser(params) {
  const res = await fetch(`https://api.github.com/users/${params.nickname}`, { cache: 'no-store' });
  const profile = await res.json();

  return profile;
}

export default async function Page({ params }) {
  const profile = await getUser(params);

  return (
    <>
      <div>{profile.login}</div>
      <img src={profile.avatar_url} height='100' width='100' alt='' />
    </>
  );
}
