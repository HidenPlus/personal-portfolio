import { FormProps } from "app/core/components/Form";
import {TextField} from './styles';
import {ProjectForm as Form} from './styles';
import { z } from "zod";
export { FORM_ERROR } from "app/core/components/Form";

export function ProjectForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>
) {
  return (
    <Form<S> {...props}>
      <TextField name="name" label="Name" placeholder="Name" />
    </Form>
  );
}
