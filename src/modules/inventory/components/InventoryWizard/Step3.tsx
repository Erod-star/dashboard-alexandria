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
  Separator,
} from '@/components';

// ? Hooks
import { useInventoryStore } from '../../hooks';

const formSchema = z.object({
  firstPayment: z
    .string()
    .min(1, { message: 'Por favor escribe una cantidad' })
    .trim(),
  secondPayment: z
    .string()
    .min(1, { message: 'Por favor escribe una cantidad' })
    .trim(),
});

export const Step3 = () => {
  const { setPreviousStep, setNextStep } = useInventoryStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstPayment: '',
      secondPayment: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
    console.log(values);
    setNextStep();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div>
          <h3 className="mt-2 text-2xl font-semibold">Capital de pagos</h3>
          <Separator className="my-5" />

          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="firstPayment"
              render={({ field }) => (
                <FormItem className="mb-4 w-2/3">
                  <FormLabel>Primer pago</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secondPayment"
              render={({ field }) => (
                <FormItem className="mb-4 w-2/3">
                  <FormLabel>Segundo pago</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <h3 className="mt-4 text-2xl font-semibold">Valor del terreno</h3>
          <Separator className="my-5" />

          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="firstPayment"
              render={({ field }) => (
                <FormItem className="mb-4 w-2/3">
                  <FormLabel>Valor remate</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secondPayment"
              render={({ field }) => (
                <FormItem className="mb-4 w-2/3">
                  <FormLabel>Valor comercial</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 flex gap-5">
          <Button type="button" onClick={setPreviousStep}>
            Anterior
          </Button>
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
};
