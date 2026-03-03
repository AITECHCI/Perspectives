
import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { FormulaEmailData } from "@/types";

export const FormulaEmail: React.FC<FormulaEmailData> = ({
  clientName = "Non spécifié",
  clientEmail = "Non spécifié",
  clientPhone = "Non spécifié",
  roomType = "Non spécifié",
  dates= "Non spécifié",
  guests= "Non spécifié",
  totalPrice = "Non spécifié",
 
}) => {
  // Validation pour productTitle
  

  return (
    <Html>
      <Head />
      <Preview>Reservation d'un appartement</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${process.env.NEXT_PUBLIC_BASE_URL || "https://perspectivesci.com"}/images/logo.png`}
            width="100"
            height="100"
            alt="Perspectives CI"
            style={logo}
          />
          <Heading style={heading}>Demande de Reservation</Heading>
          <Section style={section}>
            <Text style={text} className="text-center">Informations du client</Text>
            <Text style={text}>Nom : {clientName}</Text>
            <Text style={text}>Email : {clientEmail}</Text>
            <Text style={text}>Téléphone : {clientPhone}</Text>
            <Text style={text}>Nombre de personne : {guests}</Text>
            <Text style={text}>Type d'appartement': {roomType}</Text>
            <Text style={text}>Prix de l'appartement : {totalPrice}</Text>
            <Text style={text}>Date de reservation: {dates } </Text>
          </Section>
          <Section style={footerSection}>
            <Text style={footerText}>
              Merci de faire confiance à Perspectives CI. 
              Nous vous contacterons prochainement pour finaliser votre réservation.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles inchangés
const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
  objectFit: "cover",
};

const heading: React.CSSProperties = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  textAlign: "center",
};

const section: React.CSSProperties = {
  padding: "24px",
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "6px",
  marginBottom: "20px",
};

const text: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  margin: "10px 0",
};

const footerSection: React.CSSProperties = {
  backgroundColor: "#f6f9fc",
  padding: "20px",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "14px",
  color: "#666",
  fontStyle: "italic",
};

export default FormulaEmail;
