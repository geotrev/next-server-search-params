export const metadata = {
  alternates: {
    canonical: "https://localhost:3000/test",
  },
  title: "Test page",
  description: "Small test page",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { test?: string };
}) {
  return (
    <>
      <h1>Test</h1>
      <div>
        <a href="/">Go back</a>
      </div>
      {searchParams?.test && <div>with params: {searchParams.test}</div>}
    </>
  );
}
