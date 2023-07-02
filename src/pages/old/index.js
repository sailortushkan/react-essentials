import OldLayout from '../../components/OldLayout';

export default function Page() {
  return <div>Old</div>;
}

Page.getLayout = function getLayout(page) {
  return <OldLayout>{page}</OldLayout>;
};
