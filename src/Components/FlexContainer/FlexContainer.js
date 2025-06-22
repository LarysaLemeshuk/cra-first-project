import React from 'react';

const FlexContainer = (props) => {
  const { children, flexDirection, justifyContent, alignItems } = props;
  return (
    <article
      style={{
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </article>
  );
};

export default FlexContainer;

/*

Створити компоненту FlexContainer, яка відображає всі передані їй компоненти як флекс-дітей
При цьому flex-direction, aline-items, justify=content мають передаватись цій компоненті як пропси


Всередині App

<Flex-container flexxDirection ='row' justifyContent='center' alignItems='stretch'>
  <div>Item 1 </div>
  <div>Item 2 </div>
  <div>Item 3 </div>
</FlexContainer>
*/
