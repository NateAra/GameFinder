import { Badge } from "@chakra-ui/react";

interface CriteProp {
  score: number;
}

const CriticScore = ({ score }: CriteProp) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
