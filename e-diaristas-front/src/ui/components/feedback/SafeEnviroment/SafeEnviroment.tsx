import React from "react";
import { SafeEnviromentContainer } from "./SafeEnviroment.style";
import { Container } from "@mui/material";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
