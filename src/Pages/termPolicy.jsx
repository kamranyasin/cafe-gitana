import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Container, Checkbox, Button } from "@mui/material";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { ContextApi } from "../ContextApi/ContextApi";
import axiosInstance from "../axios-Instance";
import "./termPolicy.css";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";

const TermPolicy = () => {
  const history = useHistory();
  const [value, setvalue] = useState({
    items: [],
  });
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(async () => {
    await axiosInstance
      .get("termAndCondition/getAll")
      .then(async (response) => {
        console.log("response 123werh data", response.data);
        setvalue({ ...value, items: response.data.item });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("data iteme", value.items);

  const contextType = useContext(ContextApi);

  console.log(" context ", contextType);
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Box className="box-typo-conditiocafegitana">
            <Box>
              <Typography className="typo-condition-general">
                CONDITIONS GÉNÉRALES D'UTILISATION
              </Typography>
              <Typography className="typo-de-cafegitana">
                DE: cafegitana.com
              </Typography>
            </Box>
            <Box>
              <Typography className="typo-date">
                Date de dernière mise à jour : 28 sept.-21{" "}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography></Typography>
            <Typography className="typo-les-condition">
              Les conditions générales qui suivent gouvernent et s'appliquent à
              votre utilisation ou recours au site maintenu par Café Gitana Inc.
              (le "cafegitana.com"). En accédant au site ou en y navigant, vous
              déclarez avoir lu et compris les conditions générales
              d'utilisation et déclarez être liés par ces conditions. Veuillez
              noter que nous pouvons modifier les conditions d'utilisation à
              tout moment et sans préavis. Votre utilisation continue du site
              sera considérée comme votre acceptation des conditions générales
              révisées.
            </Typography>
          </Box>
          <Box>
            {value.items.map((optionValueItem, index) => {
              return (
                <Box>
                  <Box className="box-indexTitle">
                    <Typography className="typo-index">
                      {optionValueItem.id}
                    </Typography>
                    <Typography className="typo-title">
                      {optionValueItem.title}
                    </Typography>
                  </Box>

                  <Typography className="typo-description">
                    {optionValueItem.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* <Box>
        <Checkbox
      checked={checked}
      onChange={(event) => {setChecked(event.target.checked)}}
      inputProps={{ 'aria-label': 'controlled' }}
    />
          <Typography> Agree and continue</Typography>
        </Box>
        <Box>
          <Button>Continue</Button>
        </Box> 
        */}
      </Container>
      <FooterOne />
    </>
  );
};

export default TermPolicy;
