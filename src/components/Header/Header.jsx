import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button style={{ textAlign: 'center' }}>
            Subscribe
          </Button>
          <a href="/">
            <SubscribeLink>Already a subscriber?</SubscribeLink>
          </a>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SubscribeLink = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  text-decoration: underline;
  font-style: italic;
`;

const SubscribeWrapper = styled.div`
  justify-self: end;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }

  justify-content: center;
  align-self: end;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;

    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
  }
`;

export default Header;
