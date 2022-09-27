import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Switch from "react-switch"
import getUsers from "app/users/queries/getUsers"
import updateUser from "app/users/mutations/updateUser"
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
    if (sort?.[column] === "asc") {
      setSort({ [column]: "desc" })
    } else {
      setSort({ [column]: "asc" })
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
  // TODO: Improve logic of sort and get users
  const translations = {
    name: useGetTextByLng("name"),
    email: useGetTextByLng("email"),
    role: useGetTextByLng("role"),
    active: useGetTextByLng("active"),
  }
  const [columnsFiltered, setColumnsFiltered] = useState<string[]>([])
  const [dataFiltered, setDataFiltered] = useState<Record<string, any>[]>([])
  const [sort, setSort] = useState<Record<string, "asc" | "desc">>({
    name: "asc",
  })
  const [updatedUser] = useMutation(updateUser)
  const [usersFiltered, { refetch }] = useQuery(getUsers, { orderBy: sort })

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
    const filter = data.filter((item) => {
      const { id, updatedAt, createdAt, hashedPassword, ...rest } = item
      return rest
    })
    setDataFiltered(filter)
  }, [data])

  useEffect(() => {
    setDataFiltered(usersFiltered)
  }, [usersFiltered])

  const handleActivate = async (id: number, active: boolean): Promise<void> => {
    await updatedUser({ active, id })
    await refetch()
  }

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
          {dataFiltered.map(({ id, updatedAt, createdAt, hashedPassword, ...rest }) => (
            <TableRow key={id}>
              {columnsFiltered.map((column) => (
                <TableData title={String(rest[column] || "")} key={column}>
                  {column === "active" ? (
                    <Switch
                      onChange={async (e) => {
                        await handleActivate(id, e)
                      }}
                      checked={rest[column]}
                    />
                  ) : (
                    String(rest[column] || "")
                  )}
                </TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableWrapper>
  )
}
