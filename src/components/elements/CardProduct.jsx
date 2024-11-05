import { Card, Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardProduct = ({ image, title, text, children, ...props }) => {
  return (
    <Card
      {...props}
      className="max-w-sm w-full bg-primary-50 border border-primary-75"
    >
      <Card.Img
        variant="top"
        className="w-full h-auto object-cover"
        src={image}
      />
      <Card.Body className="flex px-4 pt-6 pb-4 gap-4 flex-col">
        <Card.Title className="font-['Roboto'] text-black text-xl font-bold leading-snug">
          {title}
        </Card.Title>
        <Card.Text className="text-black text-base font-normal font-['Roboto'] leading-snug text-justify">
          {text}
        </Card.Text>
        <Button
          {...props}
          className="py-4 btn-block mt-auto text-start text-black text-xl font-medium font-['Roboto'] hover:text-primary-200"
        >
          {children} <ArrowForwardIcon />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
