/* eslint-disable @typescript-eslint/no-floating-promises */
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getUsers from "app/users/queries/getUsers"
import updateUser from "app/users/mutations/updateUser"
import { useAtom } from "jotai"
import { LoginButton } from "app/projects/components/Login/styles"
import {
  CancelButton,
  OrderButtonWrapper,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderData,
  TableRow,
  TableStyled,
  TableWrapper,
} from "./styles"
import SwitchComponent from "../SwitchComponent"
import { modalContent as modalContentAtom } from "../ModalComponent/store"
import EditUserComponent from "../Actions/EditUserComponent"
import LoaderSpinnerFooter from "./LoaderSpinnerFooter"

export enum Colors {
  primary = "var(--color-primary)",
  secondary = "var(--color-secondary)",
  white = "var(--white)",
}

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
        <OrderButtonWrapper>
          <BiUpArrow onClick={handleChangeSort} />
        </OrderButtonWrapper>
      ) : (
        <OrderButtonWrapper>
          <BiDownArrow onClick={handleChangeSort} />
        </OrderButtonWrapper>
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
    edit: useGetTextByLng("editUser"),
    update: useGetTextByLng("update"),
    cancel: useGetTextByLng("cancel"),
  }
  const [columnsFiltered, setColumnsFiltered] = useState<string[]>([])
  const [updateUserForm, setUpdateUserForm] = useState<any>({})
  const [handleOpenModal, setHandleOpenModal] = useState(false)
  const [modalContent, setModalContent] = useAtom(modalContentAtom)
  const [updateUserMutation, { isLoading }] = useMutation(updateUser)
  const [dataFiltered, setDataFiltered] = useState<Record<string, any>[]>([])
  const [sort, setSort] = useState<Record<string, "asc" | "desc">>({
    name: "asc",
  })
  const [updatedUser] = useMutation(updateUser)
  const [usersFiltered, { refetch }] = useQuery(
    getUsers,
    { orderBy: sort },
    {
      refetchOnWindowFocus: false,
    }
  )

  const handleUpdateUser = async (): Promise<void> => {
    await updateUserMutation(updateUserForm)
    await refetch()
  }

  const UpdateButtonElement = !isLoading ? (
    <LoginButton
      key={translations.update}
      style={{ minWidth: "70px", maxWidth: "70px" }}
      id="update-form-button"
      role="button"
      onClick={handleUpdateUser}
    >
      {translations.update}
    </LoginButton>
  ) : (
    <LoaderSpinnerFooter color={Colors.secondary} />
  )

  const CancelButtonElement = (
    <CancelButton
      key={translations.cancel}
      style={{ minWidth: "70px", maxWidth: "70px" }}
      id="cancel-form-button"
      role="button"
      onClick={(): void => setModalContent({ ...modalContent, visible: false })}
    >
      {translations.cancel}
    </CancelButton>
  )

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
    console.log(modalContent)
  }, [modalContent])

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

  useEffect(() => {
    if (updateUserForm.id) {
      setModalContent({
        visible: true,
        title: translations.edit,
        children: (
          <EditUserComponent
            formUpdateData={updateUserForm}
            setFormUpdateData={setUpdateUserForm}
          />
        ),
        actions: [
          {
            text: "Cancel",
            onClick: () => {
              setModalContent({ ...modalContent, visible: false })
            },
            element: CancelButtonElement,
          },
          {
            text: "Update",
            onClick: () => {
              setModalContent({ ...modalContent, visible: false })
            },
            element: UpdateButtonElement,
          },
        ],
      })
    }
  }, [updateUserForm, isLoading, handleOpenModal])

  const handleActivate = async (id: number, active: boolean): Promise<void> => {
    await updatedUser({ active, id })
    await refetch()
  }

  const handleModalEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number): void => {
    if (e.target === e.currentTarget) {
      const user = dataFiltered.find((item) => item.id === id)
      setUpdateUserForm(user)
      // TODO: Fix this bug, the modal open only one time and then it doesn't open again, fixed temporally with handleOpenModal
      setHandleOpenModal(!handleOpenModal)
    }
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
                <TableData
                  onClick={(e) => handleModalEdit(e, id)}
                  title={String(rest[column] || "")}
                  key={column}
                >
                  {column === "active" ? (
                    <SwitchComponent
                      switchEmail={rest.email}
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
