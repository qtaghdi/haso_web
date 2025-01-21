import styled from "styled-components";

export const ProviderAll = styled.div`
    height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  row-gap: 4vh;
`;

export const ProviderTop = styled.div`
  margin-top: 6vh;
  width: 90vw;
  height: 14vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderTopOfTop = styled.div`
  width: 90vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 5vh;
`;

export const ProviderHeader = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const StatementVector = styled.img`
  width: 1.2vw;
  position: absolute;
  left: 5vw;

  &:hover {
    cursor: pointer;
  }
`;

export const ProviderMiddle = styled.div`
  background-color: white;
  width: 75vw;
  height: 45vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleSpans = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const ContentsSpans = styled.span`
  font-size: 16px;
  font-family: Kim jung chul Gothic;
`;
export const TradeDate = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: Kim jung chul Gothic;
`;
export const TradeDates = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5vw;
`;
export const ClientsInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  height: 20vh;
`;
export const ClientsInfosGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33vw;
`;
export const FontsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
`;
export const ReceiverBottom = styled.div`
  gap: 3vh;
  width: 73vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ReceiverTables = styled.div`
`;

export const TradeTop = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5vh;
  table-layout: fixed;

  th {
    background-color: #e8e8e8;
    border-left: 1px solid #d1d1d1;
    border-right: 1px solid #d1d1d1;
    padding: 2vh;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  td {
    background-color: white;
    border-left: 1px solid #d1d1d1;
    border-right: 1px solid #d1d1d1;
    text-align: center;
    padding: 2vh;
    font-size: 16px;
    font-weight: 500;
  }
  th:first-child, td:first-child {
    border-left: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  th:last-child, td:last-child {
    border-right: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const TableMiddle = styled.thead`
  table-layout: fixed;
  border-collapse: collapse;
  td {
    width: 9.55vw;
    background-color: white;
    text-align: center;
    padding: 2vh;
    font-size: 16px;
    font-weight: 500;
  }

  th {
    background-color: #e8e8e8;
    border-right: 1px solid #d1d1d1;
    padding: 2vh;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }
`;
export const TableBottom = styled.thead`
  table-layout: fixed;
  border-collapse: collapse;
  display: flex;
  margin-top: 1.5vh;
  margin-bottom: 5vh;
  td {
    width: 23.5vw;
    background-color: white;
    text-align: center;
    padding: 2vh;
    font-size: 16px;
    font-weight: 500;
  }

  th {
    width: 13vw;
    background-color: #e8e8e8;
    border-right: 1px solid #d1d1d1;
    padding: 2vh;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }
`;