import { Button } from "@chakra-ui/react";

interface PaginationItemsProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent=false, onPageChange, number }: PaginationItemsProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgcolor: "pink",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
