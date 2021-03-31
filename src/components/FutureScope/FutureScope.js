import React from 'react';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Vedio
} from './FutureScope.elements';

function FutureScope({img}) {
    return (
      <>
        <InfoSec lightBg=''>
          <Container>
            <InfoRow imgStart=''>
              <InfoColumn>
                <TextWrapper>
                  <TopLine lightTopLine='true'>Future Scope</TopLine>
                  <Heading lightText='true'>Our Few Future Scopes</Heading>
                  <Subtitle lightTextDesc='true'>

                  <ul>
                    <li>Try interface to be a part of YWCA for providing a worldwide interaction. </li>
                    <li>Reaching the empowering women speakers all over the world to fill the gender gap as an inspiration.</li>
                    <li>Providing trainees virtually as well as physically available.</li>
                    <li>Allow worldwide school, institutes to access us.</li>
                    <li>Public to everyone with ease to access at least pays.</li>
                  </ul>
                  </Subtitle>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start='true'>
                    <Img src={img}/>
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </>
    );
  }
  
  export default FutureScope;
  