import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tomas Plevak',
      image:
      'https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/32235631_10216222113409278_4506744222036000768_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGxhXZKaqBrmfbn-RKBjmaGGfIgmAJSlPYZ8iCYAlKU9va5d84cxfUW1etep4ufuRU&_nc_ohc=XmLkQnhmiwsAX9ColmA&_nc_ht=scontent.faep9-1.fna&oh=00_AT_Mg-ZtC02wcDNVMazH_LstBOy-RfdRtCBtqxxUyY6TBQ&oe=62BB2853',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
