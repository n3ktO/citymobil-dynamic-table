import styled from 'styled-components';

const SidebarStyle = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-height: calc(100vh - 48px - 48px);
  background: #e4e5e6;
`;

const Sidebar = () => <SidebarStyle>sidebar</SidebarStyle>;

export default Sidebar;
