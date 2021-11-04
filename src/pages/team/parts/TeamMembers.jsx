import Member from "../../../components/Member";

import { useState, useEffect, useCallback } from "react";

const TeamMembers = () => {
  let [membersList, setMembersList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./members.json")
      .then((response) => response.json())
      .then((data) => {
        setMembersList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul>
      {membersList.map((member) => (
        <Member member={member} key={member.id}></Member>
      ))}
    </ul>
  );
};

export default TeamMembers;
