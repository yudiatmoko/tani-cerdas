import React from "react";
import { Card, Image } from "react-bootstrap";

const CardTestimonial = ({ desc, userImage, userName, userRole }) => {
  return (
    <Card className="p-6 min-h-80 w-full mx-auto bg-white justify-around items-center gap-4 flex flex-col text-center">
      <Card.Body>
        <h3 className="text-black text-lg font-normal font-['Roboto'] leading-snug text-center">
          {desc}
        </h3>
      </Card.Body>
      <Card.Footer className="flex flex-col items-center justify-end gap-4">
        <Image className="rounded-full w-12 h-12 mt-4" src={userImage} />
        <h2 className="text-black text-xl md:text-2xl font-bold font-['Roboto']">
          {userName} - {userRole}
        </h2>
      </Card.Footer>
    </Card>
  );
};

export default CardTestimonial;
