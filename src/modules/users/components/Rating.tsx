import { Star, StarHalf } from 'lucide-react';

export const Rating = () => {
  return (
    <div className="flex gap-2 text-alt-green-300">
      <Star fill="#AAFFE3" />
      <Star fill="#AAFFE3" />
      <Star fill="#AAFFE3" />
      <Star fill="#AAFFE3" />
      {/* <Star /> */}
      <StarHalf fill="#AAFFE3" />
    </div>
  );
};
