import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import { useEffect, useState } from "react"
import {
  TableBody,
  TableData,
  TableHeader,
  TableHeaderData,
  TableRow,
  TableStyled,
  TableWrapper,
} from "./styles"

interface TableAdminProps {
  data: Record<string, any>[]
  columns: string[]
}

export function TableHeaderDataWithEvent({
  key,
  children,
  sort,
  column,
  setSort,
}: {
  key: string
  children: React.ReactNode
  sort: Record<string, "asc" | "desc"> | undefined
  column: string
  setSort: React.Dispatch<React.SetStateAction<Record<string, "asc" | "desc"> | undefined>>
}): JSX.Element {
  const handleChangeSort = (): void => {
    console.log({ column, sort })
    if (sort?.[column] === "asc") {
      setSort({ ...sort, [column]: "desc" })
    } else {
      setSort({ ...sort, [column]: "asc" })
    }
  }
  return (
    <>
      <TableHeaderData key={key}>{children}</TableHeaderData>
      {sort?.[column] === "asc" ? (
        <BiUpArrow onClick={handleChangeSort} />
      ) : (
        <BiDownArrow onClick={handleChangeSort} />
      )}
    </>
  )
}

export default function TableAdmin({ data, columns }: TableAdminProps): JSX.Element {
  const translations = {
    name: useGetTextByLng("name"),
    email: useGetTextByLng("email"),
    role: useGetTextByLng("role"),
    active: useGetTextByLng("active"),
  }
  const [columnsFiltered, setColumnsFiltered] = useState<string[]>([])
  const [dataFiltered, setDataFiltered] = useState<Record<string, any>[]>([])
  const [sort, setSort] = useState<Record<string, "asc" | "desc">>()

  useEffect(() => {
    setColumnsFiltered(
      columns.filter(
        (column) =>
          column !== "id" &&
          column !== "updatedAt" &&
          column !== "createdAt" &&
          column !== "hashedPassword"
      )
    )
  }, [columns])

  useEffect(() => {
    // create an object with key as each columnsFiltered and value "asc"
    const sortObj = columnsFiltered.reduce((acc, column) => {
      acc[column] = "asc"
      return acc
    }, {} as Record<string, "asc" | "desc">)
    // set the sort state with the object created
    setSort(sortObj)
  }, [columnsFiltered])

  useEffect(() => {
    console.log(sort)
  }, [sort])

  useEffect(() => {
    const filter = data.filter((item) => {
      const { id, updatedAt, createdAt, hashedPassword, ...rest } = item
      return rest
    })
    setDataFiltered(filter)
  }, [data])

  return (
    <TableWrapper>
      <TableStyled>
        <TableHeader>
          <TableRow>
            {columnsFiltered.map((column) => (
              <TableHeaderDataWithEvent setSort={setSort} key={column} column={column} sort={sort}>
                {translations[column]}
              </TableHeaderDataWithEvent>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataFiltered.map((item) => (
            <TableRow key={item.id}>
              {columnsFiltered.map((column) => (
                <TableData title={String(item[column] || "")} key={column}>
                  {String(item[column]) || "Default"}
                </TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableWrapper>
  )
}
