import React from "react";
import { Card } from "react-bootstrap";
import { StyledEngineProvider, Button } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AutoStories } from "@mui/icons-material";
import { School } from "@mui/icons-material";

const CardEducation = ({
  image,
  title,
  level,
  modules,
  duration,
  desc,
  ...props
}) => {
  return (
    <Card
      className="flex flex-col gap-4 p-4 md:gap-8 w-full bg-primary-50 border border-black rounded-md"
      {...props}
    >
      <Card.Header className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        <Card.Img
          src={image}
          variant="top-left"
          className="h-32 md:h-40 w-full md:w-[210px] border border-black rounded-md object-cover"
        />
        <div className="flex flex-col justify-between items-start gap-1">
          <Card.Title className="text-black text-xl md:text-2xl font-bold font-['Roboto'] mb-2">
            {title}
          </Card.Title>
          <Card.Text className="flex items-center gap-2 text-justify text-black text-base font-normal font-['Roboto']">
            <School /> {level}
          </Card.Text>
          <Card.Text className="flex items-center gap-2 text-justify text-black text-base font-normal font-['Roboto']">
            <AutoStories /> {`${modules} Modul`}
          </Card.Text>
          <Card.Text className="flex items-center gap-2 text-justify text-black text-base font-normal font-['Roboto']">
            <AccessTimeFilledIcon /> {`${duration} Menit`}
          </Card.Text>
        </div>
      </Card.Header>
      <Card.Body className="flex flex-col justify-center items-center gap-4 md:gap-6">
        <Card.Text className="text-justify text-black text-lg md:text-xl font-normal font-['Roboto'] leading-6 md:leading-8">
          {desc}
        </Card.Text>
        <StyledEngineProvider injectFirst>
          <Button
            variant="outlined"
            size="large"
            className="border-black capitalize mt-2 text-center text-black text-lg font-medium font-['Roboto'] hover:text-primary-200 hover:border-primary-200"
          >
            Baca Selengkapnya
          </Button>
        </StyledEngineProvider>
      </Card.Body>
    </Card>
  );
};

export default CardEducation;
