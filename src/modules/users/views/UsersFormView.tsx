import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

// ? Hooks
import { useUsersForm } from '../hooks';

// ? Components
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from '@/components';
import { UserImageField } from '../components';

const UsersFormView = () => {
  const { form, formSchema } = useUsersForm();

  const navigate = useNavigate();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div className="h-full relative">
      <section className="mb-5 flex justify-between">
        <h2 className="text-4xl font-bold">Creación de usuario</h2>
      </section>

      <div className="pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-3">
              <UserImageField />

              <div className="col-span-2 space-y-5">
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Nombre(s)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Juan Alberto"
                            type="text"
                            minLength={2}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Apellidos</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Pérez Rodríguez"
                            type="text"
                            minLength={2}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="000 000 0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="juan@gmail.com"
                            type="email"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="w-2/3">
                      <FormLabel>Rol</FormLabel>
                      <FormControl>
                        <Input placeholder="Vendedor" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">Dirección</h3>
              <Separator className="my-4" />

              <div className="space-y-5">
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="streetAndNumber"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Calle y número</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Paseo de las rosas #246"
                            type="text"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="colony"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Colonia</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jardines de la villa"
                            type="text"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Alcaldia / Municipio</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Guadalajara"
                            type="text"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Código postal</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="00000"
                            maxLength={5}
                            minLength={5}
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end w-full">
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/usuarios')}
                >
                  Cancelar
                </Button>

                <Button type="submit">Crear usuario</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UsersFormView;
