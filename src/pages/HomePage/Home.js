import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour ,homeObjFive } from './Data';
import { InfoSection, Solution } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      {/* <FutureScope {...homeObjFive}/> */}
      <Solution/>
    </>
  );
}

export default Home;
