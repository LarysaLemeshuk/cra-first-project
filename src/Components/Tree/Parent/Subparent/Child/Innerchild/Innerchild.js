import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const Innerchild = (props) => {
//   const {
//     user: { firsName, lastName, email, avatar } = {}} = props;
  return (
   

<UserContext.Consumer>
    {(firsName, lastName, email, avatar) => {
        return(
            <div style={{ border: '3px solid black', padding: '25px' }}>
            I`m InnerChild
            <p>
              {firsName} {lastName} {email}
            </p>
          </div>
        )
    }}
</UserContext.Consumer>
  );
};

export default Innerchild;
