import Link from "next/link";
import React from "react";

function page({ params }: { params: any }) {
  return (
    <div>
      test2<Link href={"/" + params.test + "/test1"}>LINK</Link>
    </div>
  );
}

export default page;
