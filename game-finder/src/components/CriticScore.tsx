import { Badge } from "@chakra-ui/react";

interface CriteProp {
    score: number
}

const CriticScore = ({ score }: CriteProp) => {
  return (
    <Badge>
        {score}
    </Badge>
  )
}

export default CriticScore