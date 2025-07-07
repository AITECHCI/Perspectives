"use client";

import TitleSection from "@/components/title-section";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { usePay } from "@/hooks/usePay";
import { espaces } from "@/config/data";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  tarif: string;
  dates: Date[];
  nombreParticipants?: number;
  nomEvenement?: string;
}

export default function Content({ group, space }: { group: any; space: any }) {
  const router = useRouter();
  const [dates, setDates] = useState<Date[]>([]);
  const [selectedTarif, setSelectedTarif] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [data, setData] = useState<any>();
  const [isMonthlyTarif, setIsMonthlyTarif] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  let selectedSpace = space;
  if (group && group.items && space && space.id) {
    // Cas classique : espace avec sous-items
    const foundGroup = espaces.find((e) => e.id === group.id);
    const foundItem = foundGroup?.items?.find((i) => i.id === space.id);
    if (foundItem) selectedSpace = foundItem;
  } else if (group && group.id) {
    // Cas où l'espace est le groupe lui-même (ex: salle de réunion)
    const foundGroup = espaces.find((e) => e.id === group.id);
    if (foundGroup) selectedSpace = foundGroup;
  }
  const hasTarifs = selectedSpace && selectedSpace.tarifs && selectedSpace.tarifs.length > 0;

  // Détection salle de conférence
  const isConferenceRoom = space?.id === "meeting_room";

  // Fonction pour calculer le montant total
  const calculateAmount = (tarifString: string, dates: Date[]): number => {
    if (!tarifString) return 0;
    
    const [tarifGroupName, tarifItemTitle] = tarifString.split("|");
    const tarifGroup = selectedSpace.tarifs.find(
      (t: any) => t.name === tarifGroupName
    );
    const tarifItem = tarifGroup?.items.find(
      (item: any) => item.title === tarifItemTitle
    );
    
    if (!tarifItem) return 0;

    const price = parseInt(tarifItem.price.replace(/\D/g, ""));
    if (tarifItem.title.toLowerCase().includes("mois")) {
      return price * dates.length;
    } else if (tarifItem.title.toLowerCase().includes("heure")) {
      return price * dates.length;
    } else if (tarifItem.title.toLowerCase().includes("demie journée")) {
      return price * Math.ceil(dates.length / 2);
    } else if (tarifItem.title.toLowerCase().includes("journée")) {
      return price * dates.length;
    }
    return 0;
  };

  const { open, paymentStatus } = usePay();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setData(data);
    try {
      const response = await fetch("/api/send-email/sallereservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Demande de réservation PersPectives",
          to: [data.email, "infos@perspectivesci.com"],
          emailData: {
            clientName: data.name,
            clientEmail: data.email,
            clientPhone: data.phone,
            tarif: selectedTarif,
            dates: formatDates(dates),
            ...(isConferenceRoom && {
              nombreParticipants: data.nombreParticipants,
              nomEvenement: data.nomEvenement,
            }),
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      setShowSuccess(true);
      reset();
      setDates([]);
      setSelectedTarif("");
    } catch (error) {
      toast("Erreur", {
        description: "Une erreur est survenue lors de l'envoi de la demande",
      });
    }
  };

  const formatDates = (dates: Date[]): string => {
    return isMonthlyTarif
      ? dates.map((d) => dayjs(d).format("YYYY-MM")).join(",")
      : dates.map((d) => dayjs(d).format("YYYY-MM-DD")).join(",");
  };

  useEffect(() => {
    if (selectedTarif && dates.length > 0) {
      const amount = calculateAmount(selectedTarif, dates);
      setTotalAmount(amount);
    } else {
      setTotalAmount(0);
    }
  }, [selectedTarif, dates]);

  return (
    <section className="container min-h-[300px] py-14 relative">
      <TitleSection title={"Détail de réservation"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 md:gap-8 lg:grid-cols-2 mt-4"
      >
        <div className="relative flex-col items-start gap-8 flex">
          <div className="grid w-full items-start gap-6">
            <div className="grid gap-6 rounded-lg border p-4">
              <CardTitle>Détail sur l&apos;espace</CardTitle>
             
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text font-medium leading-none">Nom</p>
                </div>
                <div className="ml-auto font-medium">{space?.title}</div>
              </div>
            </div>

            <div className="grid gap-6 rounded-lg border p-4">
              <CardTitle>Informations personnelles</CardTitle>
              <div className="grid gap-3">
                <Label htmlFor="name">Nom & Prénoms</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p role="alert">Nom & Prénom sont requis</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email est requis</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", { required: true })}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone?.type === "required" && (
                  <p role="alert">Téléphone est requis</p>
                )}
              </div>
              {/* Champs spécifiques salle de conférence */}
              {isConferenceRoom && (
                <>
                  <div className="grid gap-3">
                    <Label htmlFor="nombreParticipants">Nombre de participants</Label>
                    <Input
                      id="nombreParticipants"
                      type="number"
                      min={1}
                      {...register("nombreParticipants", { required: true, min: 1 })}
                      aria-invalid={errors.nombreParticipants ? "true" : "false"}
                    />
                    {errors.nombreParticipants && (
                      <p role="alert">Nombre de participants requis</p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="nomEvenement">Nom de l&apos;événement</Label>
                    <Input
                      id="nomEvenement"
                      type="text"
                      {...register("nomEvenement", { required: true })}
                      aria-invalid={errors.nomEvenement ? "true" : "false"}
                    />
                    {errors.nomEvenement && (
                      <p role="alert">Nom de l&apos;événement requis</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Détail du paiement</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            {/* Sélection du tarif */}
            <div className="grid gap-3">
              <Label htmlFor="tarif">Tarif</Label>
              <Select
                onValueChange={(value) => {
                  setSelectedTarif(value);
                  setIsMonthlyTarif(value.toLowerCase().includes("mois"));
                  setDates([]); // Réinitialiser les dates lors du changement de tarif
                }}
                value={selectedTarif}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un tarif" />
                </SelectTrigger>
                <SelectContent>
                  {selectedSpace.tarifs && selectedSpace.tarifs.map(
                    (tarifGroup: any, groupIndex: number) => (
                      <React.Fragment key={groupIndex}>
                        <SelectItem value={`group-${groupIndex}`} disabled>
                          {tarifGroup.name}
                        </SelectItem>
                        {tarifGroup.items.map(
                          (item: any, itemIndex: number) => (
                            <SelectItem
                              key={`${groupIndex}-${itemIndex}`}
                              value={`${tarifGroup.name}|${item.title}`}
                            >
                              {item.title} - {item.price}
                            </SelectItem>
                          )
                        )}
                      </React.Fragment>
                    )
                  )}
                </SelectContent>
              </Select>
              {!selectedTarif && (
                <span className="text-red-500 text-xs">Le tarif est requis</span>
              )}
            </div>
            {/* Sélection de la date */}
            <div className="grid gap-3">
              <Label htmlFor="date">
                {isMonthlyTarif ? "Choisissez les mois" : "Choisissez les dates"}
              </Label>
              <Calendar
                id="date"
                mode="multiple"
                selected={dates}
                onSelect={(days) => setDates(days || [new Date()])}
                numberOfMonths={2}
                className="rounded-md border"
                disabled={(date) =>
                  isMonthlyTarif ? date.getDate() !== 1 : false
                }
              />
              {dates.length === 0 && (
                <span className="text-red-500 text-xs">La date est requise</span>
              )}
            </div>
            {/* Affichage du tarif sélectionné */}
            {selectedTarif && (
              <div className="text-md font-semibold">Tarif sélectionné : {selectedTarif}</div>
            )}
            {/* Affichage des dates sélectionnées */}
            {dates.length > 0 && (
              <div className="text-md font-semibold">Date(s) : {formatDates(dates)}</div>
            )}
            <Button
              type="submit"
              disabled={!isValid || dates.length === 0 || !selectedTarif}
              className="ml-auto gap-1"
            >
              <span>
                Demander une réservation
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Button>
          </CardContent>
        </Card>
      </form>
      <Dialog open={showSuccess} onOpenChange={(open) => {
        setShowSuccess(open);
        if (!open) {
          router.push("/our_spaces/private_offices");
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Réservation envoyée !</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-lg font-semibold mb-2">Votre demande de réservation a bien été envoyée.</p>
            <p>Un email de confirmation a été envoyé à votre adresse et à l&apos;administrateur.</p>
          </div>
          <Button onClick={() => setShowSuccess(false)} className="w-full mt-2">Fermer</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}