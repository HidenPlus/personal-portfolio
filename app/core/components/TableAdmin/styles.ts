import styled from "styled-components"

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 20px;
  gap: 20px;
`

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  padding: 20px;
  border: 1px solid var(--color-primary);
  border-radius: 15px;
  background-color: var(--color-primary);
`

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border-bottom: 1px solid var(--color-primary);
  background-color: var(--color-secondary);
`

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: var(--white);
`

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border-bottom: 1px solid var(--color-primary);
  background-color: var(--color-secondary);
`

export const TableData = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  height: 30px;
  padding: 10px;
  border-radius: 6px;
  overflow-wrap: break-word;
`

export const TableHeaderData = styled.th`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  max-width: 100px;
  height: 30px;
  padding: 10px;
  border-radius: 6px;
`

export const OrderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
