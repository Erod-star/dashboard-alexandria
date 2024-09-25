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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  TabNumbers,
} from '@/components';

const formSchema = z.object({
  category: z
    .string()
    .min(1, { message: 'Por favor selecciona una categoría' })
    .trim(),
  propertyType: z
    .string()
    .min(1, { message: 'Por favor selecciona un tipo de propiedad' })
    .trim(),
  rooms: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de habitaciones' })
    .trim(),
  bathRooms: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de baños' })
    .trim(),
  parkings: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de estacionamientos' })
    .trim(),
  totalArea: z
    .string()
    .min(1, { message: 'Por favor introduce la superficie total' })
    .trim(),
  builtArea: z
    .string()
    .min(1, { message: 'Por favor introduce la superficie construida' })
    .trim(),
});

interface Step2Props {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

export const Step2 = ({ onNextStep, onPreviousStep }: Step2Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: '',
      category: '',
      rooms: '',
      bathRooms: '',
      parkings: '',
      totalArea: '',
      builtArea: '',
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
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Categoría</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Premium</SelectLabel>
                      <SelectItem value="Cobranza">Cobranza</SelectItem>
                      <SelectItem value="Juicio">Juicio</SelectItem>
                      <SelectItem value="Sentencia">Sentencia</SelectItem>
                      <SelectItem value="Adjudicada">Adjudicada</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Classic</SelectLabel>
                      <SelectItem value="Altaltium">Altaltium</SelectItem>
                      <SelectItem value="Preventa">Preventa</SelectItem>
                      <SelectItem value="Consignación">Consignación</SelectItem>
                      <SelectItem value="Banco">Banco</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tipo de propiedad</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Casa">Casa</SelectItem>
                    <SelectItem value="Departamento">Departamento</SelectItem>
                    <SelectItem value="Condominio">Condominio</SelectItem>
                    <SelectItem value="Nave industrial">
                      Nave industrial
                    </SelectItem>
                    <SelectItem value="Terreno">Terreno</SelectItem>
                    <SelectItem value="Local">Local</SelectItem>
                    <SelectItem value="Oficina">Oficina</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="space-y-7 justify-center justify-self-center mx-auto">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <TabNumbers
                  label="Habitaciones"
                  onValueChange={field.onChange}
                  value={field.value}
                />
              )}
            />

            <FormField
              control={form.control}
              name="bathRooms"
              render={({ field }) => (
                <TabNumbers
                  label="Baños"
                  onValueChange={field.onChange}
                  value={field.value}
                />
              )}
            />

            <FormField
              control={form.control}
              name="parkings"
              render={({ field }) => (
                <TabNumbers
                  label="Estacionamientos"
                  onValueChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className="col-span-2">
            <h3 className="mt-8 text-2xl font-semibold">Superficie</h3>
            <Separator className="my-4" />

            <FormField
              control={form.control}
              name="totalArea"
              render={({ field }) => (
                <FormItem className="mb-4 w-2/3">
                  <FormLabel>Terreno total</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="builtArea"
              render={({ field }) => (
                <FormItem className="w-2/3">
                  <FormLabel>Terreno construido</FormLabel>
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
          <Button type="button" onClick={onPreviousStep}>
            Anterior
          </Button>
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
};
