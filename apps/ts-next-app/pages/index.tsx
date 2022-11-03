import React from "react";
import Button from "@younesbessa/ts-button";
const Index = () => {
  return (
    <div>
      <Button isSelected onClick={() => alert("Hello!")}>
        Hello World!
      </Button>
    </div>
  );
};
export default Index;