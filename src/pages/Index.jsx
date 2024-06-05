import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, Box, useColorMode } from "@chakra-ui/react";
import { FaTint } from "react-icons/fa";

const Index = () => {
  const [waterAmount, setWaterAmount] = useState("");
  const [totalWater, setTotalWater] = useState(0);

  const handleAddWater = () => {
    const amount = parseFloat(waterAmount);
    if (!isNaN(amount) && amount > 0) {
      setTotalWater(totalWater + amount);
      setWaterAmount("");
    }
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Button onClick={toggleColorMode} mb={4}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <VStack spacing={4}>
        <Text fontSize="2xl">Water Tracker</Text>
        <Text fontSize="lg">Track your daily water intake</Text>
        <HStack spacing={2}>
          <Input placeholder="Enter amount in liters" value={waterAmount} onChange={(e) => setWaterAmount(e.target.value)} type="number" step="0.1" />
          <Button leftIcon={<FaTint />} colorScheme="blue" onClick={handleAddWater}>
            Add
          </Button>
        </HStack>
        <Box mt={4}>
          <Text fontSize="xl">Total Water Consumed: {totalWater} liters</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
