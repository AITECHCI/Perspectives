"use client";

import TitleSection from "@/components/title-section";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, Calendar as CalendarIcon, Users, Bed, Loader2, Mail, Phone, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface CalendarProps {
  id?: string;
  mode?: "multiple";
  selected: Date[];
  onSelect: (dates: Date[] | undefined) => void;
  showOutsideDays?: boolean;
  fromDate?: Date;
  className?: string;
}

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

interface RoomType {
  id: string;
  title: string;
  pricePerNight: number;
}

const roomTypes: RoomType[] = [
  { id: "appart_b", title: "Appartement B", pricePerNight: 80000 },
  { id: "appart_b23", title: "Appartement B23", pricePerNight: 150000 },
  { id: "appart_marron", title: "Appartement Marron", pricePerNight: 100000 },
  { id: "appart_pressing", title: "Appartement Pressing", pricePerNight: 50000 },
  { id: "appart_soleil", title: "Appartement Soleil", pricePerNight: 150000 },
  { id: "appart_prima", title: "Appartement Prima", pricePerNight: 80000 },
  // { id: "appart_complexe_carre_massina", title: "Complexe Carré Massina", pricePerNight: 100000 },
];

export default function ListSpaceCard({
  hotel = { id: "unknown", name: "Unknown Hotel" },
}: {
  hotel?: { id: string; name: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [guests, setGuests] = useState<number>(1);
  const [roomType, setRoomType] = useState<string>(roomTypes[0].id);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentData, setApartmentData] = useState<{
    name: string;
    image: string;
    description: string;
  } | null>(null);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const formData = watch();

  // Extraire les paramètres de l'URL et présélectionner le type de chambre
  useEffect(() => {
    const apartment = searchParams.get("apartment");
    const image = searchParams.get("image");
    const description = searchParams.get("description");

    console.log("URL Parameters:", { apartment, image, description }); // Debug: Log URL parameters

    if (apartment && image && description) {
      const decodedApartment = decodeURIComponent(apartment).trim(); // Remove extra spaces
      setApartmentData({
        name: decodedApartment,
        image: decodeURIComponent(image),
        description: decodeURIComponent(description),
      });

      // Normalize and find matching room
      const matchingRoom = roomTypes.find(
        (room) => room.title.toLowerCase() === decodedApartment.toLowerCase()
      );

      console.log("Matching Room:", matchingRoom); // Debug: Log the matched room

      if (matchingRoom) {
        setRoomType(matchingRoom.id);
      } else {
        console.warn(`No matching room found for apartment: ${decodedApartment}`);
        setRoomType(roomTypes[0].id); // Fallback to default room type
      }
    } else {
      console.warn("Missing URL parameters:", { apartment, image, description });
      setApartmentData(null);
      setRoomType(roomTypes[0].id); // Fallback to default room type
    }
  }, [searchParams]);

  // Calculer le montant total
  const calculateAmount = useCallback(
    (guests: number, roomType: string, dates: Date[]): number => {
      if (!roomType || !dates || dates.length === 0) return 0;

      const selectedRoom = roomTypes.find((room) => room.id === roomType);
      if (!selectedRoom) return 0;

      // Trier les dates pour obtenir la date de début et de fin
      const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());
      if (sortedDates.length < 1) return 0;

      // Calculer le nombre de nuits (différence entre la date de fin et la date de début)
      const startDate = dayjs(sortedDates[0]);
      const endDate = dayjs(sortedDates[sortedDates.length - 1]);
      const nights = Math.max(1, endDate.diff(startDate, 'day')); // Minimum 1 night

      // Prix total = prix par nuit × nombre de nuits
      return selectedRoom.pricePerNight * nights;
    },
    []
  );

  // Valider le formulaire
  const isValidForm = isValid && selectedDates.length > 0 && guests >= 1;

  // Gérer la soumission du formulaire
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    setIsSubmitting(true);
    try {
      // Calculer le montant total pour l'email
      const amount = calculateAmount(guests, roomType, selectedDates);

      // Envoyer l'email avec les détails de la réservation
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Demande de réservation",
          to: [formData.email, "infos@perspectivesci.com"],
          emailData: {
            clientName: formData.name,
            clientEmail: formData.email,
            clientPhone: formData.phone,
            roomType: roomTypes.find((r) => r.id === roomType)?.title,
            dates: selectedDates.map((date) => dayjs(date).format("YYYY-MM-DD")),
            guests: guests,
            totalPrice: amount,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi de l'email");
      }

      // Afficher le modal de confirmation
      setOpen(true);
      // Réinitialiser les champs du formulaire
      reset();
      // Réinitialiser les dates sélectionnées
      setSelectedDates([]);
      // Réinitialiser le nombre de clients
      setGuests(1);
      // Réinitialiser le type de chambre
      setRoomType(roomTypes[0].id);
      // Réinitialiser le montant total
      setTotalAmount(0);
    } catch (error) {
      toast("Erreur", {
        description: `Une erreur s'est produite : ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mettre à jour le montant total lorsque les données changent
  useEffect(() => {
    if (guests && roomType && selectedDates.length > 0) {
      const amount = calculateAmount(guests, roomType, selectedDates);
      setTotalAmount(amount);
    } else {
      setTotalAmount(0);
    }
  }, [guests, roomType, selectedDates, calculateAmount]);

  // Gérer la sélection des dates dans le calendrier
  const handleCalendarSelect = (dates: Date[] | undefined) => {
    setSelectedDates(dates || []);
  };

  const sortedDates = [...selectedDates].sort((a, b) => a.getTime() - b.getTime());
  const startDate = sortedDates.length > 0 ? dayjs(sortedDates[0]) : null;
  const endDate = sortedDates.length > 0 ? dayjs(sortedDates[sortedDates.length - 1]) : null;
  const nights = startDate && endDate ? Math.max(1, endDate.diff(startDate, 'day')) : 0;

  // Obtenir les détails de la chambre sélectionnée pour l'affichage
  const selectedRoom = roomTypes.find((r) => r.id === roomType);

  return (
    <section className="container min-h-[200px] py-14 bg-gradient-to-b from-[#FFF7F4] to-white">
      {/* Afficher les informations sur l'appartement */}
      {apartmentData ? (
        <div className="mb-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">{apartmentData.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={apartmentData.image}
                alt={`Image de ${apartmentData.name}`}
                width={800}
                height={500}
                className="w-full h-[300px] object-cover"
                quality={85}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-amber-600 text-lg">{apartmentData.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 max-w-5xl mx-auto">
          <p className="text-red-500 text-lg">
            Aucun appartement sélectionné. Veuillez choisir un appartement depuis la page des espaces.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 md:gap-8 lg:grid-cols-2 mt-6 max-w-5xl mx-auto min-h-[200px]"
      >
        <div className="space-y-6">
          <Card className="shadow-lg border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Informations sur les clients
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-amber-700">Nom complet</Label>
                <Input
                  id="name"
                  type="text"
                  className="border-amber-300 focus:ring-amber-500"
                  {...register("name", { required: "Le nom complet est requis" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-amber-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="border-amber-300 focus:ring-amber-500"
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Adresse email invalide",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-amber-700">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="border-amber-300 focus:ring-amber-500"
                    {...register("phone", { required: "Le téléphone est requis" })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-amber-200 min-h-[80px]">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center">
                <Bed className="h-6 w-6 mr-2" />
                Détails de la réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="guests" className="text-amber-700">Nombre de clients</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
                  className="border-amber-300 focus:ring-amber-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="roomType" className="text-amber-700">Type de chambre</Label>
                <div className="flex items-center gap-4">
                  <select
                    id="roomType"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="border-amber-300 focus:ring-amber-500 rounded-md p-2 flex-1"
                  >
                    {roomTypes.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.title}
                      </option>
                    ))}
                  </select>
                  {selectedRoom && (
                    <p className="text-amber-600 text-sm">
                      {selectedRoom.pricePerNight > 0
                        ? `${selectedRoom.pricePerNight} FCFA/Nuit`
                        : "Prix à confirmer"}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label className="text-amber-700 flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Date(s) de la réservation
                </Label>
                <Calendar
                  id="reservationDates"
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={handleCalendarSelect}
                  showOutsideDays={true}
                  fromDate={new Date()}
                  className="rounded-md border border-amber-300"
                  aria-multiselectable="true"
                />
                {selectedDates.length > 0 ? (
                  <p className="text-sm text-amber-600">
                    Date(s) sélectionnée(s): {sortedDates
                      .map((date) => dayjs(date).format("YYYY-MM-DD"))
                      .join(" - ")}
                  </p>
                ) : (
                  <p className="text-sm text-amber-600">Aucune date sélectionnée</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg border-amber-200 h-full">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center">
              <Home className="h-6 w-6 mr-2" />
              Résumé de la réservation
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Nom du client
              </p>
              <p className="text-amber-600">
                {formData.name || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </p>
              <p className="text-amber-600">
                {formData.email || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Téléphone
              </p>
              <p className="text-amber-600">
                {formData.phone || "Non fourni"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Date(s) sélectionnée(s)
              </p>
              <p className="text-amber-600">
                {sortedDates.length > 0
                  ? sortedDates.map((date) => dayjs(date).format("YYYY-MM-DD")).join(", ")
                  : "Aucune date sélectionnée"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Nombre de clients
              </p>
              <p className="text-amber-600">{guests}</p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                Type de chambre
              </p>
              <p className="text-amber-600">
                {selectedRoom?.title || "Aucune sélection"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold">Prix par nuit</p>
              <p className="text-amber-600">
                {selectedRoom && selectedRoom.pricePerNight > 0
                  ? `${selectedRoom.pricePerNight} FCFA`
                  : "Prix à confirmer"}
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-amber-700 font-semibold">Total du prix</p>
              <p className="text-lg font-bold text-amber-800">
                {totalAmount > 0
                  ? `${totalAmount} FCFA (${nights} nuit${nights > 1 ? "s" : ""})`
                  : "Aucun calcul"}
              </p>
              {/* {totalAmount === 0 && roomType === "appart_complexe_carre_massina" && (
                <p className="text-red-500 text-sm">
                  Le prix pour {selectedRoom?.title} n'est pas encore défini. Veuillez contacter l'administration.
                </p>
              )} */}
            </div>

            <Button
              type="submit"
              disabled={!isValidForm || isSubmitting}
              className="mt-4 bg-[#8E421C] text-white gap-2 w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>Demander une réservation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </form>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Demande de réservation envoyée
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Votre demande de réservation a été prise en compte. Nous vous contacterons bientôt !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    router.push("/our_spaces/private_offices");
                  }}
                  className="inline-flex w-full justify-center rounded-md bg-[#F4E0D7] px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-[#7A3817] sm:ml-3 sm:w-auto"
                >
                  Fermer
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
}