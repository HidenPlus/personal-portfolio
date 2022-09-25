import { FormProps } from "app/core/components/Form"
import { z } from "zod"
import { TextField, ProjectForm as Form } from "./styles"

export { FORM_ERROR } from "app/core/components/Form"

export function ProjectForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form {...props}>
      <TextField name="name" label="Name" placeholder="Name" />
    </Form>
  )
}
