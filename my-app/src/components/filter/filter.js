import styled, { css } from 'styled-components';

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const MenuBlock = styled.div`
  position: relative;
`;
export const ActiveButton = css`
&:active{
  color: #b672ff; 
border-color: #b672ff;
}
`
export const NoActiveButton = css`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`;
export const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
${(props) => (props.$visible ? ActiveButton : NoActiveButton)}
&:not(:last-child) {
  margin-right: 10px;
}
`

export const CountBlock = styled.div`
  position: absolute;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  color: #ad61ff;
  right: -5px;
  bottom: 35px;
  width: 36px;
  height: 36px;
  background: #ad61ff;
  border-radius: 50px;
  color: white;
  text-align: center;
  padding: 5px;
`;
export const Menu = styled.div`
  z-index: 2;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  background: rgb(110, 110, 110);
  position: absolute;
  background: #313131;
  padding: 10px 20px;
  border-radius: 30px;
  top: 51px;
  width: 200px;
  left: -26px;
`;
export const List = styled.ul`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  height: 200px;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f9f9fd;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #535353;
  }
`;
export const ListElement = styled.li`
  font-size: 18px;
  &:hover {
    color: #ad61ff;
    transition: 0.3s all;
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const Link = styled.a`
  color: #ffffff;
  &:hover {
    color: #ad61ff;
  }
`;