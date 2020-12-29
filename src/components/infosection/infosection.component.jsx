import React from 'react';
import {Link } from 'react-router-dom';
import {Container, CoolButton} from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const InfoSection = ({
                         primary,
                         lightBg,
                         imgStart,
                         lightTopLine,
                         lightTextDesc,
                         buttonLabel,
                         description,
                         headline,
                         lightText,
                         topLine,
                         img,
                         alt,
                         start
                     }) => {
    return (

        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn style={{textAlign: "center"}}>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle style={{margin: "35px auto"}} lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='./'>
                                <CoolButton big fontBig primary={primary}>
                                    {buttonLabel}
                                </CoolButton>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper style={{margin: "0 70px"}} start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>

    )
}

export default InfoSection;