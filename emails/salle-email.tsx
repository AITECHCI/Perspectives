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
  Hr,
} from "@react-email/components";
import { SalleEmailData } from "@/types";

export const SalleEmail: React.FC<SalleEmailData> = ({
  clientName = "Non spécifié",
  clientEmail = "Non spécifié",
  clientPhone = "Non spécifié",
  tarif = "Non spécifié",
  dates= "Non spécifié",
  nombreParticipants,
  nomEvenement,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de réservation - Perspectives CI</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header compact */}
          <Section style={headerSection}>
            <Img
              src={`${process.env.NEXT_PUBLIC_BASE_URL || "https://perspectivesci.com"}/images/Icone White.png`}
              width="80"
              height="80"
              alt="Perspectives CI"
              style={logo}
            />
            <Heading style={mainHeading}>Demande de Réservation</Heading>
            <Text style={subtitle}>Complexe Carré Massina</Text>
          </Section>

          {/* Section principale compacte */}
          <Section style={mainSection}>
            <Heading style={sectionHeading}>📋 Informations Client</Heading>
            
            <div style={compactGrid}>
              <div style={compactItem}>
                <Text style={label}>👤 Nom</Text>
                <Text style={value}>{clientName}</Text>
              </div>
              
              <div style={compactItem}>
                <Text style={label}>📧 Email</Text>
                <Text style={value}>{clientEmail}</Text>
              </div>
              
              <div style={compactItem}>
                <Text style={label}>📞 Téléphone</Text>
                <Text style={value}>{clientPhone}</Text>
              </div>
            </div>

            <Hr style={divider} />

            <Heading style={sectionHeading}>💼 Réservation</Heading>
            
            <div style={compactGrid}>
              <div style={compactItem}>
                <Text style={label}>💰 Tarif</Text>
                <Text style={valueHighlight}>{tarif}</Text>
              </div>
              
              <div style={compactItem}>
                <Text style={label}>📅 Date(s)</Text>
                <Text style={value}>{dates}</Text>
              </div>
            </div>

            {/* Informations événement si applicable */}
            {(nombreParticipants || nomEvenement) && (
              <>
                <Hr style={divider} />
                <Heading style={sectionHeading}>🎯 Événement</Heading>
                
                <div style={compactGrid}>
                  {nombreParticipants && (
                    <div style={compactItem}>
                      <Text style={label}>👥 Participants</Text>
                      <Text style={value}>{nombreParticipants} personnes</Text>
                    </div>
                  )}
                  
                  {nomEvenement && (
                    <div style={compactItem}>
                      <Text style={label}>🎪 Événement</Text>
                      <Text style={value}>{nomEvenement}</Text>
                    </div>
                  )}
                </div>
              </>
            )}
          </Section>

          {/* Section de confirmation compacte */}
          <Section style={confirmationSection}>
            <Text style={confirmationText}>
              ✅ Votre demande a été reçue. Notre équipe vous contactera prochainement.
            </Text>
          </Section>

          {/* Footer compact */}
          <Section style={footerSection}>
            <Text style={footerText}>
              Merci de faire confiance à <strong>Perspectives CI</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles optimisés pour une hauteur réduite
const main: React.CSSProperties = {
  backgroundColor: "#f8fafc",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
};

const headerSection: React.CSSProperties = {
  backgroundColor: "hsl(20, 69%, 33%)",
  padding: "25px 30px",
  textAlign: "center",
  color: "#ffffff",
};

const logo: React.CSSProperties = {
  margin: "0 auto 15px",
  borderRadius: "8px",
  objectFit: "cover",
};

const mainHeading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 5px 0",
  textAlign: "center",
};

const subtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#94a3b8",
  margin: "0",
  textAlign: "center",
};

const mainSection: React.CSSProperties = {
  padding: "25px 30px",
  backgroundColor: "#ffffff",
};

const sectionHeading: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  margin: "0 0 15px 0",
  borderBottom: "1px solid #e2e8f0",
  paddingBottom: "8px",
};

const compactGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  marginBottom: "20px",
};

const compactItem: React.CSSProperties = {
  backgroundColor: "#f8fafc",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #e2e8f0",
};

const label: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#64748b",
  margin: "0 0 3px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const value: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#1e293b",
  margin: "0",
};

const valueHighlight: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: "700",
  color: "#059669",
  margin: "0",
  backgroundColor: "#ecfdf5",
  padding: "6px 10px",
  borderRadius: "4px",
  border: "1px solid #a7f3d0",
};

const divider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "20px 0",
};

const confirmationSection: React.CSSProperties = {
  backgroundColor: "#f0f9ff",
  padding: "20px 30px",
  textAlign: "center",
  borderTop: "1px solid #e2e8f0",
};

const confirmationText: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#0c4a6e",
  margin: "0",
  fontWeight: "500",
};

const footerSection: React.CSSProperties = {
  backgroundColor: "hsl(20, 69%, 33%)",
  padding: "20px 30px",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0",
  fontWeight: "500",
};
