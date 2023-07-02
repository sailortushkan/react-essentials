export const metadata = {
  title: 'New Page',
};

async function getUser() {
  const res = await fetch(`https://api.github.com/users/sailortushkan`, { cache: 'no-store' });
  const profile = await res.json();

  return profile;
}

export default async function Page() {
  const profile = await getUser();
  return (
    <>
      <div>New</div>
      <div>{profile.login}</div>
      <img src={profile.avatar_url} height='100' width='100' alt='' />
    </>
  );
}
