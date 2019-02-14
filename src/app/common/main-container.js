import AileronBold from '../fonts/Aileron-Bold.otf';
import Header from './header';
import Kano from '../fonts/Kano.otf';
import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../constants';
import { Helmet } from 'react-helmet';

const KanoFont = createGlobalStyle`
    @font-face{
        font-family: Kano;
        src: url(${Kano});
    }

    @font-face{
        font-family: Aileron-Bold;
        src: url(${AileronBold});
    }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  font-family: 'Kano';
`

export default class MainContainer extends Component {
    render() {
        return (
            <Container>
                <KanoFont />
                <Helmet>
                    <title>Franrey Saycon - Portfolio</title>
                </Helmet>
                <Header />
                {this.props.children}
            </Container>
        );
    }
}
