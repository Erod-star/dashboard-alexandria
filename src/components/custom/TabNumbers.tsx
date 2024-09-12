// // ? Components
// import {
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   RadioGroup,
//   RadioGroupItem,
// } from '@/components';

// interface TabNumbersProps {
//   label?: string;
//   value?: string;
//   onValueChange?: (value: string) => void;
// }

// export const TabNumbers = ({
//   label,
//   value,
//   onValueChange,
// }: TabNumbersProps) => {
//   return (
//     <FormItem>
//       {label && (
//         <FormLabel className="after:content-['*'] after:ml-1 after:text-red-500">
//           {label}
//         </FormLabel>
//       )}

//       <FormControl>
//         <RadioGroup
//           onValueChange={onValueChange}
//           defaultValue={value}
//           value={value}
//         >
//           <FormItem>
//             <FormControl>
//               <RadioGroupItem className="absolute invisible" value="" />
//             </FormControl>
//           </FormItem>

//           <FormItem className="flex items-center space-x-3 space-y-0">
//             <FormControl>
//               <div className="group relative flex items-center justify-center">
//                 <RadioGroupItem
//                   className="absolute w-full h-full border-white rounded-sm"
//                   value="1"
//                 />
//                 <p className="font-normal h-full w-full px-3 bg-red-700 rounded-sm group-checked:bg-orange-900">
//                   1
//                 </p>
//               </div>
//             </FormControl>

//             <FormControl>
//               <div className="relative flex items-center justify-center">
//                 <RadioGroupItem
//                   className="group absolute w-full h-full border-white rounded-sm "
//                   value="2"
//                 />
//                 <p className="font-normal h-full w-full px-3 bg-transparent rounded-sm group-checked:bg-orange-900">
//                   2
//                 </p>
//               </div>
//             </FormControl>
//           </FormItem>
//         </RadioGroup>
//       </FormControl>
//       <FormMessage />
//     </FormItem>
//   );
// };

// ? Components
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components';

interface TabNumbersProps {
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TabNumbers = ({
  label,
  value,
  onValueChange,
}: TabNumbersProps) => {
  return (
    <FormItem>
      {label && (
        <FormLabel className="after:content-['*'] after:ml-1 after:text-red-500">
          {label}
        </FormLabel>
      )}

      <FormControl>
        <RadioGroup
          onValueChange={onValueChange}
          defaultValue={value}
          value={value}
        >
          <FormItem>
            <FormControl>
              <RadioGroupItem className="absolute invisible" value="" />
            </FormControl>
          </FormItem>

          <ToggleGroup
            className="border gap-0 rounded-md w-[200px]"
            type="single"
            value={value}
          >
            <div className="relative">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    className="h-full w-full absolute opacity-0"
                    value="1"
                  />
                </FormControl>
              </FormItem>

              <ToggleGroupItem value="1" aria-label="Toggle 1" role="row">
                1
              </ToggleGroupItem>
            </div>

            <div className="relative">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    className="h-full w-full absolute opacity-0 rounded-none disabled:opacity-0 disabled:cursor-not-allowed"
                    value="2"
                  />
                </FormControl>
              </FormItem>

              <ToggleGroupItem value="2" aria-label="Toggle 2" role="row">
                2
              </ToggleGroupItem>
            </div>

            <div className="relative">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    className="h-full w-full absolute opacity-0 rounded-none disabled:opacity-0 disabled:cursor-not-allowed"
                    value="3"
                  />
                </FormControl>
              </FormItem>

              <ToggleGroupItem value="3" aria-label="Toggle 3" role="row">
                3
              </ToggleGroupItem>
            </div>

            <div className="relative">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    className="h-full w-full absolute opacity-0 rounded-none disabled:opacity-0 disabled:cursor-not-allowed"
                    value="4"
                  />
                </FormControl>
              </FormItem>

              <ToggleGroupItem value="4" aria-label="Toggle 4" role="row">
                4
              </ToggleGroupItem>
            </div>

            <div className="relative">
              <FormItem>
                <FormControl>
                  <RadioGroupItem
                    className="h-full w-full absolute opacity-0 rounded-none disabled:opacity-0 disabled:cursor-not-allowed"
                    value="5+"
                  />
                </FormControl>
              </FormItem>

              <ToggleGroupItem value="5+" aria-label="Toggle 5+" role="row">
                5+
              </ToggleGroupItem>
            </div>
          </ToggleGroup>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
