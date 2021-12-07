import { Row } from 'antd';
import styled, { ITheme } from 'styled-components';

export const HeaderFrame = styled(Row)`
  justify-content: space-between;
  align-items: center;
  ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
        .small-screen-right {
            display: flex;
        }
    `}
`;
