import {
  IconStarFilled,
  IconStarHalfFilled,
  IconStar,
} from "@tabler/icons-react";

type Props = {
  rating: number;
  max?: number;
};

export function StarRating({ rating, max = 5 }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", gap: "4px", color: "#facc15" /* amarelo */ }}>
      {Array(fullStars).fill(0).map((_, i) => (
        <IconStarFilled key={`full-${i}`} />
      ))}
      {hasHalfStar && <IconStarHalfFilled />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <IconStar key={`empty-${i}`} />
        ))}
    </div>
  );
};