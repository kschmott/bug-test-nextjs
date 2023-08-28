import React from "react";

export async function generateStaticParams() {
  return [
    {
      test: "foo",
    },
    {
      test: "bar",
    },
  ];
}

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div>
      <h1>{params.test}</h1>
      {children}
    </div>
  );
}

export default layout;
