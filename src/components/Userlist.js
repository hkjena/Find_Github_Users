import React from "react";

import User from "./User";

const Userlist = React.memo(function SolidGameCard({ users }) {
  return (
    <>
      {users.map(({ login, avatar_url, url }) => (
        <User userid={login} url={url} image={avatar_url} key={login} />
      ))}
    </>
  );
});
export default Userlist;
