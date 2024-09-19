import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
} from '@/components';

const textField = z
  .string()
  .min(2, { message: 'Por favor ingresa minímo 2 caracteres' })
  .max(115, { message: 'Por favor ingresa un máximo de 100 caracteres' })
  .trim();

const formSchema = z.object({
  street: textField,
  city: textField,
  state: textField,
  colony: textField,
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, 'Debe ser un código postal válido'),
  gMapsLink: z.string().url('Debe ser un enlace válido').optional(),
});

interface Step1Props {
  onNextStep: () => void;
}

export const Step1 = ({ onNextStep }: Step1Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: '',
      gMapsLink: '',
      state: '',
      street: '',
      zipCode: '',
      colony: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
    console.log(values);
    onNextStep();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="flex gap-5">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Calle y número</FormLabel>
                <FormControl>
                  <Input placeholder="Calle #1..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="colony"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Colonia</FormLabel>
                <FormControl>
                  <Input placeholder="Calle #1..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-5">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder="Guadalajara" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Alcaldía / Municipio</FormLabel>
                <FormControl>
                  <Input placeholder="Tlaquepaque" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="w-2/5">
                <FormLabel>Código postal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="12345"
                    minLength={5}
                    maxLength={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="gMapsLink"
            render={({ field }) => (
              <FormItem className="w-2/3">
                <FormLabel>Link Google Maps</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://maps.app.goo.gl"
                    type="url"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="absolute bottom-0 right-0">
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
};
