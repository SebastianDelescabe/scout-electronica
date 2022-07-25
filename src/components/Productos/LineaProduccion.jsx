import React, { useState } from "react";
import "./Productos.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import products from "../../assets/data/productData";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#6fe3e7" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  color: "#000",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const LineaProduccion = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {products.map((prod) => (
        <Accordion
          expanded={expanded === `panel${prod.id}`}
          onChange={handleChange(`panel${prod.id}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{prod.title}</Typography>
          </AccordionSummary>     
          <AccordionDetails>
           <div className="container-prod-elements">
           <div >
             {prod.descriptionItems.map((el) => (
                <Typography>.{el}</Typography>
              ))}
             </div>
              <img className="img-acc-prod" src={prod.image} alt="prod" width="150px"  height='150px'/>
           </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
