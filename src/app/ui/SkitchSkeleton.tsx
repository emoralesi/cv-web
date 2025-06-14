import { Skeleton } from "@mui/material";

const SwitchSkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      width={62}
      height={34}
      sx={{ borderRadius: "17px" }}
    />
  );
};

export default SwitchSkeleton;
