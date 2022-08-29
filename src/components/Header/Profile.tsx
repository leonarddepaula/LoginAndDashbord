import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo De Paula</Text>
        <Text color="gray.300" fontSize="small">
          leodepaula315@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Leonardo De Paula"
        src="https://github.com/leonarddepaula.png"
      />
    </Flex>
  );
}
