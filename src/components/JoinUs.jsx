import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Img from "../assets/Img/getInvolved.jpeg";

import { MdVolunteerActivism } from "react-icons/md";

export default function JoinUs() {
  const [expanded, setExpanded] = React.useState(null); // null means all are closed initially

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null); // Open the clicked panel, close others
  };

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img src={Img} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#DA7600] flex gap-1">
            <MdVolunteerActivism />
            <p className="text-sm pb-4">Join Us</p>
          </div>
          <h2 className="text-center text-3xl pb-4 font-bold">
            We&apos;re always looking for talented individuals to join our team.
          </h2>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="mb-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md "
          >
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  className={
                    expanded === "panel1" ? "text-[#DA7600]" : "text-black"
                  }
                />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className="bg-gray-50 rounded"
            >
              <Typography
                component="span"
                className={`text-lg font-semibold ${
                  expanded === "panel1" ? "text-[#DA7600]" : "text-black"
                }`}
              >
                Recognition and Fulfillment
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              <Typography className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="mb-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md"
          >
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  className={
                    expanded === "panel2" ? "text-[#DA7600]" : "text-black"
                  }
                />
              }
              aria-controls="panel2-content"
              id="panel2-header"
              className="bg-gray-50"
            >
              <Typography
                component="span"
                className={`text-lg font-semibold ${
                  expanded === "panel2" ? "text-[#DA7600]" : "text-black"
                }`}
              >
                Why Join Us as a Volunteer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              <Typography className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="mb-4 bg-gray-100 border border-gray-200 rounded-lg shadow-md"
          >
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon
                  className={
                    expanded === "panel3" ? "text-[#DA7600]" : "text-black"
                  }
                />
              }
              aria-controls="panel3-content"
              id="panel3-header"
              className="bg-gray-50"
            >
              <Typography
                component="span"
                className={`text-lg font-semibold transition-transform duration-500 ease-in-out ${
                  expanded === "panel3" ? "text-[#DA7600]" : "text-black"
                }`}
              >
                Be Part of a Community
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white">
              <Typography className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
